/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function IcoTick({
  width, height, dataTest,
}) {
  IcoTick.propTypes = {
    dataTest: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  };
  return (
    <svg data-testid={dataTest} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z" />
    </svg>
  );
}

export default IcoTick;
