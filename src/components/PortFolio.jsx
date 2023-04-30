import React, { useState } from "react";
import CommonSection from "./shared/CommonSection";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { listItems, projectsData } from "./shared/PortFolioApi";

const PortFolio = () => {
  const [projectsItem, setProjectsItem] = useState(projectsData);

  const clickHandler = (category) => {
    if (category === "all") {
      setProjectsItem(projectsData);
    } else {
      let updatedItems = projectsData.filter((item) => {
        return item.tags === category;
      });
      setProjectsItem(updatedItems);
    }
  };

  return (
    <CommonSection id="portfolio" title="Check My PortFolio" background="light">
      <div className="portfolio-section">
        <ul className="portfolio-list">
          {listItems.map((items) => {
            return (
              <li
                key={items.id}
                className={`portfolio-items`}
                onClick={() => clickHandler(items.category)}
              >
                {items.name}
              </li>
            );
          })}
        </ul>

        <div className="all-projects">
          {projectsItem.map((items) => {
            return (
              <div className="projects-list">
                <div className="projects-details">
                  <h3>{items.name}</h3>
                  <div className="para">
                    <span>Projects Details</span> <BsArrowUpRightCircleFill />
                  </div>
                </div>
                <img src={items.media.thumbnail} alt="img" />
              </div>
            );
          })}
        </div>
      </div>
    </CommonSection>
  );
};

export default PortFolio;
