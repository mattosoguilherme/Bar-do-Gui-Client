import { useState } from "react";
import { Badge } from "react-bootstrap";
import CardItem, { Container } from "./style";

const Item = (props) => {
  const item = props.data;

  const [check, setCheck] = useState();
  const [order,setOrder] = useState()

  let orderList = []
  orderList.push(order)

  // console.log(orderList)

  if (check) {
    setOrder(item)
    setCheck(false);
  }

  return (
    <CardItem>
      <Container>
        <input
          type="checkbox"
          onChange={(event) => setCheck(event.target.checked)}
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
