import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Container, { DivPass } from "../../Login/styles";

const FormRegister = styled.form`
  background-color: #260707;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6rem;
  width: 30rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 10px 3px;
  @media (max-width: 900px) {
    width: 20rem;
  } 
  h1 {
    align-self: center;
    color: white;
  }

  input {
    height: 3rem;
    font-size: 1rem;
    padding-left: 0.3rem;
    border-radius: 0.3rem;
  }

  label {
    color: white;
    font-size: 1.5rem;
  }

  #group-btn {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .btnRegister {
    width: 5rem;
    border-radius: 0.2rem;
    padding: 0.3rem;
    &:hover {
      background-color: transparent;
      color: #a6122d;
    }
  }
`;

const RegisterUser = () => {
  const [visible, setVisible] = useState(true);

  const visibilityPass = () => {
    const pass = document.getElementById("password");
    const eye = document.getElementById("eye");

    if (visible) {
      pass.type = "text";
      eye.src =
        "https://cdn-icons.flaticon.com/png/512/2767/premium/2767194.png?token=exp=1644510349~hmac=692a311eedc822dff4e8029f2263b812";
      setVisible(false);
    } else {
      pass.type = "password";
      eye.src = "https://cdn-icons-png.flaticon.com/512/633/633655.png";
      setVisible(true);
    }
  };

  return (
    <>
      <Container>
        <FormRegister>
          <h1>Novo Usuário</h1>

          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite aqui seu nome"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Digite aqui seu email "
            required
          />

          <label htmlFor="password">Senha</label>
          <DivPass>
            <button onClick={visibilityPass} type="button">
              <img
                id="eye"
                src="https://cdn-icons-png.flaticon.com/512/633/633655.png"
                alt="VisiblePassword"
                width="30"
                height="24"
              />
            </button>
            <input
              id="password"
              type="password"
              placeholder="Digite aqui sua senha "
              required
            />
          </DivPass>

          <label htmlFor="passwordConfirmation">Senha de Confirmação</label>
          <input
            id="passwordConfirmation"
            type="password"
            placeholder="Digite aqui a senha de confirmação"
            required
          />

          <div id="group-btn">
            <Link to="/">
              <button type="button" className="btnRegister">
                Voltar
              </button>
            </Link>

            <button type="submit" className="btnRegister">
              Salvar
            </button>
          </div>
        </FormRegister>
      </Container>
    </>
  );
};
export default RegisterUser;
