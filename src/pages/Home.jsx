import React from "react";
import { Expertise, Categories, Projects, Experience } from "../constants";
import { ExperienceItem, Filter, ProjectsItem, Form } from "../components";
import { Link } from "react-router-dom";

import "./styles/Home.scss";

const Home = () => {
  // ! randomize the featruredProject, if there are many
  const featuredProject = Projects.filter((project) => {
    if (project.featured) return project;
  });

  // ! filter the projects based on the category
  const filterProjects = (category) => {
    if (category === "all") {
      return Projects;
    } else {
      const filteredProjects = Projects.filter((project) => {
        if (project.category === category) return project;
      });
      return filteredProjects;
    }
  };

  return (
    <main>
      <section className="about" id="about">
        <h1 className="heading">ABOUT</h1>
        <div className="about__grid">
          {Expertise.map((block) => (
            <div className="about__item" key={block.id}>
              <div className="lane"></div>
              <div className="object"></div>
              <div className="about__item--title">
                <img
                  className="about__item--image"
                  src={block.icon}
                  alt={block.title}
                  width={50}
                  height={50}
                />
                <h2>{block.title}</h2>
              </div>
              <h3>{block.description}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="projects">
        <h1 className="heading">WORK</h1>
        <div className="projects__featured">
          <div className="projects__featured--image">
            <img src={featuredProject[0].image} alt="featured_project" />
          </div>
          <div className="projects__featured--content">
            <h1 className="heading-sub">Featured</h1>
            <h2>{featuredProject[0].title}</h2>
            <p>
              {featuredProject[0].description} Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nisi veritatis beatae qui rerum
              aperiam laboriosam perferendis soluta tenetur ipsam tempora earum
              nobis, totam quas hic a odit explicabo consequuntur perspiciatis.
              Fugiat veniam eaque esse quisquam qui provident cumque? Totam
              autem perferendis placeat hic, sequi deleniti accusamus doloremque
              magnam voluptates rerum?
            </p>
            <Link className="projects__featured--link">Check it out</Link>
          </div>
        </div>
        <Filter categories={Categories} handleClick={filterProjects} />
        <div className="projects__grid">
          {Projects.map((project) => (
            <ProjectsItem key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h1 className="heading">EXPERIENCE</h1>
        <div className="experience">
          {Experience.map((exp) => (
            <ExperienceItem key={exp} experience={exp} />
          ))}
        </div>
      </section>

      <section>
        <h1 className="heading">CONTACTS</h1>
        <div className="contacts">
          <div className="contacts__form">
            <Form />
          </div>
          <div className="contacts__blocks">
            <h1 className="heading">Have a Project?</h1>
            <h1 className="heading">Let's Work Together!</h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
