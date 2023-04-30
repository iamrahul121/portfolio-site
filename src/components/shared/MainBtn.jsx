import React from "react";
import ScrollToSection from "../shared/Helper";

const MainBtn = ({ text, icon }) => {
  return (
    <div className="btn" onClick={() => ScrollToSection("contact")}>
      <div className="btn-content">{text}</div>
      <span className="arrow-icon">{icon}</span>
    </div>
  );
};

export default MainBtn;
