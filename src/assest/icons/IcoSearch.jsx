/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function IcoSearch({
  id, width, height, event, dataTest
}) {
  IcoSearch.propTypes = {
    id: PropTypes.string.isRequired,
    dataTest: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" data-testid={dataTest} id={id} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={(e) => { event(e); }}>
      <circle cx="10.5" cy="10.5" r="7.5" />
      <line x1="21" y1="21" x2="15.8" y2="15.8" />
    </svg>
  );
}

export default IcoSearch;
