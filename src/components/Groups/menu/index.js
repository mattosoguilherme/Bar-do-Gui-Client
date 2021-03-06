import axios from "axios";
import { useEffect, useState } from "react";

import ContainerS from "../style";
import Item from "../../card/item";

export const ListOrders = [];

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

  const Handle = (e, i) => {
    if (e) {
      ListOrders.push(i);
    } else {
      const noOrderIndex = ListOrders.indexOf(i);
      ListOrders.splice(noOrderIndex, 1);
    }
    
  };

  return (
    <ContainerS>
      {item.map((item) => (
        <Item
          onChange={(e) => {
            Handle(e.target.checked, item);
          }}
          data={item}
          key={item.id}
        />
      ))}
    </ContainerS>
  );
};

export default GroupMenu;
