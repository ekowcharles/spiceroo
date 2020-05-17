import React from 'react';

import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #d80a3d;
`;

const Header = props => {
  let loadingComponent = null;

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
      <ul className="page-headers">
        <li className="pad-side-3">
          <div className="buy">
            <span>Buy <FontAwesomeIcon icon={faShoppingCart} color="#ffffff" /></span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Header);
