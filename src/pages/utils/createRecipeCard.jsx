import React from 'react';
import RecipeCard from '../../components/global/recipeCard';

const createRecipeCard = (cardType, data) => {
  const itemList = data.map((value) => (
    <RecipeCard cardType={cardType} data={value} />
  ));

  return itemList;
};

export default createRecipeCard;
