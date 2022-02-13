import { Link } from "react-router-dom";
import Navbar from "./style";

const Header = () => {
  return (

      <Navbar>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Bar do Gui
          </Link>

          <Link id="register"className="navbar-brand" to="/RegisterUser">
            Cadastra-se
          </Link>
        </div>
      </Navbar>

  );
};

export default Header;
