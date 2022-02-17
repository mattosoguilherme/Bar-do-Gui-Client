import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { EditableCardIS, Container } from "../../style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditableCard = (props) => {
  const item = props.data;
  const navigate = useNavigate();
  const token = localStorage.token;
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const { id } = useParams();
  const HandleDelete = () => {
    axios
      .delete(`/menu/${id}`, config)
      .then((r) => console.log(r.status.message))
      .catch((e) => alert(e.response.data.message));

    navigate("/menu");
  };

  return (
    <>
      <EditableCardIS>
        <Container>
          <img alt="caipinha" src={item.imgUrl} />
          <h2 id="title">{item.title}</h2>
          <div className="card-body">
            <p className="card-text">Detalhes: {item.description}</p>
          </div>
          <div className="badgePrice">
            <Badge>R$ {item.price} </Badge>
          </div>

          <div className="group-btn">
            <Link to={`/menu/${item.id}`}>
              <button onClick={HandleDelete} type="button">
                excluir
              </button>
            </Link>

            <Link to={`/Edit/item/${item.id}`}>
              <button type="button">editar</button>
            </Link>
          </div>
        </Container>
      </EditableCardIS>
    </>
  );
};

export default EditableCard;
