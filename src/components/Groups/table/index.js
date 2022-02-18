import CardTable from "../../card/table";
import ContainerS from "../style";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const GroupTable = () => {
  const [logged, setLogged] = useState(false);
  const [table, setTable] = useState([]);

  useEffect(() => {
    const token = localStorage.token;
    if (!token) {
      setLogged(false);
    }
    const configuration = { headers: { Authorization: `Bearer ${token}` } };

    axios
      .get("/table", configuration)
      .then((r) => {
        setTable(r.data);
        
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
