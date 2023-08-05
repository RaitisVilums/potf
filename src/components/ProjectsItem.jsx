import { Link } from "react-router-dom";

const ProjectsItem = ({ project }) => {
  return (
    <div className="project-item" key={project.id}>
      <div className="project-item__image">
        <img src={project.image} alt={project.id} />
      </div>
      <div className="project-item__content">
        <h2>{project.title}</h2>
      </div>
    </div>
  );
};

export default ProjectsItem;
