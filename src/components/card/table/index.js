import { Table } from "react-bootstrap";
import { Container } from "../item/style";
import { CardTableS } from "../style";

const CardTable = (props) => {
  const table = props.data;

  return (
    <>
      <CardTableS>
        <Container>
          <h1>Mesa table.numberTable </h1>
          <div className="card-body">
            <p className="card-text">Detalhes: table.observation</p>
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
                <tr>
                  <th scope="row">1</th>
                  <td>caipirinha</td>
                  <td>400 ml</td>
                  <td>R$ 18,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="group-btn">
            <button type="button">Editar</button>
            <button type="button">Finalizar</button>
          </div>
        </Container>
      </CardTableS>
    </>
  );
};

export default CardTable;
