import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import RegisterUser from "./pages/register/user";
import Home from "./pages/home";
import Menu from "./pages/menu";
import RegisterTable from "./pages/register/table";
import Profile from "./pages/profile";
import Admin from "./pages/Admin";
import RegisterItem from "./pages/register/item";
import RegisterAdm from "./pages/register/admin";
import EditUser from "./pages/edit/user";
import EditItem from "./pages/edit/item";

const Bardogui = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register/user" element={<RegisterUser />} />
        <Route path="/Register/table" element={<RegisterTable />} />
        <Route path="/Register/item" element={<RegisterItem />} />
        <Route path="/Register/admin" element={<RegisterAdm />} />
        <Route path="/Edit/user/:id" element={<EditUser />} />
        <Route path="/Edit/item/:id" element={<EditItem />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:id" element={<Admin />} />
        <Route path="/menu/:id"  element={<Menu/>}/>
      </Routes>
    </>
  );
};

export default Bardogui;
