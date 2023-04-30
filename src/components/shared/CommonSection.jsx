import React from "react";
import "./cs.scss";

const CommonSection = ({ id, className, children, title, background }) => {
  return (
    <div
      id={id || ""}
      className={`section ${className ? className : ""} ${
        background === "dark" ? "dark" : "light"
      }`}
    >
      <div className="cs-content">
        {title && (
          <div className="section-title">
            <h2>{title}</h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default CommonSection;
