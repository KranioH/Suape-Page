import "../css/Login.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import background from "../assets/image/wallpaper.jpg";
import miniLogo from "../assets/image/suape-logo.png";
// import logo from "../assets/image/so.png";
import logo from "../assets/image/SUAPE.png";
import nome from "../assets/image/nome.png";

function Login({ user, sestUser }) {
  const navigate = useNavigate();
  const inputNameRef = useRef();
  const inputSenhaRef = useRef();

  function validarUSer(e) {
    let valorInputName = inputNameRef.current.value;
    let valorInputSenha = inputNameRef.current.value;

    // console.log(valorInputName, valorInputSenha, user.email);
    // if (valorInputName == null && valorInputName.length < 1) {
    //   console.log("tem");

    //   if (valorInputName == user.map((item) => item.email)) {
    //     console.log("Igual");
    //     // navigate('home');
    //   }
    // } else {
    //   console.log("Campo vazio");
    // }

    navigate('home')
    // e.preventDefault();
  }

  return (
    <div className="login">
      <form action="" className="sign-in">
        <div className="logo">
          <img id="logo-icon" src={logo} alt="" />
          {/* <img id="logo-nome" src={nome} alt="" /> */}
        </div>
        <div className="area-input">
          <input
            ref={inputNameRef}
            type="text"
            placeholder="Digite seu email"
          />
          <input
            ref={inputSenhaRef}
            type="password"
            placeholder="Digite sua senha"
          />
        </div>
        <button
          id="bnt-submit"
          type="submit"
          onClick={validarUSer}
          value="Login"
        >
          Login
        </button>
      </form>
      <div className="sign-in-photo">
        <img id="mini-logo" src={miniLogo} alt="" />
        <img
          id="wallpaper-suape"
          src={background}
          alt="Imagem do porto suape"
        />
      </div>
    </div>
  );
}

export default Login;
