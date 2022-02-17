import { Badge } from "react-bootstrap";
import CardItem, { Container } from "./style";


const Item = (props) => {
  const item = props.data;


  return (
    <CardItem>
      <Container>
        <input
          id="checkbox"
          type="checkbox"
          onChange={props.onChange}
        ></input>
        <img alt="caipinha" src={item.imgUrl} />
        <h2 id="title">{item.title}</h2>
        <div className="card-body">
          <p className="card-text">Detalhes: {item.description}</p>
        </div>
        <div className="badgePrice">
          <Badge>R$ {item.price}</Badge>
        </div>
      </Container>
    </CardItem>
  );
};

export default Item;
