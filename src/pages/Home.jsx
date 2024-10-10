import "../css/Home.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuLateral from "../components/MenuLateral";
import Header from "../components/header.jsx";

const Home = () => {
  const [tela, setTela] = useState(false);

  return (
    <div className="home">
      <MenuLateral tela={tela} />
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
