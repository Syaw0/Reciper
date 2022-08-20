/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function IcoClose({
  id, width, height, event, dataTest,
}) {
  IcoClose.propTypes = {
    id: PropTypes.string.isRequired,
    dataTest: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
  };
  return (
    <svg data-testid={dataTest} id={id} width={width} height={height} onClick={(e) => { event(e); }} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0.812775 0.809845C1.22849 0.394114 1.9025 0.394114 2.31822 0.809845L11.501 9.99256L20.6838 0.809845C21.0994 0.394114 21.7735 0.394114 22.1891 0.809845C22.6049 1.22556 22.6049 1.89957 22.1891 2.31529L13.0065 11.4981L22.1891 20.6809C22.6049 21.0965 22.6049 21.7705 22.1891 22.1862C21.7735 22.602 21.0994 22.602 20.6838 22.1862L11.501 13.0035L2.31822 22.1862C1.9025 22.602 1.22849 22.602 0.812775 22.1862C0.397044 21.7705 0.397044 21.0965 0.812775 20.6809L9.99549 11.4981L0.812775 2.31529C0.397044 1.89957 0.397044 1.22556 0.812775 0.809845Z" fill="#1A1C1A" />
    </svg>
  );
}

export default IcoClose;
