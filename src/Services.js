import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li><Link to="design">Design Services</Link></li>
        <li><Link to="development">Development Services</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Services;
