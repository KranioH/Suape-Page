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
import wall from "../assets/image/wallpaper.jpg";

import "../css/MenuLateral.css";

const MenuLateral = ({ tela }) => {
  const nave = document.querySelectorAll(".nave-link");
  const menuLateralRef = useRef();
  // const [response, setResponse] = useState(false);
  const [clicado, setClicado] = useState(true);
  const [visible, setVisible] = useState("menu-lateral hidden");
  const [activeIndex, setActiveIndex] = useState(null);

  function addMarca(e) {    
    setActiveIndex(e)
  }

  // linkRef.current.map(item=> item.addEventListener("click", ()=>{
  //   item.classList.add("atual")
  // }))

  // function changeScreen() {
  //   if (window.innerWidth > 900 && window.innerWidth < 1000) {
  //     setResponse(true);
  //     setVisible("menu-lateral responsive");
  //   } else {
  //     setResponse(false);
  //   }
  // }

  // useEffect(() => {

  //   nave.forEach((item) => {
  //     item.classList.remove("atual")
  //     console.log('removeu');
  //   });

  //   function addMarca(e) {
  //     // removerMarca()
      

  //     console.log("mudou");
      
  //     // setTimeout(1000);
  //     e.classList.add("atual");
  //     // naveRef[e].current.classList.add("atual")
  //   }

  // //  return addMarca()
  // }),
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
          key={0}
          onClick={() => addMarca(0)}
          className={`nave-link ${activeIndex == 0 && 'atual'}`}
          to="dashboard"
        >
          {clicado ? (
            <BsGridFill style={{ pointerEvents: "none" }} />
          ) : (
            <polygon style={{ pointerEvents: "none" }}>Dashbord</polygon>
          )}
        </Link>
        <Link
        key={1}
          onClick={() => addMarca(1)}
          className={`nave-link ${activeIndex == 1 && 'atual'}`}
          to="setor"
        >
          {clicado ? (
            <BsBarChartFill style={{ pointerEvents: "none" }} />
          ) : (
             <p style={{ pointerEvents: "none" }}>Setor</p>
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
          key={2}
          onClick={() => addMarca(2)}
          className={`nave-link ${activeIndex == 2 && 'atual'}`}
          to="historico"
        >
          {clicado ? (
            <BsClockHistory style={{ pointerEvents: "none" }} />
          ) : (
             <p style={{ pointerEvents: "none" }}>Históricos</p>
          )}
        </Link>
        <Link
          key={3}
          id="config"
          onClick={() => addMarca(3)}
          className={`nave-link ${activeIndex == 3 && 'atual'}`}
          to="config"
        >
          {clicado ? (
            <BsGearFill style={{ pointerEvents: "none" }} />
          ) : (
             <p style={{ pointerEvents: "none" }}>Configuração</p>
    
          )}
        </Link>
        <Link
          key={4}
          onClick={() => addMarca(4)}
          className={`nave-link ${activeIndex == 4 && 'atual'}`}
          to="usuarios"
        >
          {clicado ? (
            <BsClockHistory style={{ pointerEvents: "none" }} />
          ) : (
             <p style={{ pointerEvents: "none" }}>Usuários</p>
          )}
        </Link>
      </div>
      {/* <p>{clicado ? "v1.0" : "versão alpha 1.0"}</p> */}
    </div>
  );
};

export default MenuLateral;
