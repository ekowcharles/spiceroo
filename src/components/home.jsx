import React from 'react';

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
          <img src="https://spiceroo.s3.amazonaws.com/front.jpg" alt="spiceroo-ground-pepper-front" />
        </div>
        <div className="product">
          <img src="https://spiceroo.s3.amazonaws.com/back.jpg" alt="spiceroo-ground-pepper-back" />
        </div>
      </div>
    </div>
  );
};

export default Home;
