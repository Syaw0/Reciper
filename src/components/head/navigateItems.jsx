/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../styles/styledComponents/button';

function NavigateItems({ handleNavigation }) {
  NavigateItems.propTypes = {
    handleNavigation: PropTypes.func.isRequired,
  };
  return (
    <>
      <Button data-testid="headerNavHome" onClick={handleNavigation} type="shadow">Home</Button>
      <Button data-testid="headerNavOrderList" onClick={handleNavigation} type="shadow">Category</Button>
      <Button data-testid="headerNavAdd" onClick={handleNavigation} type="shadow">Add Recipe</Button>
    </>
  );
}

export default NavigateItems;
