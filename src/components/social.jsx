import React from 'react';
import facebook from '../images/social/facebook.svg';
import instagram from '../images/social/instagram.svg';
import twitter from '../images/social/twitter.svg';
import pinterest from '../images/social/pinterest.svg';

const Social = () => {
  return (
    <div className="area-social">
      <div className="card">
        <div className="follow">Follow us!</div>
        <div className="follow-text small light">Get the latest on spices.</div>
        <ul>
          <li className="col-sm-3">
            <a
              href="https://www.facebook.com/Spiceroo-2227595217457735"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li className="col-sm-3">
            <a
              href="https://www.instagram.com/spice.roo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li className="col-sm-3">
            <a
              href="https://twitter.com/spicesrule"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li className="col-sm-3">
            <a
              href="https://www.pinterest.com/spiceroo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pinterest} alt="pinterest" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Social;
