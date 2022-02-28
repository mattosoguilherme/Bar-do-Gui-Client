import HeaderPrincipal from "../../../components/headerPrincipal";
import { FormRegister } from "../style";
import Container from "../../Login/styles";

import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegisterTable = () => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState(false);

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
      .then(() => {
        setLogged(true);
      })
      .catch((erro) => console.error(erro));
  }, [logged]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const observation = event.target.observation.value;

    const table = {
      observation,
    };
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .post("/table", table, config)
      .then((r) => {
        navigate("/home");
        alert(`Mesa ${r.data.numberTable} criado com sucesso`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <HeaderPrincipal />
      {logged && (
        <>
          <Container>
            <FormRegister onSubmit={handleSubmit}>
              <h1>Cadastro Mesa</h1>
              <label>Observação</label>
              <textarea id="observation" placeholder="Digite aqui..." required />

              <div className="group-btn">
                <Link to="/home">
                  <button className="btnRegister">Voltar</button>
                </Link>

                <button type="submit" className="btnRegister">
                  Criar
                </button>
              </div>
            </FormRegister>
          </Container>
        </>
      )}
      {!logged && (
        <Alert variant="danger">
          <Alert.Heading>Você não está logado, faça login!</Alert.Heading>
        </Alert>
      )}
    </>
  );
};

export default RegisterTable;
