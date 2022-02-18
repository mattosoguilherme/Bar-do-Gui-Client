import HeaderPrincipal from "../../../components/headerPrincipal";
import { FormRegister } from "../style";
import Container from "../../Login/styles";
import ContainerS from "../../../components/Groups/style";

import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../../components/card/item";

const RegisterTable = () => {
  const [item, setItem] = useState([]);
  const [logged, setLogged] = useState(false);
  const token = localStorage.token;

  if (!token) {
    setLogged(false);
  }
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    axios
      .get("/menu", config)
      .then((res) => {
        setItem(res.data);
        setLogged(true);
      })
      .catch((erro) => console.error(erro));
  }, [logged]);

  let listOrders = [];

  const handle = (e, i) => {
    if (e) {
      listOrders.push(i);
    } else {
      const noOrderIndex = listOrders.indexOf(i);
      listOrders.splice(noOrderIndex, 1);
    }
    console.log(listOrders);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const observation = event.target.observation.value;

    const table = {
      observation,
    };

    axios
      .post("/table", table, config)
      .then((r) => console.log(r))
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
              <textarea id="observation" placeholder="Digite aqui..." />

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
    </>
  );
};

export default RegisterTable;
