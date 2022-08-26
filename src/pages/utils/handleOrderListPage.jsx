/* eslint-disable import/no-cycle */
import React from 'react';
import RecipeCard from '../../components/global/recipeCard';
import mainStore from '../../store/mainStore';

const handleOrderListPage = () => {
  const { currentPage, setCurrentOrderList } = mainStore.getState();
  if (currentPage === 'recipeCategory') {
    setCurrentOrderList([<RecipeCard cardType="normal" />, <RecipeCard cardType="normal" />, <RecipeCard cardType="normal" />, <RecipeCard cardType="normal" />, <RecipeCard cardType="normal" />, <RecipeCard cardType="normal" />]);
  } else {
    setCurrentOrderList([<RecipeCard cardType="category" />, <RecipeCard cardType="category" />, <RecipeCard cardType="category" />, <RecipeCard cardType="category" />, <RecipeCard cardType="category" />, <RecipeCard cardType="category" />]);
  }
};

export default handleOrderListPage;
