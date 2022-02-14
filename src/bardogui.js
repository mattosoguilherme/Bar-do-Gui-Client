import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/register/user";
import Home from "./pages/home";
import Menu from "./pages/menu";
import RegisterTable from "./pages/register/table";
import Profile from "./pages/profile";
import Admin from "./pages/Admin";


const Bardogui = () => {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/RegisterUser" element={<RegisterUser />} />
        <Route path="/RegisterTable" element={<RegisterTable/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/profile" element={<Profile />}/>  
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </>
  );
};

export default Bardogui;
