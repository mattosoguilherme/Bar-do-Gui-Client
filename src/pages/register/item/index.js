import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { ContainerAdm } from "../../../components/container/style";
import HeaderAdmin from "../../../components/headerAdmin";
import FormRegisterAdm from "../style";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegisterItem = () => {
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.token;
    if (!token) {
      setLogged(false);
    }
    const configuration = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("/auth", configuration)
      .then((res) => {
        setAdmin(res.data.role);
        setLogged(true);
      })
      .catch((erro) => console.error(erro));
  }, [logged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const imgUrl = e.target.imgUrl.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const product = e.target.product.value;

    const item = {
      title,
      imgUrl,
      description,
      price: Number(price),
      product,
    };
    
    const token = localStorage.token;
    if (!token) {
      setLogged(false);
    }
    const configuration = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .post("/menu", item, configuration)
      .then((r) => {
        alert(r.status);
        console.log(r);
        navigate("/menu");
      })
      .catch((e) => console.error(e.data.message));
  };

  return (
    <>
      <HeaderAdmin />

      {admin === "ADMIN" && (
        <>
          <ContainerAdm>
            <FormRegisterAdm method="POST" onSubmit={handleSubmit}>
              <h1>Cadastro de produto</h1>
              <label htmlFor="title">Nome</label>
              <input
                required
                id="title"
                type="text"
                placeholder="Digite aqui o nome do produto"
              />

              <label htmlFor="imgUrl">Imagel do Produto</label>
              <input
                required
                id="imgUrl"
                type="url"
                placeholder="Digite aqui a url da imagem"
              />

              <label htmlFor="description">Descrica????o</label>
              <textarea
                required
                type="text"
                id="description"
                placeholder="Digite aqui o nome do produto"
              />

              <label htmlFor="price">Pre??o</label>
              <input
                required
                id="price"
                type="number"
                placeholder="Digite aqui o pre??o"
              />

              <label htmlFor="product">Tipo de Produto</label>
              <select type="text" id="product" required>
                <option>Bebida</option>
                <option>Bebida Alco??lica</option>
                <option>Lanche</option>
                <option>Petiscos</option>
              </select>

              <div className="group-btn">
                <Link to="/admin">
                  <button type="button" className="btnRegister">
                    Voltar
                  </button>
                </Link>

                <button type="submit" className="btnRegister">
                  Cadastrar
                </button>
              </div>
            </FormRegisterAdm>
          </ContainerAdm>
        </>
      )}
      {admin === "USER" && (
        <Alert>Seu usu??rio n??o tem acesso ao essa parte do sistema</Alert>
      )}
      {!logged && (
        <Alert variant="danger">
          <Alert.Heading>Voc?? n??o est?? logado, fa??a login!</Alert.Heading>
        </Alert>
      )}
    </>
  );
};

export default RegisterItem;
