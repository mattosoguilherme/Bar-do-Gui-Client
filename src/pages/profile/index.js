import { useState, useEffect } from "react";
import axios from "axios";
import HeaderPrincipal from "../../components/headerPrincipal";
import Container from "../Login/styles";
import { FormRegister } from "../register/style";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const Navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState();

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
        setUser(res.data);
        setLogged(true);
      })
      .catch((erro) => console.error(erro.response));
  }, [logged]);

  const handle = (event) => {
    event.preventDefault();
    setEdit(true);
  };

  const handleC = (event) => {
    event.preventDefault();
    setEdit(false);
  };

  const HandleDelete = () => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .delete("/user", config)
      .then((r) => {
        console.log(r);
        alert(`${r.data.name} seu perfil foi deletado!`);
        Navigate("/");
      })
      .catch((e) => console.error(e));
  };

  const HandleSubmit = (event) => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const editedUser = {
      email,
      name,
    };
    if (!email) {
      const edited = { name };
      axios
        .patch("/user", edited, config)
        .then((r) => {
          alert("Nome alterado com sucesso");
          setEdit(false);
        })
        .catch((e) => console.error(e.response));
    } else {
      axios
        .patch("/user", editedUser, config)
        .then((r) => {
          alert("Você precisará fazer o login novamente");
          Navigate("/");
        })
        .catch((e) => {
          console.error(e.response);
        });
    }
  };

  return (
    <>
      <HeaderPrincipal />
      {logged && (
        <Container>
          {!edit && (
            <>
              <FormRegister>
                <input value={user.name} />
                <input value={user.email} />
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
            </>
          )}
          {edit && (
            <>
              <FormRegister onSubmit={HandleSubmit}>
                <h1>atualizar cadastro</h1>
                <input type="text" id="name" placeholder={user.name} />
                <input type="email" id="email" placeholder={user.email} />
                <div className="group-btn">
                  <button className="btnRegister" onClick={handleC}>
                    Voltar
                  </button>
                  <button type="submit" className="btnRegister">
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
