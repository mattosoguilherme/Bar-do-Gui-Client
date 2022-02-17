import { useState, useEffect } from "react";
import axios from "axios";
import HeaderPrincipal from "../../components/headerPrincipal";
import Container from "../Login/styles";
import { FormRegister } from "../register/style";
import { Alert } from "react-bootstrap";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState();
  const [userEdit, setUserEdit] = useState();
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
        setUser(res.data);
        setLogged(true);
      })
      .catch((erro) => console.error(erro));
  }, [logged]);

  const handle = (event) => {
    event.preventDefault();
    setEdit(true);
  };

  const HandleDelete = () => {
    axios
      .delete("/user", config)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => console.error(e));
  };

  const handleC = (event) => {
    event.preventDefault();
    setEdit(false);
  };
  return (
    <>
      <HeaderPrincipal />
      {logged && (
        <Container>
          {!edit && (
            <>
              <FormRegister>
                <input />
                <input />
                <div className="group-btn">
                  <button className="btnRegister">Voltar</button>
                  <button
                    type="button"
                    onClick={handle}
                    className="btnRegister"
                  >
                    Editar
                  </button>
                </div>

                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn-del"
                >
                  excluir Perfil
                </button>
              </FormRegister>

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
                      Você realmente deseja excluir seu perfil?
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        Não
                      </button>
                      <button onClick={HandleDelete} type="button">
                        Sim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {edit && (
            <>
              <FormRegister>
                <input />
                <input />
                <div className="group-btn">
                  <button className="btnRegister" onClick={handleC}>
                    Voltar
                  </button>
                  <button type="button" className="btnRegister">
                    Salvar
                  </button>
                </div>
              </FormRegister>
            </>
          )}
        </Container>
      )}
      {!logged && (
        <Alert variant="danger">
          <Alert.Heading>Você não está logado, faça login!</Alert.Heading>
        </Alert>
      )}
    </>
  );
};

export default Profile;
