import { Badge } from "react-bootstrap";
import CardItem, { Container } from "./style";


const EditableCard = (props) => {
    const item = props.data;

  return (
    <>
      <CardItem>
        <Container>
          <img alt="caipinha" src={item.imgUrl} />
          <h2 id="title">{item.title}</h2>
          <div className="card-body">
            <p className="card-text">Detalhes: {item.description}</p>
          </div>
          <div className="badgePrice">
            <Badge>R$ {item.price}</Badge>
          </div>

        <div>
            <button>excluir</button>
            <button>editar</button>
        </div>

        </Container>
      </CardItem>
    </>
  );
};

export default EditableCard;
