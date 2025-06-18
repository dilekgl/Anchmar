import React from 'react';

function ServiceItem({ image, name, aciklama }) {
  return (
    <div className="serviceItem">
      <div
        className="serviceImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="serviceText">
        <h1>{name}</h1>
        <p>{aciklama}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
