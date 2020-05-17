import React from 'react';

import front from '../images/front.png';
import back from '../images/back.png';
import logo from '../images/logo.png';

const Home = () => {
  return (
    <div className="area-home">
      <div className="main-logo">
        <img src={logo} alt="spiceroo-logo" />
      </div>
      <div className="center">
        <small>Maiden Product</small>
        <p>
          <span>Spiceroo&#8482; Ground Pepper</span>
        </p>
      </div>
      <div className="product-images">
        <div className="product">
          <img src={front} alt="spiceroo-ground-pepper-front" />
        </div>
        <div className="product">
          <img src={back} alt="spiceroo-ground-pepper-back" />
        </div>
      </div>
    </div>
  );
};

export default Home;
