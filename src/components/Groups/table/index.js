import CardTable from "../../card/table";
import ContainerS from "../style";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const GroupTable = () => {
  const [logged, setLogged] = useState(false);
  const [table, setTable] = useState([]);
  const token = localStorage.token;
  const config = { headers: { Authorization: `Bearer ${token}` } };
  if (!token) {
    setLogged(false);
  }

  useEffect(() => {
    axios
      .get("/table", config)
      .then((r) => {
        setTable(r.data);
        console.log(r);
      })
      .catch((e) => console.error(e));
  }, [logged]);

  return (
    <>
      <ContainerS>
        {table.map((t) => (
          <CardTable data={t} key={t.id} />
        ))}
      </ContainerS>
    </>
  );
};

export default GroupTable;
