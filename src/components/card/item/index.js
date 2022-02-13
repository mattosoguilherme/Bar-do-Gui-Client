import { Badge } from "react-bootstrap";
import CardItem, { Container } from "./style";



const Item = () => {
  return (
    <CardItem>
      <Container>
        <img
          alt="caipinha"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQ4gZyiHrMz8l37BIaFwUAktYfjJ_Tr_yjQ&usqp=CAU"
        />
        <h2>Mojito</h2>
        <div className="card-body">
          <p className="card-text">Mojito é um coquetel à base de rum branco originário de Cuba.</p>
        </div>
        <div className="badgePrice">
          <Badge>R$ 30,00</Badge>
        </div>
      </Container>
    </CardItem>
  );
};

export default Item;
