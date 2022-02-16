import { useState, useEffect } from "react";
import axios from "axios";
import HeaderPrincipal from "../../components/headerPrincipal";
import Container from "../Login/styles";
import { FormRegister } from "../register/style";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState();
  const [userEdit, setUserEdit] = useState()

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
        setUserEdit(res.data)
        setLogged(true);
      })
      .catch((erro) => console.error(erro));
  }, [logged]);

  const handle = (event) => {
    event.preventDefault();
    setEdit(true);
  };
  const handleC = (event) => {
    event.preventDefault();
    setEdit(false);
  };
  return (
    <>
      <HeaderPrincipal />
      <Container>
        {!edit && (
          <>
            <FormRegister>
             
              <input value={user.name} />
              <div className="group-btn">
                <button className="btnRegister">Voltar</button>
                <button type="button" onClick={handle} className="btnRegister">
                  Editar
                </button>
              </div>
            </FormRegister>
          </>
        )}
        {edit && (
          <>
            <FormRegister>
            <input placeholder={userEdit.email}  />
              <input placeholder={userEdit.name} />
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
    </>
  );
};

export default Profile;
