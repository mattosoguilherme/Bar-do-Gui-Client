// import { Link } from "react-router-dom";
import { useState } from "react";
import Container, { FormLogin, ButtonLogin, DivPass } from "./styles";

const Login = () => {
  const [visible, setVisible] = useState(true);

  const visibilityPass = () => {
    const pass = document.getElementById("password");
    const eye = document.getElementById("eye")

    if (visible) {
      pass.type = "text";
      eye.src="https://cdn-icons.flaticon.com/png/512/2767/premium/2767194.png?token=exp=1644510349~hmac=692a311eedc822dff4e8029f2263b812"
      setVisible(false);
    } else {
      pass.type = "password";
      eye.src = "https://cdn-icons-png.flaticon.com/512/633/633655.png"
      setVisible(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const loginUser = {
      email,
      password,
    };

    console.log(loginUser);
  };

  return (
    <Container>
      <FormLogin method="POST" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="digite seu email aqui"
          required
        ></input>

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
            type="password"
            id="password"
            placeholder="digite sua senha aqui"
            required
          ></input>
        </DivPass>

        <div>
          <a href="/Recover">esqueci a senha?</a>
          <ButtonLogin type="submit">Entrar</ButtonLogin>
        </div>
      </FormLogin>
    </Container>
  );
};

export default Login;
