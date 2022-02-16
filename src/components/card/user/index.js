import { Link } from "react-router-dom";
import CardS from "../style";

const CardUser = (props) => {
  const user = props.data;

  return (
    <CardS>
      <p>
        <span>Nome:</span>
        {user.name}
      </p>
      <p>
        <span>Email:</span> {user.email}
      </p>
      <p>
        <span>Role:</span> {user.role}
      </p>
      <div className="btn">
        <Link to={`/Edit/user/${user.id}`}>
          <button type="button">Editar credenciais</button>
        </Link>
      </div>
    </CardS>
  );
};
export default CardUser;
