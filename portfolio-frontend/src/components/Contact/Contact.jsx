// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Aqui você adicionaria a lógica para enviar o formulário
    alert('Mensagem enviada! (Simulação)');
    // Limpar o formulário após o envio
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contato</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Vamos conversar</h3>
            <div className="contact-item">
              <div className="contact-icon">&#9993;</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>seuemail@example.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">&#128222;</div>
              <div className="contact-details">
                <h4>Telefone</h4>
                <p>(99) 9999-9999</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">&#x1F4CD;</div>
              <div className="contact-details">
                <h4>Localização</h4>
                <p>São Paulo, Brasil</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Seu nome" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Seu email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Assunto da mensagem" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea 
                  id="message" 
                  placeholder="Sua mensagem" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
