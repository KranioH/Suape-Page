import React, { useEffect, useRef, useState } from "react";
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

const MenuLateral = ({ tela }) => {
  const nave = document.querySelectorAll(".nave-link");
  const naveRef = useRef();
  const menuLateralRef = useRef();
  // const [response, setResponse] = useState(false);
  const [clicado, setClicado] = useState(false);
  const [visible, setVisible] = useState("menu-lateral");

  // function removerMarca() {
  //   nave.forEach((item) => item.classList.remove("atual"));
  // }

  function addMarca(e) {
    // removerMarca()
    nave.forEach((item) => {
      item.classList.remove("atual")
      console.log('removeu');
    });
    console.log("mudou");
    
    // setTimeout(1000);
    e.classList.add("atual");
    // naveRef[e].current.classList.add("atual")
  }

  // function changeScreen() {
  //   if (window.innerWidth > 900 && window.innerWidth < 1000) {
  //     setResponse(true);
  //     setVisible("menu-lateral responsive");
  //   } else {
  //     setResponse(false);
  //   }
  // }

  // useEffect(() => {
  //   function addMarca(e) {
  //     // removerMarca()
  //     nave.forEach((item) => {
  //       item.classList.remove("atual")
  //       console.log('removeu');
  //     });

  //     console.log("mudou");
      
  //     // setTimeout(1000);
  //     e.classList.add("atual");
  //     // naveRef[e].current.classList.add("atual")
  //   }

  //  return addMarca()
  //}),
  //  [];

    // useEffect(() => {
    //   nave.forEach((item) => {
    //     item.addEventListener('click', ()=>{

    //     })
    //     item.classList.remove("atual")
    //     console.log('removeu');
    //   });
    
    //   return (e) => {
    //     e.classList.add("atual");
    //   }
    // }, [])
    

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
          <img
            style={{ width: "30px", marginBottom: "30px" }}
            src={logo}
            alt=""
          />
        ) : (
          <img
            style={{ width: "130px", marginBottom: "30px" }}
            src={suape}
            alt=""
          />
        )}
      </div>
      <div className="navegation">
        <Link
          onClick={(e) => addMarca(e.currentTarget)}
          className="nave-link atual"
          to="/"
        >
          {clicado ? (
            <BsGridFill style={{ pointerEvents: "none" }} />
          ) : (
            <span style={{ pointerEvents: "none" }}>Dashbord</span>
          )}
        </Link>
        <Link
          onClick={(e) => addMarca(e.target)}
          className="nave-link"
          to="/analytic"
        >
          {clicado ? (
            <BsBarChartFill style={{ pointerEvents: "none" }} />
          ) : (
             <span style={{ pointerEvents: "none" }}>Setor</span>
          )}
        </Link>
        {/* <Link
          onClick={(e) => addMarca(e.target)}
          className="nave-link"
          to="/processos"
        >
          {clicado ? (
            <BsArrowRepeat style={{ pointerEvents: "none" }} />
          ) : (
             <span style={{ pointerEvents: "none" }}>Processos abertos</span>
          )}
        </Link> */}
        <Link
          onClick={(e) => addMarca(e.target)}
          className="nave-link"
          to="/historico"
        >
          {clicado ? (
            <BsClockHistory style={{ pointerEvents: "none" }} />
          ) : (
             <span style={{ pointerEvents: "none" }}>Históricos</span>
          )}
        </Link>
        <Link
          id="config"
          onClick={(e) => addMarca(e.target)}
          className="nave-link"
          to="/config"
        >
          {clicado ? (
            <BsGearFill style={{ pointerEvents: "none" }} />
          ) : (
             <span style={{ pointerEvents: "none" }}>Configuração</span>
    
          )}
        </Link>
      </div>
      {/* <p>{clicado ? "v1.0" : "versão alpha 1.0"}</p> */}
    </div>
  );
};

export default MenuLateral;
