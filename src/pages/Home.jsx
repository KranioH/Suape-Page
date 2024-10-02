import "../css/Home.css";
import { FaUpload } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="main"></div>
      <form className="area-input">
        <label id="upload1" htmlFor="input-upload">Enviar arquivo</label>
        <input type="file" id="input-upload" style={{display: 'none'}} />
        <label id="upload2" htmlFor="input-upload">
          <FaUpload />
        </label>

        {/* <button id="upload"></button> */}
      </form>
    </div>
  );
};

export default Home;
