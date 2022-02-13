import { useState } from "react";
import HeaderPrincipal from "../../components/headerPrincipal";
import Container from "../Login/styles";
import { FormRegister } from "../register/style";

const Profile = () => {
    const [resposta, setResposta] = useState();

    const Yes = () => setResposta(true)
    const Not = () => setResposta(false)

  return (
    <>
      <HeaderPrincipal />
      <Container>
        <FormRegister>
            <h1>Você quer me ajudar?</h1>
          <div className="group-btn">
            <button type="button" onClick={Yes} className="btnRegister">sim</button>
            <button type="button" onClick={Not} className="btnRegister">não</button>
          </div>
        </FormRegister>
      </Container>
    </>
  );
};

export default Profile;
