import { Link } from "react-router-dom";
import GroupMenu from "../../Groups/menu";
import GroupTable from "../../Groups/table";
import { Container, CardTableS } from "../style";

const CardTable = (props) => {
  const table = props.data;

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

            <Link to={`/home/${table.id}`}>
              <button type="button">Finalizar</button>
            </Link>
          </div>
        </Container>
      </CardTableS>
    </>
  );
};

export default CardTable;
