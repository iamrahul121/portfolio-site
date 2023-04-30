import React from "react";
import TechIcon from "../images/tech-icons.png";
import CommonSection from "./shared/CommonSection";
import MainBtn from "./shared/MainBtn";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Skills = () => {
  return (
    <CommonSection id="skills" background="dark">
      <div className="skills-section">
        <div className="left-skills">
          <img src={TechIcon} alt="ReactJs HTML JS" />
        </div>

        <div className="right-skills">
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quod
            harum numquam, commodi eveniet voluptatibus? Suscipit architecto
            aliquam reprehenderit, velit, nihil inventore quisquam sunt
            excepturi quasi totam eveniet! Necessitatibus, aliquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quod
            harum numquam, commodi eveniet voluptatibus? Suscipit architecto
            aliquam reprehenderit
          </p>
          <MainBtn text="Download CV" icon={<BsArrowUpRightCircleFill />} />
        </div>
      </div>
    </CommonSection>
  );
};

export default Skills;
