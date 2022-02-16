import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ContainerAdm } from "../../../components/container/style";
import HeaderAdmin from "../../../components/headerAdmin";
import { FormRegisterAdm } from "../style";
import { Alert } from "bootstrap";

const RegisterItem = () => {
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState("");
  console.log(admin);

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("/auth", config)
      .then((res) => {
        setAdmin(res.data.role);
        console.log(res.data);
        setLogged(true);
      })
      .catch((erro) => console.error(erro));
  }, [logged]);

  


  return (
    <>
      <HeaderAdmin />

      {admin === "ADMIN" && (
        <>
          <ContainerAdm>
            <FormRegisterAdm>
              <h1>Cadastro de produto</h1>
              <label htmlFor="title">Nome</label>
              <input
                required
                id="title"
                placeholder="Digite aqui o nome do produto"
              />

              <label htmlFor="imgUrl">Imagel do Produto</label>
              <input
                required
                id="imgUrl"
                placeholder="Digite aqui a url da imagem"
              />

              <label htmlFor="descrption">Descricação</label>
              <textarea
                required
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
              <select id="product" required>
                <option></option>
                <option>Bebida</option>
                <option>Bebida Alcoólica</option>
                <option>Lanche</option>
                <option>Petiscos</option>
              </select>

              <div className="group-btn">
                <Link to="/admin">
                  <button className="btnRegister">Voltar</button>
                </Link>

                <button className="btnRegister">Cadastrar</button>
              </div>
            </FormRegisterAdm>
          </ContainerAdm>
        </>
      )}
      {admin === "USER" && (
        <Alert>Seu usuário não tem acesso ao essa parte do sistema</Alert>
      )}
      {!logged && <Alert>Você não está logado</Alert>}
    </>
  );
};

export default RegisterItem;
