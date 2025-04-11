// Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Olá, sou <span>Seu Nome</span></h1>
          <p>Desenvolvedor Frontend apaixonado por criar experiências digitais incríveis e interfaces intuitivas.</p>
          <a href="#contact" className="btn">Entre em contato</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
