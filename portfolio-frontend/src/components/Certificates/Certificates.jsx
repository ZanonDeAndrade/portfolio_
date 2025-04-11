import React, { useState, useEffect, useRef } from 'react';
import Certificate from './Certificate';
import './Certificates.css';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  
  const certificates = [
    {
      id: 1,
      title: "Desenvolvimento Web Moderno",
      description: "Curso completo de HTML, CSS e JavaScript",
      image: "https://via.placeholder.com/400x200",
      date: "Janeiro 2023"
    },
    {
      id: 2,
      title: "React - O Guia Completo",
      description: "Desenvolvimento de aplicações avançadas com React",
      image: "https://via.placeholder.com/400x200",
      date: "Março 2023"
    },
    {
      id: 3,
      title: "UX/UI Design",
      description: "Princípios de design de interface e experiência do usuário",
      image: "https://via.placeholder.com/400x200",
      date: "Junho 2023"
    },
    {
      id: 4,
      title: "TypeScript Avançado",
      description: "Desenvolvimento de aplicações com TypeScript",
      image: "https://via.placeholder.com/400x200",
      date: "Setembro 2023"
    },
    {
      id: 5,
      title: "Vue.js - Nível Intermediário",
      description: "Desenvolvimento de aplicações com Vue.js e Vuex",
      image: "https://via.placeholder.com/400x200",
      date: "Dezembro 2023"
    }
  ];

  const totalItems = certificates.length;

  // Posicionar os certificados em um círculo 3D
  useEffect(() => {
    const positionItems = () => {
      if (!carouselRef.current) return;
      
      const items = carouselRef.current.children;
      const radius = 300;
      const angle = 360 / totalItems;
      
      for (let i = 0; i < items.length; i++) {
        const rotationY = angle * i;
        const item = items[i];
        item.style.transform = `rotateY(${rotationY}deg) translateZ(${radius}px)`;
        
        // Adicionar opacidade para os itens que não estão em foco
        if (i === currentIndex) {
          item.style.opacity = '1';
        } else {
          item.style.opacity = '0.3';
        }
      }
      
      // Rotação do container para mostrar o certificado atual
      carouselRef.current.style.transform = `rotateY(${-angle * currentIndex}deg)`;
    };
    
    positionItems();
  }, [currentIndex, totalItems]);
  
  // Navegação
  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };
  
  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };
  
  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      nextCertificate();
    }, 5000);
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <div className="section-title">
          <h2>Meus Certificados</h2>
        </div>
        <div className="certificate-carousel">
          <div className="carousel-container" ref={carouselRef}>
            {certificates.map((cert) => (
              <Certificate key={cert.id} certificate={cert} />
            ))}
          </div>
          
          <div className="carousel-controls">
            <button onClick={prevCertificate} className="carousel-button prev">&#8592;</button>
            <button onClick={nextCertificate} className="carousel-button next">&#8594;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;