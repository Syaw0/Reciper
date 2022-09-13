import React from 'react';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import Loader from '../global/loader';
import RecipeSuccessMsg from './recipeSuccessMsg';
import RecipeErrorMsg from './recipeErrorMsg';

function RecipeMsg() {
  const recipeCurrentMsg = mainStore((state) => state.recipeCurrentMsg);
  return (
    <Flex
      dir="column"
      justify="center"
      align="center"
      css={{
        margin: '$5 0',
      }}
    >
      {recipeCurrentMsg === 'loader' && <Loader />}
      {recipeCurrentMsg === 'success' && <RecipeSuccessMsg />}
      {recipeCurrentMsg === 'errorMsg' && <RecipeErrorMsg />}

    </Flex>
  );
}

export default RecipeMsg;
