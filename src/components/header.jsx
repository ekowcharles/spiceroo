import React from 'react';

import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import logo from '../images/logo.png';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #d80a3d;
`;

const Header = props => {
  let loadingComponent = null;
  let headerImage = null
  let justifyHeader = "end"

  let location = props.location.pathname;
  if (location !== "/") {
    headerImage = <li className="header-logo" onClick={() => props.loadPage('/')}>
      <img src={logo} alt="spiceroo-logo" />
    </li>

    justifyHeader = ""
  }

  if (props.loading) {
    loadingComponent = (
      <div className="sweet-loading">
        <BarLoader
          css={override}
          height={2}
          heightUnit={'px'}
          width={100}
          widthUnit={'%'}
          color={'#d80a3d'}
        />
      </div>
    );
  }

  return (
    <div className="area-header">
      {loadingComponent}
      <ul className={`page-headers ${justifyHeader}`}>
        {headerImage}
        <li className="pad-side-3">
          <a href="https://shop.spiceroo.com/collections/spiceroo%E2%84%A2-ground-black-pepper/products/spiceroo%E2%84%A2-ground-black-pepper">
            <div className="buy">
              <span>Buy <FontAwesomeIcon icon={faShoppingCart} color="#ffffff" /></span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Header);
