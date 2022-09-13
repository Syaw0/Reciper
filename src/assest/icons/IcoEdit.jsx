/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function IcoEidt({
  id, width, height, dataTest,
}) {
  IcoEidt.propTypes = {
    id: PropTypes.string.isRequired,
    dataTest: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  };
  return (
    <svg data-testid={dataTest} id={id} width={width} height={height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 0.591797C1.39 0.591797 0.5 1.4818 0.5 2.5918V16.5918C0.5 17.1222 0.710714 17.6309 1.08579 18.006C1.46086 18.3811 1.96957 18.5918 2.5 18.5918H16.5C17.0304 18.5918 17.5391 18.3811 17.9142 18.006C18.2893 17.6309 18.5 17.1222 18.5 16.5918V9.5918H16.5V16.5918H2.5V2.5918H9.5V0.591797H2.5ZM15.28 1.5918C15.11 1.5918 14.93 1.6618 14.8 1.7918L13.58 3.0018L16.08 5.5018L17.3 4.2918C17.56 4.0318 17.56 3.5918 17.3 3.3418L15.75 1.7918C15.62 1.6618 15.45 1.5918 15.28 1.5918ZM12.87 3.7118L5.5 11.0918V13.5918H8L15.37 6.2118L12.87 3.7118Z" />
    </svg>
  );
}

export default IcoEidt;
