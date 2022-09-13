/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
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
import Edit from './pages/edit';
import Loader from './components/global/loader';
import darkTheme from './styles/darkTheme';
import { theme } from './styles/@stitches.config';

function App() {
  const currentPage = mainStore((state) => state.currentPage);
  const toggleFloat = mainStore((state) => state.toggleFloat);
  const isLoaderEnable = mainStore((state) => state.isLoaderEnable);
  const setCurrentPage = mainStore((state) => state.setCurrentPage);
  const currentTheme = mainStore((state) => state.currentTheme);

  useEffect(() => {
    setCurrentPage('Home');
  }, []);

  gCss();
  return (
    <Flex
      className={currentTheme === 'light' ? theme : darkTheme}
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
      <Flex dir="column" align="center" justify="start">
        {isLoaderEnable && <Loader />}
        {currentPage === 'Home' && !isLoaderEnable && <Home />}
        {currentPage === 'Add Recipe' && !isLoaderEnable && <Add />}
        {currentPage === 'Category' && !isLoaderEnable && <OrderList />}
        {currentPage === 'Searching' && !isLoaderEnable && <OrderList />}
        {currentPage === 'Recipe' && !isLoaderEnable && <Recipe />}
        {currentPage === 'Trends Recipes' && !isLoaderEnable && <OrderList />}
        {currentPage === 'New Recipes' && !isLoaderEnable && <OrderList />}
        {currentPage === 'User Suggestion' && !isLoaderEnable && <OrderList />}
        {currentPage === 'Top Categories' && !isLoaderEnable && <OrderList />}
        {currentPage === 'recipeCategory' && !isLoaderEnable && <OrderList />}
        {currentPage === 'editRecipe' && !isLoaderEnable && <Edit />}
      </Flex>
      <Footer />

      {toggleFloat && <Float /> }
    </Flex>
  );
}

export default App;
