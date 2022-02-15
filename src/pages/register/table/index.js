import HeaderPrincipal from "../../../components/headerPrincipal";
import { FormRegister } from "../style";
import Container from "../../Login/styles";
import { Link } from "react-router-dom";
import GroupMenu from "../../../components/groupMenu";

const RegisterTable = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const observation = event.target.observation.value;

    const table = {
      observation,
    };

    console.log(table);
  };

  return (
    <>
      <HeaderPrincipal />
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
              <h3>Pedidos</h3>
              <div>
                <p>Onde vão ficar os pedidos</p>
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
                <GroupMenu />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Voltar
                </button>
                <button type="button" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RegisterTable;
