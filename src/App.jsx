import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";

import MenuLateral from "./components/MenuLateral.jsx";
import Home from "./pages/Home.jsx";
import Analytic from "./pages/Analytic.jsx";
import Processos from "./pages/Processos.jsx";
import Config from "./pages/Config.jsx";
import Historico from "./pages/Historico.jsx";
import Header from "./components/header.jsx";

function App() {
  const [tela, setTela] = useState(false);

  function screean() {
    if (window.innerWidth < 1000) {
      setTela(false);
    } else {
      setTela(true);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", screean);
  }, []);

  return (
    <div className="container">
      <Router>
        <MenuLateral tela={tela} />
        <main>
          <Header tela={tela} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytic" element={<Analytic />} />
            <Route path="/processos" element={<Processos />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="/config" element={<Config />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
