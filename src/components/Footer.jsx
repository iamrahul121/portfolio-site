import React from "react";
import Logo from "../images/logo2.png";
import { FaInstagram, FaGithub, FaLinkedinIn,FaYoutube,FaFacebook} from "react-icons/fa";
import CommonSection from "./shared/CommonSection";
import SocialIcons from "./shared/SocialIcons";
import ScrollToSection from "./shared/Helper";

const Footer = () => {
  // const style = { backgroundColor: "black", fontSize: "1.5em", color: "red" };
  return (
    <CommonSection id="footer" background="dark">
      <div className="footer-section">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>

        <ul className="links">
          <li className="footer-links" onClick={() => ScrollToSection("header")}>Home</li>
          <li className="footer-links" onClick={() => ScrollToSection("skills")}>Skills</li>
          <li className="footer-links" onClick={() => ScrollToSection("portfolio")}>PortFolio</li>
          <li className="footer-links" onClick={() => ScrollToSection("blogs")}>Blog</li>
          <li className="footer-links" onClick={() => ScrollToSection("contact")}>Contact</li>
        </ul>

        <div className="social-icons">
          <SocialIcons color="#E84C88" icon={<FaInstagram/>} link="techyfame.com" />
          <SocialIcons color="#FF0000" icon={<FaYoutube/>} link="techyfame.com" />
          <SocialIcons color="#0A66C2" icon={<FaLinkedinIn/>} link="techyfame.com" />
          <SocialIcons color="blue" icon={<FaFacebook/>} link="techyfame.com" />
          <SocialIcons color="#0d2636" icon={<FaGithub/>} link="techyfame.com" />
        </div>

        <div className="copyrights">
          <p>Copyrights All Rights Reserved TechyFame 2023</p>
          <hr />
        </div>
      </div>
    </CommonSection>
  );
};

export default Footer;
