import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Bardogui from "./bardogui";
import Header from "./components/header";
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Bardogui />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
