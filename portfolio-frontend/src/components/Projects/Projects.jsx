import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Responsivo",
      description: "Site de comércio eletrônico com design responsivo e carrinho de compras funcional.",
      image: "https://via.placeholder.com/400x200",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      projectLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Dashboard Administrativo",
      description: "Painel de controle administrativo com gráficos e visualização de dados em tempo real.",
      image: "https://via.placeholder.com/400x200",
      technologies: ["React", "Chart.js", "Material UI"],
      projectLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Aplicativo de Anotações",
      description: "Aplicativo web para fazer anotações com funcionalidades de tags e categorização.",
      image: "https://via.placeholder.com/400x200",
      technologies: ["Vue.js", "Vuex", "CSS Grid"],
      projectLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Meus Projetos</h2>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;