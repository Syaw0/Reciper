/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function IcoFacebook({
  id, width, height, event,
}) {
  IcoFacebook.propTypes = {
    id: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
  };
  return (
    <svg id={id} width={width} height={height} onClick={(e) => { event(e); }} viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.9998 0.974609C6.979 0.974609 0.416504 7.52253 0.416504 15.5871C0.416504 22.8788 5.754 28.9309 12.7248 30.0246V19.8163H9.02067V15.5871H12.7248V12.3642C12.7248 8.70378 14.8978 6.69128 18.2373 6.69128C19.8269 6.69128 21.4894 6.96836 21.4894 6.96836V10.5704H19.6519C17.8436 10.5704 17.2748 11.6934 17.2748 12.8454V15.5871H21.329L20.6728 19.8163H17.2748V30.0246C20.7113 29.4819 23.8406 27.7285 26.0976 25.0809C28.3547 22.4334 29.591 19.0662 29.5832 15.5871C29.5832 7.52253 23.0207 0.974609 14.9998 0.974609Z" />
    </svg>
  );
}

export default IcoFacebook;
