import React, { useRef, useState } from "react";
import {
  BsArrowRepeat,
  BsBarChartFill,
  BsClockHistory,
  BsGearFill,
  BsGridFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import suape from "../assets/image/logo-suape-45anos.png";
import logo from "../assets/image/logo.svg";

import "../css/MenuLateral.css";

const MenuLateral = () => {
  const nave = document.querySelectorAll(".nave-link");
  const naveRef = useRef();
  const menuLateralRef = useRef();
  const [clicado, setClicado] = useState(true);
  const [visible, setVisible] = useState("menu-lateral hidden");

  function remove() {
  }
  function addMarca(e) {
    nave.forEach((item) => item.classList.remove("atual"));
    
    setTimeout(1000);
    e.classList.add("atual");
    // naveRef[e].current.classList.add("atual")
  }

  function changeIcon() {}

  function openMenu() {
    if (clicado) {
      setVisible("menu-lateral");
    } else {
      setVisible("menu-lateral hidden");
    }

    setClicado(!clicado);
  }

  return (
    <div className={visible} ref={menuLateralRef}>
      <div className="logo" onClick={openMenu}>
        {clicado ? (
          <img style={{ width: "30px", marginBottom: '30px'}} src={logo} alt="" />
        ) : (
          <img src={suape} alt="" />
        )}
      </div>
      <div className="navegation">
        <Link
          ref={naveRef}
          onClick={(e) => addMarca(e.target)}
          className="nave-link"
          to="/"
        >
          {clicado ? (
            <BsGridFill style={{ pointerEvents: "none" }} />
          ) : (
            "Dashbord"
          )}
        </Link>
        <Link
          ref={naveRef}
          onClick={(e) => addMarca(e.target)}
          className="nave-link"
          to="/analytic"
        >
          {clicado ? (
            <BsBarChartFill style={{ pointerEvents: "none" }} />
          ) : (
            "Analytics"
          )}
        </Link>
        <Link
          ref={naveRef}
          onClick={(e) => addMarca(e.target)}
          className="nave-link"
          to="/processos"
        >
          {clicado ? (
            <BsArrowRepeat style={{ pointerEvents: "none" }} />
          ) : (
            "Processos abertos"
          )}
        </Link>
        <Link
          ref={naveRef}
          onClick={(e) => addMarca(e.target)}
          className="nave-link"
          to="/historico"
        >
          {clicado ? (
            <BsClockHistory style={{ pointerEvents: "none" }} />
          ) : (
            "Históricos"
          )}
        </Link>
        <Link
          ref={naveRef}
          onClick={(e) => addMarca(e.target)}
          className="nave-link"
          to="/config"
        >
          {clicado ? (
            <BsGearFill style={{ pointerEvents: "none" }} />
          ) : (
            "Configuração"
          )}
        </Link>
      </div>
      <p>{clicado ? 'v1.0' : 'versão alpha 1.0'}</p>
    </div>
  );
};

export default MenuLateral;
