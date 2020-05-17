import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';
import { withRouter } from 'react-router-dom';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #d80a3d;
`;

const Header = props => {
  let loadingComponent = null;
  let adminProductsPage = null;

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

  if (props.loggedIn) {
    adminProductsPage = (
      <li
        className="pointer margin-right-24"
        onClick={() => props.loadPage('/admin/products/all')}
      >
        Products
      </li>
    );
  }

  return (
    <div className="area-header">
      <ul className="page-headers">
        {adminProductsPage}
        <li className="pad-side-3">
          <FontAwesomeIcon icon={faShoppingCart} />
        </li>
      </ul>
      {loadingComponent}
    </div>
  );
};

export default withRouter(Header);
