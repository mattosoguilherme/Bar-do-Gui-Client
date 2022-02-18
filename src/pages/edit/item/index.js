import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Alert } from "react-bootstrap";
import { ContainerAdm } from "../../../components/container/style";
import FormRegisterAdm from "../../register/style";
import HeaderAdmin from "../../../components/headerAdmin";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditItem = () => {
  const navigate = useNavigate();
  const [itemDB, setItem] = useState();
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.token;
    if (!token) {
      setLogged(false);
    }
    const configuration = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`/menu/${id}`, configuration)
      .then((r) => {
        setItem(r.data);
      })
      .catch((e) => {
        console.error(e.response);
      });
  }, []);

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
      .catch((erro) => console.error(erro.response));
  }, [logged]);

  const HandleSubmit = (e) => {
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

    const configuration = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .patch(`/menu/${id}`, item, configuration)
      .then((r) => {
        alert("item atualizado");
        navigate("/menu");
      })
      .catch((e) => console.error(e));
  };

  const HandleDelete = () => {
    const token = localStorage.token;

    const c = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .delete(`/menu/${id}`, c)
      .then(() => {
        alert("item deletado com sucesso");
        navigate("/menu");
      })
      .catch((e) => {
        console.error(e);
      });

      
  };

  return (
    <>
      <HeaderAdmin />
      {admin === "ADMIN" && (
        <>
          <ContainerAdm>
            <FormRegisterAdm onSubmit={HandleSubmit}>
              <h1>Editando produto</h1>
              <label htmlFor="title">Nome</label>
              <input
                required
                id="title"
                name="title"
                type="text"
                defaultValue={itemDB.title}
                placeholder="Digite aqui o nome do produto"
              />

              <label htmlFor="imgUrl">Imagel do Produto</label>
              <input
                defaultValue={itemDB.imgUrl}
                required
                id="imgUrl"
                name="imgUrl"
                type="url"
                placeholder="Digite aqui a url da imagem"
              />

              <label htmlFor="description">Descricação</label>
              <textarea
                defaultValue={itemDB.description}
                required
                type="text"
                name="description"
                id="description"
                placeholder="Digite aqui o nome do produto"
              />

              <label htmlFor="price">Preço</label>
              <input
                defaultValue={itemDB.price}
                required
                id="price"
                name="price"
                type="number"
                placeholder="Digite aqui o preço"
              />

              <label htmlFor="product">Tipo de Produto</label>
              <select
                defaultValue={itemDB.product}
                type="text"
                name="product"
                id="product"
                required
              >
                <option>Bebida</option>
                <option>Bebida Alcoólica</option>
                <option>Lanche</option>
                <option>Petiscos</option>
              </select>

              <div className="group-btn">
                <Link to="/menu">
                  <button type="button" className="btnRegister">
                    Voltar
                  </button>
                </Link>

                <button type="submit" className="btnRegister">
                  Salvar
                </button>
              </div>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn-del"
              >
                apagar item
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      Você realmente deseja apagar este item?
                    </div>
                    <div className="modal-footer">
                      <button type="button" data-bs-dismiss="modal">
                        Não
                      </button>
                      <button onClick={HandleDelete} type="button">
                        Sim
                      </button>
                    </div>
                  </div>
                </div>
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

export default EditItem;
