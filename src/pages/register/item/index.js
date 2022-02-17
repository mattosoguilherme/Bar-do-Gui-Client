import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";

import { ContainerAdm } from "../../../components/container/style";
import HeaderAdmin from "../../../components/headerAdmin";
import FormRegisterAdm from "../style";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegisterItem = () => {
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState("");
  const token = localStorage.token;
  const navigate = useNavigate()

  if (!token) {
    setLogged(false);
  }
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    axios
      .get("/auth", config)
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
      price,
      product
    }
    console.log(item)
   
    axios
    .post("/menu",item,config)
    .then((r)=>{
      alert(r.status)
      console.log(r)
      navigate("/menu")
    
    })
    .catch((e) => console.error(e));
    
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

              <label htmlFor="description">Descricação</label>
              <textarea
                required
                type="text"
                id="description"
                placeholder="Digite aqui o nome do produto"
              />

              <label htmlFor="price">Preço</label>
              <input
                required
                id="price"
                type="number"
                placeholder="Digite aqui o preço"
              />

              <label htmlFor="product">Tipo de Produto</label>
              <select type="text" id="product" required>
                <option>Bebida</option>
                <option>Bebida Alcoólica</option>
                <option>Lanche</option>
                <option>Petiscos</option>
              </select>

              <div className="group-btn">
                <Link to="/admin">
                  <button type="button" className="btnRegister">Voltar</button>
                </Link>

                <button type="submit" className="btnRegister">Cadastrar</button>
              </div>
            </FormRegisterAdm>
          </ContainerAdm>
        </>
      )}
      {admin === "USER" && (
        <Alert>Seu usuário não tem acesso ao essa parte do sistema</Alert>
      )}
      {!logged && (
        <Alert>
          <Alert.Heading>Você não está logado, faça login!</Alert.Heading>
        </Alert>
      )}
    </>
  );
};

export default RegisterItem;
