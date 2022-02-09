import Navbar from "./style";

const Header = () => {
  return (
    <>
      <Navbar>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Bar do Gui
          </a>

          <a className="navbar-brand" href="#">Cadastra-se</a>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
