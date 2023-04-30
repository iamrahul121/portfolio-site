import logo from "../images/logo2.png";
import ScrollToSection from "./shared/Helper";
import MainBtn from "./shared/MainBtn";
import { FaBars } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const NavBar = () => {
 
  return (
    <div className="navbar-section">
      <div className="app-logo">
      <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="list active">
        <span className="li-items" onClick={() => ScrollToSection("skills")}>Skills</span>
        <span className="li-items" onClick={() => ScrollToSection("portfolio")}>PortFolio</span>
        <span className="li-items" onClick={() => ScrollToSection("blogs")}>Blogs</span>
        <MainBtn text = "Contact Me" icon={<BsArrowUpRightCircleFill/>}/>
      </div>
      <div className="menu">
      <FaBars className="menu-icon" size={28}/>
      </div>
    </div>
  );
};

export default NavBar;
