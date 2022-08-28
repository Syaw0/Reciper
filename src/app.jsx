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
import Recipe from './pages/recipe';
import Float from './pages/float';

function App() {
  const currentPage = mainStore((state) => state.currentPage);
  const toggleFloat = mainStore((state) => state.toggleFloat);
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
        '& > div:not([id="floatPage"])': {
          filter: toggleFloat ? 'blur(10px)' : 'blur(0px)',
        },
        '@bp1': {
          padding: '0 $8',
        },
        '@bp2': {
          padding: '0 $4',
        },
        '@bp4': {
          padding: '0 $2',
        },
      }}
    >
      <Head />
      <Flex align="start" justify="center">
        {currentPage === 'Home' && <Home />}
        {currentPage === 'Add Recipe' && <Add />}
        {currentPage === 'Category' && <OrderList />}
        {currentPage === 'Searching' && <OrderList />}
        {currentPage === 'Recipe' && <Recipe />}
        {currentPage === 'Trends Recipes' && <OrderList />}
        {currentPage === 'New Recipes' && <OrderList />}
        {currentPage === 'User Suggestion' && <OrderList />}
        {currentPage === 'Top Categories' && <OrderList />}
        {currentPage === 'recipeCategory' && <OrderList />}
        {currentPage === 'editRecipe' && <h1>Editing</h1>}

      </Flex>
      <Footer />

      {toggleFloat && <Float /> }
    </Flex>
  );
}

export default App;
