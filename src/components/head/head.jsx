import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import BreadCrumbs from './breadcrumbs';
import Header from './header';

function Head() {
  return (
    <Flex dir="column">
      <Header />
      <BreadCrumbs />
    </Flex>
  );
}

export default Head;
