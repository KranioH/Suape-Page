import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";

import Home from "./pages/Home.jsx";
import Setor from "./pages/Setor.jsx";
import Processos from "./pages/Processos.jsx";
import Config from "./pages/Config.jsx";
import Historico from "./pages/Historico.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import List from "./pages/List.jsx";

import api from "./services/api";

function App() {
  // const [tela, setTela] = useState(false);

  // const [user, setUser] = useState([
  //   {
  //     email: 'ff',
  //     senha: 123
  //   },
  //   {
  //     email: 'gg',
  //     senha: 123
  //   },
  //   {
  //     email: 'dd',
  //     senha: 123
  //   }
  // ])

  // const [users, setUsers] = useState([]);

  // async function getUSers() {
  //   const userFromApi = await api.get("/usuarios");

  //   setUsers(userFromApi.data);
  // }

  // useEffect(() => {
  //   getUSers();
  // }, []);

  // function screean() {
  //   if (window.innerWidth < 1000) {
  //     setTela(false);
  //   } else {
  //     setTela(true);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", screean);
  // }, []);

  return (
    <div className="container">
      {/* <MenuLateral tela={tela} /> */}
      <main>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="setor" element={<Setor />} />
            <Route path="processos" element={<Processos />} />
            <Route path="historico" element={<Historico />} />
            <Route path="config" element={<Config />} />
            <Route path="usuarios" element={<List />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
