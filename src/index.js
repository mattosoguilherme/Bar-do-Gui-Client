import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Bardogui from "./bardogui";
import axios from "axios";
import GlobalStyle from "./styles/global";

axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />

      <Bardogui />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
