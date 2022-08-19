/* eslint-disable import/extensions */
import React from 'react';
import Head from './components/head/head';
import gCss from './styles/globalCss.js';
import Flex from './styles/styledComponents/flex';
import mainStore from './store/mainStore';
import Home from './pages/home';
import Add from './pages/add';
import OrderList from './pages/orderList';

function App() {
  const currentPage = mainStore((state) => state.currentPage);
  gCss();
  return (
    <Flex
      dir="column"
      css={{
        padding: '0 $15',

      }}
    >
      <Head />
      <Flex>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'Add Recipe' && <Add />}
        {currentPage === 'Category' && <OrderList />}
      </Flex>
    </Flex>
  );
}

export default App;
