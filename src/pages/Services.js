import React from 'react';
import { serviceList } from '../helpers/serviceList';
import "../styles/Services.css";
import ServiceItem from '../components/ServiceItem'; // <-- doğru bileşeni içe aktar

const Services = () => {
  return (
    <div className='Service'>
      <h1 className="serviceTittle">HİZMETLERİMİZ</h1>
      <div className="serviceList">
        {serviceList.map((serviceItem, key) => {
          return (
            <ServiceItem // <-- bileşen ismi burada büyük harfle yazılmalı
              key={key}
              image={serviceItem.image}
              name={serviceItem.name}
              aciklama={serviceItem.aciklama}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
