import React from 'react';
import { useLocation } from 'react-router-dom';

const AmericanContainer = () => {

  const location = useLocation();
  const path = location.pathname;

  console.log("[ AmericanContainer ] Estamos en: ", path);
  
  return (
    <div id='american-section' className='american-container'>
      <h1>American food</h1>
    </div>
  );
}

export default AmericanContainer;
