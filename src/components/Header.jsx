import React from "react";
import Cloud from "../images/cloud.png";
import CloudSoft from "../images/cloud-soft.png";
import Hand from "../images/hand.png";
import BoyImg from "../images/Character-2.png"
import MainBtn from "./shared/MainBtn";
import NavBar from "./NavBar";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header-section" id="header">
      <div className="header-bg" id="parallax"></div>
      <img src={Cloud} alt="cloud-img" className="cloud-first" />
      <img src={CloudSoft} alt="cloud-img" className="cloud-second" />

      {/* ------------------------- Content Section -------------------------------- */}
      <div className="header-content">
        <NavBar />
        <div className="content-section">
          <div className="left-col">
            <h3>
              Hello
              <span className="hand-icon">
                <img src={Hand} alt="icon" />
              </span>
              I  am <br /> <span className="brand-name">Rahul Kumar</span>
            </h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              sit, error, sed quasi, perferendis vitae unde repellendus dicta
              expedita.
            </p>
            <div className="header-btn">
              <MainBtn text="Contact Me" icon={<BsArrowUpRightCircleFill />} />
            </div>
          </div>
          <div className="right-col">
            <img src={BoyImg} alt="girl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
