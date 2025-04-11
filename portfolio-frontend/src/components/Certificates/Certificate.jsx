import React from 'react';

const Certificate = ({ certificate }) => {
  const { title, description, image, date } = certificate;
  
  return (
    <div className="certificate-item">
      <div className="certificate-img">
        <img src={image} alt={title} />
      </div>
      <div className="certificate-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="certificate-date">{date}</div>
      </div>
    </div>
  );
};

export default Certificate;