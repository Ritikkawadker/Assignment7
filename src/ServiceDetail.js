import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceType } = useParams();

  return (
    <div>
      <h2>{serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Services</h2>
      <p>Details about {serviceType} services provided by Innomatics Research Labs.</p>
    </div>
  );
};

export default ServiceDetail;
