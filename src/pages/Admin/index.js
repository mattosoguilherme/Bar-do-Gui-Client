import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import GroupUser from "../../components/Groups/user";
import HeaderAdmin from "../../components/headerAdmin";

const Admin = () => {
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState("");

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("/auth", config)
      .then((res) => {
        setAdmin(res.data.role);
        setLogged(true);
      })
      .catch((erro) => console.error(erro));
  }, [logged]);

  return (
    <>
      {admin === "ADMIN" && (
        <>
          <HeaderAdmin />
          <GroupUser />
        </>
      )}
      {admin === "USER" && (
        <Alert variant="danger">
          <Alert.Heading>Você não tem autoriração!</Alert.Heading>
        </Alert>
      )}
      {!logged && (
        <>
          <Alert variant="danger">
            <Alert.Heading>Você não está logado, faça login!</Alert.Heading>
          </Alert>
        </>
      )}
    </>
  );
};

export default Admin;
