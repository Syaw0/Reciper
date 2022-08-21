/* eslint-disable import/extensions */
import React from 'react';
import Head from './components/head/head';
import gCss from './styles/globalCss.js';
import Flex from './styles/styledComponents/flex';
import mainStore from './store/mainStore';
import Home from './pages/home';
import Add from './pages/add';
import OrderList from './pages/orderList';
import Footer from './components/footer/footer';

function App() {
  const currentPage = mainStore((state) => state.currentPage);
  gCss();
  return (
    <Flex
      id="wrapper"
      dir="column"
      justify="between"
      align="center"
      css={{
        position: 'relative',
        padding: '0 $15',
        '@bp1': {
          padding: '0 $8',
        },
        '@bp2': {
          padding: '0 $4',
        },

      }}
    >
      <Head />
      <Flex>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'Add Recipe' && <Add />}
        {currentPage === 'Category' && <OrderList />}
        {currentPage === 'Searching' && <OrderList />}
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
