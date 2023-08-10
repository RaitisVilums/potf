import { useState } from "react";
import "./styles/ExperienceItem.scss";

import { logo } from "../assets";

// ! Create a global function that adds icons to techStack
// ! add location icon and Plus icon
const ExperienceItem = ({ experience, key }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      <div className="experience-item" key={key}>
        <div className="experience-item__title">
          <h1>
            {experience.company} - {experience.title}
          </h1>
        </div>
        <div className="experience-item__date">
          <h1>{experience.date}</h1>
          <button onClick={handleClick} className="experience-item__btn">
            +
          </button>
        </div>
      </div>
      {show && (
        <div className="experience-show">
          <div className="experience-show__image">
            <img src={logo} alt={experience.icon} width={50} height={60} />
            <p>{experience.address}</p>
          </div>
          <div className="experience-show__description">
            <p>{experience.description}</p>
          </div>
          <div className="experience-show__technologies">
            <ul>
              {experience.techStack.map((tech) => (
                <li>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceItem;
