/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function IcoArrowRight({
  width, height, event,
}) {
  IcoArrowRight.propTypes = {
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
  };
  return (
    <svg width={width} height={height + 3} onClick={(e) => { event(e); }} viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0.789247 9.70685C0.601541 9.51908 0.496094 9.26446 0.496094 8.99896C0.496094 8.73347 0.601541 8.47884 0.789247 8.29108L4.08637 4.99396L0.789247 1.69683C0.606861 1.50799 0.50594 1.25508 0.508221 0.992552C0.510502 0.730027 0.615803 0.4789 0.801443 0.29326C0.987084 0.10762 1.23821 0.00231912 1.50074 3.78498e-05C1.76326 -0.00224342 2.01618 0.0986775 2.20502 0.281064L6.21002 4.28607C6.39773 4.47383 6.50318 4.72846 6.50318 4.99396C6.50318 5.25945 6.39773 5.51408 6.21002 5.70184L2.20502 9.70685C2.01725 9.89455 1.76263 10 1.49713 10C1.23164 10 0.977009 9.89455 0.789247 9.70685Z" fill="#1A1C1A" fillOpacity="0.6" />
    </svg>
  );
}

export default IcoArrowRight;
