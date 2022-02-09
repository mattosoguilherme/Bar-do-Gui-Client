import FormLogin from "./styles/formLogin";

const Home = () => {
  return (
    <main className="container-fluid">
      <FormLogin>
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

        <div>
          <a href="#">esqueci a senha?</a>
          <button>Entrar</button>
        </div>
      </FormLogin>
    </main>
  );
};
export default Home;
