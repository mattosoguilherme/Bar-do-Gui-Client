import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Alert } from "react-bootstrap";
import { ContainerAdm } from "../../../components/container/style";
import FormRegisterAdm from "../../register/style";
import HeaderAdmin from "../../../components/headerAdmin";

const EditItem = () => {
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState("");
  const token = localStorage.token;

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

  const handleSubmit = () => {};

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
                <Link to="/menu">
                  <button type="button" className="btnRegister">
                    Voltar
                  </button>
                </Link>

                <button type="submit" className="btnRegister">
                  Salvar
                </button>
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
