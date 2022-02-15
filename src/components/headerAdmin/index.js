import { Link } from "react-router-dom";
import HeaderS from "./style";

const HeaderAdmin = () => {
  return (
    <>
      <HeaderS className=" navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link id="nameBar" className="navbar-brand" to="/admin">
          operacional
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Register/item"
                >
                  criar item
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">
                  usuários
                </Link>
              </li>

              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  mais
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/home">
                      Voltar
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin">
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Sair
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </HeaderS>
    </>
  );
};

export default HeaderAdmin;
