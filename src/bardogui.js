import { Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import RegisterUser from "./pages/register/user";
import Home from "./pages/home";
import Menu from "./pages/menu";
import RegisterTable from "./pages/register/table";
import Profile from "./pages/profile";
import Admin from "./pages/Admin";
import RegisterItem from "./pages/register/item";
import EditProfile from "./pages/edit/user/profile";

const Bardogui = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register/user" element={<RegisterUser />} />
        <Route path="/Register/table" element={<RegisterTable />} />
        <Route path="/Register/item" element={<RegisterItem />} />
        <Route path="/Edit/user" element={<EditProfile/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default Bardogui;
