import axios from "axios";
import { useState, useEffect } from "react";
import EditableCard from "../../card/item/edit_item";
import ContainerS from "../style";

const GroupEditableMenu = () => {
  const [logged, setLogged] = useState(false);
  const [item, setItem] = useState([]);
  const token = localStorage.token;
  const config = { headers: { Authorization: `Bearer ${token}` } };
  if (!token) {
    setLogged(false);
  }

  useEffect(() => {
    axios
      .get("/menu", config)
      .then((r) => setItem(r.data))
      .catch((e) => console.error(e));
  }, [logged]);

  return (
    <>
      <ContainerS>
        {item.map((item) => (
          <EditableCard data={item} key={item.id} />
        ))}
      </ContainerS>
    </>
  );
};
export default GroupEditableMenu;
