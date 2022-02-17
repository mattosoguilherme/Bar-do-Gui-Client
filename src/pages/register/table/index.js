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

              <div className="orders">
                <button
                  id="btnOrder"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Adicionar Pedidos
                </button>
                <div>
                  <h3>{listOrders.length}</h3>
                  <div>
                    <ContainerS>
                      {listOrders.map((x) => {
                        <p>x.price</p>;
                      })}
                    </ContainerS>
                  </div>
                </div>
              </div>

              <div className="group-btn">
                <Link to="/home">
                  <button className="btnRegister">Voltar</button>
                </Link>

                <button type="submit" className="btnRegister">
                  Criar
                </button>
              </div>
            </FormRegister>

            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog  modal-dialog-scrollable ">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Menu
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <ContainerS>
                      {item.map((item) => (
                        <Item
                          onChange={(e) => handle(e.target.checked, item)}
                          data={item}
                          key={item.id}
                        />
                      ))}
                    </ContainerS>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Voltar
                    </button>
                    <button type="button" className="btn btn-success ">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default RegisterTable;
