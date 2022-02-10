import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/register/user";
import Recover from "./pages/recorver";

const Bardogui = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/RegisterUser" element={<RegisterUser />} />
        <Route path="/Recover" element={<Recover />} />
      </Routes>
    </>
  );
};

export default Bardogui;
