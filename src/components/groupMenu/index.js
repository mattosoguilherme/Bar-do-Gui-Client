import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Item from "../card/item";

const ContainerS = styled.main`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-around;
`;

const GroupMenu = () => {
  const [item, setItem] = useState([]);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("/menu", config)
      .then((res) => {
        setItem(res.data);
        setLogged(true);
      })
      .catch((erro) => console.error(erro));
  }, [logged]);
  let listOrders = [];
  const handle = (e, i) => {
    console.log(e);

    if (e) {
      listOrders.push(i);
    }

    console.log(listOrders);
  };

  return (
    <ContainerS>
      {item.map((item) => (
        <Item
          onChange={(e) => handle(e.target.checked, item)}
          data={item}
          key={item.id}
        />
      ))}
    </ContainerS>
  );
};

export default GroupMenu;
