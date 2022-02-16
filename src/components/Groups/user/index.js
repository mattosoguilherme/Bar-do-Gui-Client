import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CardUser from "../../card/user";
import ContainerS from "../style";

const GroupUser = () => {
  const [logged, setLogged] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.token;
    if (!token) {
      setLogged(false);
    }

    const config = { headers: { Authorization: `Bearer ${token}` } };

    axios
      .get("/user", config)
      .then((res) => {
        setUsers(res.data);
        setLogged(true);
      })
      .catch((e) => console.error(e));
  }, [logged]);

  return (
    <ContainerS>
      {users.map(u=>(
          <CardUser data={u} key={u.id} />
      ))}
    </ContainerS>
  );
};

export default GroupUser;
