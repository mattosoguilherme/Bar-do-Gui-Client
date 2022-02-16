import { Link } from "react-router-dom";
import styled from "styled-components";
const CardS = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 12rem;
  padding: 0.8rem;
  background-color: #262626;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: white;

  button {
    width: 5rem;
    border-radius: 0.5rem;
  }

  button:hover {
    background-color: transparent;
    color: white;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
const CardUser = (props) => {
  const user = props.data;

  return (
    <CardS>
      <p>Nome:{user.name}</p>
      <p>Email: {user.email} </p>
      <p>Autorização: {user.role}</p>

      <div>
        <Link to={`/Edit/user/${user.id}`}>
          <button type="button">Editar</button>
        </Link>

        <Link to={`/admin/${user.id}`}>
          <button type="button">Excluir</button>
        </Link>
      </div>
    </CardS>
  );
};
export default CardUser;
