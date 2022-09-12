import React from 'react';
import ItemIntroducer from '../components/home/itemIntroducer';
import RecipeCookSteps from '../components/recipe/recipeCookSteps';
import RecipeMaterial from '../components/recipe/recipeMaterial';
import RecipeCookTips from '../components/recipe/recipeCookTips';
import Flex from '../styles/styledComponents/flex';
import RecipeButtonGroup from '../components/recipe/recipeButtonGroup';
import RecipeHeadInfo from '../components/recipe/recipeHeadInfo';
import mainStore from '../store/mainStore';
import createRecipeCard from './utils/createRecipeCard';

function Recipe() {
  const recipeCacheData = mainStore((state) => state.recipeCacheData);

  const headInfo = [
    { Perpetration: recipeCacheData.metaData.prep },
    { Cook: recipeCacheData.metaData.cook },
    { Level: recipeCacheData.difficulty },
    { Steps: recipeCacheData.steps.length },
    { Material: recipeCacheData.materials.length },
    { serving: recipeCacheData.metaData.servings },
  ];
  return (
    <Flex
      data-testid="recipePage"
      justify="center"
      align="center"
      dir="column"
      css={{
        '& >div:first-child , & >div:nth-child(2) ': {
          width: '65%',
          '@bp0': {
            width: '70%',
          },
          '@bp2': {
            width: '80%',
          },
          '@bp3': {
            width: '100%',
          },
        },
        '& >div:last-child': {
          marginTop: '$6',
          '& fieldset': {
            border: 'none',
          },
          '& [data-testid="itemIntroducerSeeMoreBtn"]': {
            display: 'none',
          },
        },
        margin: '$5 0',
      }}
    >

      <Flex css={{
        backgroundImage: `url(${recipeCacheData.imgUrl})`,
        bgCentering: '',
        height: '38rem',
        borderRadius: '32px',
        '@bp4': {
          height: '32rem',
        },
        '@bp5': {
          height: '25rem',
        },
      }}
      />

      <Flex
        dir="column"
        css={{
          width: '100%',
        }}
      >

        <RecipeHeadInfo cheapsData={headInfo} />

        <RecipeMaterial material={recipeCacheData.materials} />

        <RecipeCookSteps steps={recipeCacheData.steps} />

        <RecipeCookTips tips={recipeCacheData.tips} />

        <RecipeButtonGroup />

      </Flex>

      <ItemIntroducer title="May You Like This !" items={createRecipeCard('normal', recipeCacheData.similar)} />

    </Flex>
  );
}

export default Recipe;
