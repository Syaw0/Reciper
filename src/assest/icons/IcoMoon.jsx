/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function IcoMoon({
  id, width, height, event, dataTest,
}) {
  IcoMoon.propTypes = {
    id: PropTypes.string.isRequired,
    dataTest: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
  };
  return (
    <svg data-testid={dataTest} id={id} width={width} height={height} onClick={(e) => { event(e); }} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.2154 0.314371C9.0492 0.540321 9.0187 0.838681 9.1358 1.09354C9.6493 2.21097 9.9022 3.31549 9.9022 4.54849C9.9022 8.4234 6.63724 11.7358 2.44505 11.7358C1.99513 11.7358 1.528 11.6268 0.952747 11.4877C0.669557 11.4192 0.371957 11.5161 0.183387 11.7382C-0.0051828 11.9603 -0.0525427 12.2697 0.0609473 12.538C1.44561 15.8117 4.80801 18 8.7211 18C13.8729 18 18 13.8935 18 9C18 4.4123 14.486 0.593201 9.9355 0.00635127C9.6573 -0.0295287 9.3816 0.0884211 9.2154 0.314371ZM11.0568 1.82295C14.2042 2.79639 16.4571 5.67288 16.4571 9C16.4571 13.0095 13.053 16.4571 8.7211 16.4571C5.97499 16.4571 3.61107 15.2002 2.2318 13.2734C2.30261 13.2768 2.37373 13.2787 2.44505 13.2787C7.4577 13.2787 11.445 9.3068 11.445 4.54849C11.445 3.59161 11.3149 2.69502 11.0568 1.82295Z" />
    </svg>
  );
}

export default IcoMoon;
