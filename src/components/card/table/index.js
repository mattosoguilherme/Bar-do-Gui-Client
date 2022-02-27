import { Link, useNavigate } from "react-router-dom";
import GroupMenu, { ListOrders } from "../../Groups/menu";
import axios from "axios";
import { Container, CardTableS } from "../style";

const CardTable = (props) => {
  const table = props.data;

  const navigate = useNavigate();

  const HandleSubmit = () => {
    const token = localStorage.token;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    for (let index = 0; index < ListOrders.length; index++) {
      const order = {
        menuId: ListOrders[index].id,
        tableId: table.id,
      };

      axios
        .post("/order", order, config)
        .then((res) => navigate("/home"))
        .catch((e) => console.log(e));
    }
  };

  const HandleDelete = () => {
    const token = localStorage.token;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .delete(`/table/${table.id}`, config)
      .then((r) => {
        console.log(r);
        alert(`${r.data.table} foi deletado!`);
        Navigate("/");
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <CardTableS>
        <Container>
          <div className="header">
            <h1>Mesa {table.numberTable} </h1>
            <div>
              <button
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                type="button"
              >
                Adicionar pedido
              </button>
            </div>
          </div>
          {table.user.map((u) => (
            <span>garçon {u.name}</span>
          ))}
          <div className="card-body">
            <p className="card-text">Detalhes: {table.observation}</p>
          </div>
          <div className=" table-responsive ">
            <table className=" overflow-auto table table-hover">
              <thead>
                <tr>
                  <th scope="col">pedido</th>
                  <th scope="col">nome</th>
                  <th scope="col">descrição</th>
                  <th scope="col">preço</th>
                </tr>
              </thead>
              <tbody>
                {table.product.map((p) => (
                  <tr>
                    <th scope="row">1</th>
                    <td>{p.Menu.title}</td>
                    <td>{p.Menu.description}</td>
                    <td>R$ {p.Menu.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="group-btn">
            <button type="button">Editar</button>

            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Finalizar
            </button>
          </div>
        </Container>

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
                <h5 className="modal-title" id="exampleModalLabel"></h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Você realmente deseja excluir essa mesa?
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
      </CardTableS>

      <div
        className="modal fade modal-dialog-scrollable"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <GroupMenu />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button
                type="button"
                onClick={HandleSubmit}
                className="btn btn-primary"
              >
                Salvar pedidos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTable;
