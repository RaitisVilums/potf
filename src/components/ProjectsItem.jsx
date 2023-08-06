import { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/ProjectItem.scss";

const ProjectsItem = ({ project }) => {
  const [show, setShow] = useState(true);

  return (
    <Link
      onMouseEnter={() => setShow(false)}
      onMouseLeave={() => setShow(true)}
      className="project-item"
      key={project.id}
    >
      <div className="project-item__image">
        <img src={project.image} alt={project.id} />
      </div>
      <div className="project-item__content">
        <h2>{project.title}</h2>

        <p className="project-item__category">{project.category[0]}</p>
        <p className="project-item__show">Show Project</p>
      </div>
    </Link>
  );
};

export default ProjectsItem;

//  {
//    show ? (
//      <p className="project-item__category">{project.category[0]}</p>
//    ) : (
//      <p className="project-item__show">Show Project</p>
//    );
//  }
