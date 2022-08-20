/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function IcoMenu({
  id, width, height, event, dataTest,
}) {
  IcoMenu.propTypes = {
    id: PropTypes.string.isRequired,
    dataTest: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
  };
  return (
    <svg data-testid={dataTest} id={id} width={width} height={height} onClick={(e) => { event(e); }} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0.5 1.75C0.5 1.28587 0.658035 0.840752 0.93934 0.512563C1.22064 0.184375 1.60218 0 2 0H20C20.3978 0 20.7794 0.184375 21.0607 0.512563C21.342 0.840752 21.5 1.28587 21.5 1.75C21.5 2.21413 21.342 2.65925 21.0607 2.98744C20.7794 3.31563 20.3978 3.5 20 3.5H2C1.60218 3.5 1.22064 3.31563 0.93934 2.98744C0.658035 2.65925 0.5 2.21413 0.5 1.75ZM0.5 10.5C0.5 10.0359 0.658035 9.59075 0.93934 9.26256C1.22064 8.93437 1.60218 8.75 2 8.75H20C20.3978 8.75 20.7794 8.93437 21.0607 9.26256C21.342 9.59075 21.5 10.0359 21.5 10.5C21.5 10.9641 21.342 11.4092 21.0607 11.7374C20.7794 12.0656 20.3978 12.25 20 12.25H2C1.60218 12.25 1.22064 12.0656 0.93934 11.7374C0.658035 11.4092 0.5 10.9641 0.5 10.5ZM9.5 19.25C9.5 18.7859 9.65804 18.3408 9.93934 18.0126C10.2206 17.6844 10.6022 17.5 11 17.5H20C20.3978 17.5 20.7794 17.6844 21.0607 18.0126C21.342 18.3408 21.5 18.7859 21.5 19.25C21.5 19.7141 21.342 20.1592 21.0607 20.4874C20.7794 20.8156 20.3978 21 20 21H11C10.6022 21 10.2206 20.8156 9.93934 20.4874C9.65804 20.1592 9.5 19.7141 9.5 19.25Z" fill="#1A1C1A" fillOpacity="0.9" />
    </svg>
  );
}

export default IcoMenu;
