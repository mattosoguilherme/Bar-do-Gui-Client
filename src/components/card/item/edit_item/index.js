import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EditableCardIS, Container } from "../../style";

const EditableCard = (props) => {
  const item = props.data;

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
            <button type="button">excluir</button>
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
