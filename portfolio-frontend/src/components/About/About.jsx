// About.jsx
import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "UI/UX Design", percentage: 75 }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>Sobre Mim</h2>
        </div>
        <div className="about-content">
          <div className="about-img">
            <img src="https://via.placeholder.com/300" alt="Minha foto" />
          </div>
          <div className="about-text">
            <h3>Desenvolvedor Frontend</h3>
            <p>Sou um desenvolvedor frontend com paixão por criar interfaces modernas e funcionais. Tenho experiência com as mais recentes tecnologias de desenvolvimento web e estou sempre buscando aprender mais para entregar as melhores soluções.</p>
            <p>Meu objetivo é combinar design atraente com código limpo e eficiente para proporcionar experiências digitais memoráveis aos usuários.</p>
            <div className="skills">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
