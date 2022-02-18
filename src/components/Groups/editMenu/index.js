import axios from "axios";
import { useState, useEffect } from "react";
import EditableCard from "../../card/item/edit_item";
import ContainerS from "../style";

const GroupEditableMenu = () => {
  const [logged, setLogged] = useState(false);
  const [item, setItem] = useState([]);


  useEffect(() => {
    const token = localStorage.token;
    const configuration = { headers: { Authorization: `Bearer ${token}` } };
    if (!token) {
      setLogged(false);
    }
    axios
      .get("/menu", configuration)
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
