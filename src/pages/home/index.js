import Container from "./styles";
import FormLogin from "./styles/formLogin";

const Home = () => {
  let passwordInput = document.getElementById("password");
  let eyeImg = document.getElementById("eye");

  return (
    <Container>
      <FormLogin>
        <h1>Login</h1>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="digite seu email aqui"
        ></input>

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          placeholder="digite sua senha aqui"
        ></input>
        <img
          width="5px"
          src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
        />

        <div>
          <a href="#">esqueci a senha?</a>
          <button>Entrar</button>
        </div>
      </FormLogin>
    </Container>
  );
};
export default Home;
