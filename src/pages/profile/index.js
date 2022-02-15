import { useState } from "react";
import HeaderPrincipal from "../../components/headerPrincipal";
import Container from "../Login/styles";
import { FormRegister } from "../register/style";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const handle = (event) => {
      event.preventDefault();
      setEdit(true)
  }
  const handleC =(event) => {
    event.preventDefault();
    setEdit(false)

  }
  return (
    <>
      <HeaderPrincipal />
      <Container>
        {!edit && (
          <>
            <FormRegister>
              <input />
              <input />
              <div className="group-btn">
                <button className="btnRegister">Voltar</button>
                <button type="button" onClick={handle} className="btnRegister">Editar</button>
              </div>
            </FormRegister>
          </>
        )}
        {edit &&(
          <>
            <FormRegister>
            <input />
              <input />
              <div className="group-btn">
                <button className="btnRegister" onClick={handleC} >Voltar</button>
                <button type="button"className="btnRegister">Salvar</button>
              </div>
            </FormRegister>
          </>
        )}
      </Container>
    </>
  );
};

export default Profile;
