// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="#" aria-label="GitHub">
            <i className="social-icon github"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="social-icon linkedin"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="social-icon twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="social-icon instagram"></i>
          </a>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
