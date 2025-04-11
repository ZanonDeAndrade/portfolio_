import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, projectLink, codeLink } = project;
  
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={projectLink}>Ver projeto</a>
          <a href={codeLink}>Código fonte</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;