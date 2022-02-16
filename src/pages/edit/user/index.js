import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderAdmin from "../../../components/headerAdmin";
import FormRegisterAdm from "../../register/style";
import axios from "axios";
import { ContainerAdm } from "../../../components/container/style";
import { Link } from "react-router-dom";
import { DivPass } from "../../Login/styles";
import { Alert } from "react-bootstrap";

const EditUser = () => {
  const [user, setUser] = useState();
  const [visible, setVisible] = useState(true);
  const [logged, setLogged] = useState(false);
  const [role, setRole] = useState("USER");
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
    }

    const config = { headers: { Authorization: `Bearer ${token}` } };

    axios
      .get(`/user/${id}`, config)
      .then((res) => {
        setLogged(true);
        setUser(res.data);
      })
      .catch((e) => console.error(e));
  }, [logged]);

  const visibilityPass = () => {
    const pass = document.getElementById("newPass");
    const eye = document.getElementById("eye");

    if (visible) {
      pass.type = "text";
      eye.src =
        "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NS45NTEwMSwzMi4yNWMtNDAuNTYxOTgsMCAtNzYuMzAxNTUsMjguMTE0NTQgLTg1Ljc4MzA0LDY0Ljk1NDkxYy0wLjczODI3LDIuODc1NzYgMC45OTQ1Miw1LjgwNTUyIDMuODcwMjgsNi41NDM3OGMyLjg3NTc2LDAuNzM4MjcgNS44MDU1MiwtMC45OTQ1MiA2LjU0Mzc4LC0zLjg3MDI4YzguMTcwMDEsLTMxLjc0NDYyIDM5LjgyMDk2LC01Ni44Nzg0MiA3NS4zNjg5OCwtNTYuODc4NDJjMzUuNTQ4MDIsMCA2Ny4yOTkyMiwyNS4xNDI2NCA3NS40NjY5Niw1Ni44Nzg0MmMwLjczODI3LDIuODc1NzYgMy42NjgwMiw0LjYwODU1IDYuNTQzNzgsMy44NzAyOGMyLjg3NTc2LC0wLjczODI3IDQuNjA4NTUsLTMuNjY4MDIgMy44NzAyOCwtNi41NDM3OGMtOS40ODM3NiwtMzYuODQ5MjIgLTQ1LjMxOTA0LC02NC45NTQ5MSAtODUuODgxMDIsLTY0Ljk1NDkxek04Ni4wMDcsNjAuOTE2NjdjLTE5LjA2MzU4LDAgLTM0LjYyOTU2LDE1LjU2NiAtMzQuNjI5NTYsMzQuNjI5NTZjMCwxOS4wNjM1NyAxNS41NjU5OCwzNC42MzY1NiAzNC42Mjk1NiwzNC42MzY1NmMxOS4wNjM1OCwwIDM0LjYzNjU2LC0xNS41NzI5OSAzNC42MzY1NiwtMzQuNjM2NTZjMCwtMTkuMDYzNTYgLTE1LjU3Mjk4LC0zNC42Mjk1NiAtMzQuNjM2NTYsLTM0LjYyOTU2ek04Ni4wMDcsNzEuNjY2NjdjMTMuMjUzODUsMCAyMy44ODY1NiwxMC42MjU3MiAyMy44ODY1NiwyMy44Nzk1NmMwLDEzLjI1Mzg1IC0xMC42MzI3MSwyMy44ODY1NiAtMjMuODg2NTYsMjMuODg2NTZjLTEzLjI1Mzg1LDAgLTIzLjg3OTU2LC0xMC42MzI3MSAtMjMuODc5NTYsLTIzLjg4NjU2YzAsLTEzLjI1Mzg0IDEwLjYyNTcxLC0yMy44Nzk1NiAyMy44Nzk1NiwtMjMuODc5NTZ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=";
      setVisible(false);
    } else {
      pass.type = "password";
      eye.src =
        "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NC45OTIxOSwyMS41Yy0xOC40ODU5MywwIC0zNS42ODEyNCw2LjE0MDI0IC00OS43MDQ3NSwxNi41MzA5MmMtMi4wNTgzNCwxLjUyNTA2IC0zLjE0NjU4LDQuMDMyNDcgLTIuODU0NzEsNi41Nzc1NGMwLjI5MTg3LDIuNTQ1MDcgMS45MTk1LDQuNzQxMDMgNC4yNjk2NCw1Ljc2MDUyYzIuMzUwMTUsMS4wMTk0OSA1LjA2NTY4LDAuNzA3NTggNy4xMjM0OCwtMC44MTgyYzExLjcwNDgyLC04LjY3MjY1IDI1LjgzOTk0LC0xMy43MTc0NSA0MS4xNjYzNCwtMTMuNzE3NDVjMTUuMzI2NCwwIDI5LjQ2OTE0LDUuMDM4MTMgNDEuMTY2MzQsMTMuNzAzNDVjMi4wNTc4MSwxLjUyNTU1IDQuNzczMiwxLjgzNzI5IDcuMTIzMiwwLjgxNzhjMi4zNSwtMS4wMTk1IDMuOTc3NTMsLTMuMjE1MzMgNC4yNjk0NSwtNS43NjAyNmMwLjI5MTkyLC0yLjU0NDkzIC0wLjc5NjEzLC01LjA1MjI2IC0yLjg1NDI0LC02LjU3NzM5Yy0xNC4wMTY4LC0xMC4zODM2OCAtMzEuMjE4ODIsLTE2LjUxNjkzIC00OS43MDQ3NSwtMTYuNTE2OTN6TTE1Ny41NDA2OSw2OS4wNDkxNWMtMi42MjA0MiwwLjA2MTM2IC00Ljk5ODM2LDEuNTQ4MjQgLTYuMjAwODQsMy44NzcyOGMtNC4wNzI2Miw3LjYxNjg4IC05LjIyMDUyLDE0LjMwNjU5IC0xNS4wNDcyLDIwLjExNDI2Yy0wLjU0NDg4LDAuNDAwODUgLTEuMDMwMjgsMC44NzY4MiAtMS40NDE3MywxLjQxMzc0Yy02LjYyNTMyLDYuMjc4NTYgLTE0LjE2MDM0LDExLjI1NTU3IC0yMi4zODE4NCwxNC42OTcyNmMtMC43MzQyNCwwLjE2NDExIC0xLjQzODA2LDAuNDQyODEgLTIuMDg1NjEsMC44MjU4NGMtNy40MjI2NSwyLjgzMDk4IC0xNS4yODY3Myw0LjU1ODYgLTIzLjUxNTYyLDQuNjYxMTRjLTAuMzI0NjIsLTAuMDQ1NzEgLTAuNjUyLC0wLjA2OTA5IC0wLjk3OTgyLC0wLjA2OTk5Yy0wLjI3NjEzLDAuMDAyNzQgLTAuNTUxODcsMC4wMjE0NCAtMC44MjU4NCwwLjA1NTk5Yy0yNy4xMTcyNCwtMC4zNzYwNyAtNTAuOTQxMzgsLTE2LjY3NDUzIC02NC4zMDQwNCwtNDEuNTQ0MjdjLTEuODc0NjYsLTMuNDg2NDggLTYuMjIwNzEsLTQuNzkzMTIgLTkuNzA3MTksLTIuOTE4NDZjLTMuNDg2NDgsMS44NzQ2NiAtNC43OTMxMiw2LjIyMDcxIC0yLjkxODQ2LDkuNzA3MTljMy41NTI1NCw2LjYxMTc3IDcuNzk5NjQsMTIuNzIzMDkgMTIuNjExNjUsMTguMjUyNmwtMTQuNDQ1MzEsMTQuNDQ1MzFjLTEuODcyMTQsMS43OTc1NCAtMi42MjYyNiw0LjQ2NjczIC0xLjk3MTUzLDYuOTc4MThjMC42NTQ3MywyLjUxMTQ1IDIuNjE2MDIsNC40NzI3MyA1LjEyNzQ3LDUuMTI3NDdjMi41MTE0NSwwLjY1NDc0IDUuMTgwNjQsLTAuMDk5MzggNi45NzgxOCwtMS45NzE1M2wxNC41MTUzLC0xNC41MTUzYzUuMDA3MDUsNC4yNTE5OCAxMC40MDczOSw3Ljk4MTcgMTYuMTY2OTksMTEuMDI5OTVsLTkuODQwMTcsMTkuMzAyNDFjLTEuMjQ5MTksMi4yODk3OCAtMS4xNTU4Myw1LjA3NzQyIDAuMjQzNzgsNy4yNzg0OWMxLjM5OTYxLDIuMjAxMDYgMy44ODQ0NiwzLjQ2ODAxIDYuNDg3OTEsMy4zMDc5OGMyLjYwMzQ1LC0wLjE2MDAzIDQuOTE0NDMsLTEuNzIxNzcgNi4wMzM5MywtNC4wNzc2OGwxMC4yODgwOSwtMjAuMTg0MjRjNS45MzU4LDEuOTQ5NDMgMTIuMTIyMzUsMy4yNjMxNyAxOC41MDQ1NiwzLjgyMTI5djIxLjgzNTk0Yy0wLjAzNjU1LDIuNTg0NTYgMS4zMjEzNiw0Ljk4ODU4IDMuNTUzNzYsNi4yOTE1M2MyLjIzMjQsMS4zMDI5NSA0Ljk5MzQyLDEuMzAyOTUgNy4yMjU4MiwwYzIuMjMyNCwtMS4zMDI5NSAzLjU5MDMxLC0zLjcwNjk3IDMuNTUzNzYsLTYuMjkxNTN2LTIxLjg0OTkzYzYuMDAyNjksLTAuNTIyNzQgMTEuODI4NTMsLTEuNzE2MjMgMTcuNDQwNzYsLTMuNDcxMzVsMTAuMTA2MTIsMTkuODQ4MzFjMS43OTczNSwzLjUyOSA2LjExNTIxLDQuOTMyNzcgOS42NDQyLDMuMTM1NDJjMy41MjksLTEuNzk3MzUgNC45MzI3NywtNi4xMTUyMSAzLjEzNTQyLC05LjY0NDJsLTkuNTc0MjIsLTE4Ljc5ODVjNS44NjU2MywtMy4wMDI0OSAxMS4zMTgyNSwtNi43NTE4MiAxNi40MTg5NCwtMTEuMDAxOTVsMTMuOTgzNCwxMy45ODM0YzEuNzk3NTQsMS44NzIxMiA0LjQ2NjcyLDIuNjI2MjIgNi45NzgxNiwxLjk3MTQ4YzIuNTExNDQsLTAuNjU0NzQgNC40NzI3MSwtMi42MTYwMSA1LjEyNzQ1LC01LjEyNzQ1YzAuNjU0NzQsLTIuNTExNDQgLTAuMDk5MzYsLTUuMTgwNjEgLTEuOTcxNDgsLTYuOTc4MTZsLTEzLjc1OTQ0LC0xMy43NzM0NGM1LjA5NTY4LC01Ljc1NjQ3IDkuNTgyNDEsLTEyLjE1ODE4IDEzLjI5NzUyLC0xOS4xMDY0NGMxLjI0NTYxLC0yLjI0ODcgMS4xOTE1NywtNC45OTIyNiAtMC4xNDE2MywtNy4xOTAxN2MtMS4zMzMyLC0yLjE5NzkgLTMuNzQxMzYsLTMuNTEzNTEgLTYuMzExMTcsLTMuNDQ3ODZ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=";
      setVisible(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const password = event.target.passwordAtual.value;
    const password_sistem = event.target.passSistem.value;
    const newPassword = event.target.newPass.value;
    const newPasswordConfirmation = event.target.newPassConfirm.value;

    const newCredential = {
      password,
      password_sistem,
      role,
      newPassword,
      newPasswordConfirmation,
    };
  };

  return (
    <>
      <HeaderAdmin />
      {logged && (
        <>
          <ContainerAdm>
            <FormRegisterAdm onSubmit={handleSubmit}>
              <label>senha atual usuário</label>
              <input
                type="password"
                id="passwordAtual"
                placeholder="digite a senha aqui"
              />

              <label>nova senha</label>
              <DivPass>
                <button onClick={visibilityPass} type="button">
                  <img
                    id="eye"
                    src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NC45OTIxOSwyMS41Yy0xOC40ODU5MywwIC0zNS42ODEyNCw2LjE0MDI0IC00OS43MDQ3NSwxNi41MzA5MmMtMi4wNTgzNCwxLjUyNTA2IC0zLjE0NjU4LDQuMDMyNDcgLTIuODU0NzEsNi41Nzc1NGMwLjI5MTg3LDIuNTQ1MDcgMS45MTk1LDQuNzQxMDMgNC4yNjk2NCw1Ljc2MDUyYzIuMzUwMTUsMS4wMTk0OSA1LjA2NTY4LDAuNzA3NTggNy4xMjM0OCwtMC44MTgyYzExLjcwNDgyLC04LjY3MjY1IDI1LjgzOTk0LC0xMy43MTc0NSA0MS4xNjYzNCwtMTMuNzE3NDVjMTUuMzI2NCwwIDI5LjQ2OTE0LDUuMDM4MTMgNDEuMTY2MzQsMTMuNzAzNDVjMi4wNTc4MSwxLjUyNTU1IDQuNzczMiwxLjgzNzI5IDcuMTIzMiwwLjgxNzhjMi4zNSwtMS4wMTk1IDMuOTc3NTMsLTMuMjE1MzMgNC4yNjk0NSwtNS43NjAyNmMwLjI5MTkyLC0yLjU0NDkzIC0wLjc5NjEzLC01LjA1MjI2IC0yLjg1NDI0LC02LjU3NzM5Yy0xNC4wMTY4LC0xMC4zODM2OCAtMzEuMjE4ODIsLTE2LjUxNjkzIC00OS43MDQ3NSwtMTYuNTE2OTN6TTE1Ny41NDA2OSw2OS4wNDkxNWMtMi42MjA0MiwwLjA2MTM2IC00Ljk5ODM2LDEuNTQ4MjQgLTYuMjAwODQsMy44NzcyOGMtNC4wNzI2Miw3LjYxNjg4IC05LjIyMDUyLDE0LjMwNjU5IC0xNS4wNDcyLDIwLjExNDI2Yy0wLjU0NDg4LDAuNDAwODUgLTEuMDMwMjgsMC44NzY4MiAtMS40NDE3MywxLjQxMzc0Yy02LjYyNTMyLDYuMjc4NTYgLTE0LjE2MDM0LDExLjI1NTU3IC0yMi4zODE4NCwxNC42OTcyNmMtMC43MzQyNCwwLjE2NDExIC0xLjQzODA2LDAuNDQyODEgLTIuMDg1NjEsMC44MjU4NGMtNy40MjI2NSwyLjgzMDk4IC0xNS4yODY3Myw0LjU1ODYgLTIzLjUxNTYyLDQuNjYxMTRjLTAuMzI0NjIsLTAuMDQ1NzEgLTAuNjUyLC0wLjA2OTA5IC0wLjk3OTgyLC0wLjA2OTk5Yy0wLjI3NjEzLDAuMDAyNzQgLTAuNTUxODcsMC4wMjE0NCAtMC44MjU4NCwwLjA1NTk5Yy0yNy4xMTcyNCwtMC4zNzYwNyAtNTAuOTQxMzgsLTE2LjY3NDUzIC02NC4zMDQwNCwtNDEuNTQ0MjdjLTEuODc0NjYsLTMuNDg2NDggLTYuMjIwNzEsLTQuNzkzMTIgLTkuNzA3MTksLTIuOTE4NDZjLTMuNDg2NDgsMS44NzQ2NiAtNC43OTMxMiw2LjIyMDcxIC0yLjkxODQ2LDkuNzA3MTljMy41NTI1NCw2LjYxMTc3IDcuNzk5NjQsMTIuNzIzMDkgMTIuNjExNjUsMTguMjUyNmwtMTQuNDQ1MzEsMTQuNDQ1MzFjLTEuODcyMTQsMS43OTc1NCAtMi42MjYyNiw0LjQ2NjczIC0xLjk3MTUzLDYuOTc4MThjMC42NTQ3MywyLjUxMTQ1IDIuNjE2MDIsNC40NzI3MyA1LjEyNzQ3LDUuMTI3NDdjMi41MTE0NSwwLjY1NDc0IDUuMTgwNjQsLTAuMDk5MzggNi45NzgxOCwtMS45NzE1M2wxNC41MTUzLC0xNC41MTUzYzUuMDA3MDUsNC4yNTE5OCAxMC40MDczOSw3Ljk4MTcgMTYuMTY2OTksMTEuMDI5OTVsLTkuODQwMTcsMTkuMzAyNDFjLTEuMjQ5MTksMi4yODk3OCAtMS4xNTU4Myw1LjA3NzQyIDAuMjQzNzgsNy4yNzg0OWMxLjM5OTYxLDIuMjAxMDYgMy44ODQ0NiwzLjQ2ODAxIDYuNDg3OTEsMy4zMDc5OGMyLjYwMzQ1LC0wLjE2MDAzIDQuOTE0NDMsLTEuNzIxNzcgNi4wMzM5MywtNC4wNzc2OGwxMC4yODgwOSwtMjAuMTg0MjRjNS45MzU4LDEuOTQ5NDMgMTIuMTIyMzUsMy4yNjMxNyAxOC41MDQ1NiwzLjgyMTI5djIxLjgzNTk0Yy0wLjAzNjU1LDIuNTg0NTYgMS4zMjEzNiw0Ljk4ODU4IDMuNTUzNzYsNi4yOTE1M2MyLjIzMjQsMS4zMDI5NSA0Ljk5MzQyLDEuMzAyOTUgNy4yMjU4MiwwYzIuMjMyNCwtMS4zMDI5NSAzLjU5MDMxLC0zLjcwNjk3IDMuNTUzNzYsLTYuMjkxNTN2LTIxLjg0OTkzYzYuMDAyNjksLTAuNTIyNzQgMTEuODI4NTMsLTEuNzE2MjMgMTcuNDQwNzYsLTMuNDcxMzVsMTAuMTA2MTIsMTkuODQ4MzFjMS43OTczNSwzLjUyOSA2LjExNTIxLDQuOTMyNzcgOS42NDQyLDMuMTM1NDJjMy41MjksLTEuNzk3MzUgNC45MzI3NywtNi4xMTUyMSAzLjEzNTQyLC05LjY0NDJsLTkuNTc0MjIsLTE4Ljc5ODVjNS44NjU2MywtMy4wMDI0OSAxMS4zMTgyNSwtNi43NTE4MiAxNi40MTg5NCwtMTEuMDAxOTVsMTMuOTgzNCwxMy45ODM0YzEuNzk3NTQsMS44NzIxMiA0LjQ2NjcyLDIuNjI2MjIgNi45NzgxNiwxLjk3MTQ4YzIuNTExNDQsLTAuNjU0NzQgNC40NzI3MSwtMi42MTYwMSA1LjEyNzQ1LC01LjEyNzQ1YzAuNjU0NzQsLTIuNTExNDQgLTAuMDk5MzYsLTUuMTgwNjEgLTEuOTcxNDgsLTYuOTc4MTZsLTEzLjc1OTQ0LC0xMy43NzM0NGM1LjA5NTY4LC01Ljc1NjQ3IDkuNTgyNDEsLTEyLjE1ODE4IDEzLjI5NzUyLC0xOS4xMDY0NGMxLjI0NTYxLC0yLjI0ODcgMS4xOTE1NywtNC45OTIyNiAtMC4xNDE2MywtNy4xOTAxN2MtMS4zMzMyLC0yLjE5NzkgLTMuNzQxMzYsLTMuNTEzNTEgLTYuMzExMTcsLTMuNDQ3ODZ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                    alt="VisiblePassword"
                    width="30"
                    height="24"
                  />
                </button>
                <input
                  id="newPass"
                  type="password"
                  placeholder="Digite aqui sua senha "
                  required
                />
              </DivPass>

              <label>senha de confirmação</label>
              <input
                id="newPassConfirm"
                placeholder="digite a confirmação de senha aqui"
              />

              <label>Role</label>
              <select onChange={(e) => setRole(e.target.value)}>
                <option>USER</option>
                <option>ADMIN</option>
              </select>

              {role === "ADMIN" && (
                <>
                  <label>senha do sistema</label>
                  <input
                    id="passSistem"
                    type="password"
                    placeholder="digite a senha"
                  />
                </>
              )}

              <div className="group-btn">
                <Link to="/admin">
                  <button className="btnRegister">Voltar</button>
                </Link>

                <button type="submit" className="btnRegister">
                  Salvar
                </button>
              </div>
            </FormRegisterAdm>
          </ContainerAdm>
        </>
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

export default EditUser;
