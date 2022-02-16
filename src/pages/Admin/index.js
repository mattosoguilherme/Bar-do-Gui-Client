import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
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
        console.log(res.data);
        setLogged(true);
      })
      .catch((erro) => console.error(erro));
  }, [logged]);

  return (
    <>
      <HeaderAdmin />
      {admin === "ADMIN" && <div>ta funcinando</div>}
      {admin === "USER" && (
        <h2>Seu usuário não tem acesso ao essa parte do sistema</h2>
      )}
      {!admin &&(
        <>
        <h1>VOCÊ NÃO ESTA LOGADO</h1>
        </>
      )}
    </>
  );
};

export default Admin;
