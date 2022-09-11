import React from 'react';
import RecipeCard from '../../components/global/recipeCard';
import mainStore from '../../store/mainStore';

const createHomeRecipeCard = (cardType, title) => {
  const cache = mainStore.getState().homeCacheData;

  const itemList = cache[title].map((value) => (
    <RecipeCard cardType={cardType} data={value} />
  ));

  return itemList;
};

export default createHomeRecipeCard;
