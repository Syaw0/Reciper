import React from 'react';
import RecipeCard from '../components/global/recipeCard';
import ItemIntroducer from '../components/home/itemIntroducer';
import RecipeCheaps from '../components/recipe/recipeCheaps';
import RecipeCookSteps from '../components/recipe/recipeCookSteps';
import RecipeMaterial from '../components/recipe/recipeMaterial';
import RecipeCookTips from '../components/recipe/recipeCookTips';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';
import RecipeButtonGroup from '../components/recipe/recipeButtonGroup';
import RecipeHeadInfo from '../components/recipe/recipeHeadInfo';

function Recipe() {
  const fakeInfoData = [
    { 'Min Perpetration': '15min' },
    { 'Min Cook': '15min' },
    { Level: 'Easy' },
    { Steps: '3' },
    { Material: '5' },
  ];
  const fakeData = {
    needItem: ['2 pounds lean ground beef', '1 (1 ounce) package ranch dressing mix', '1 egg, lightly beaten'],
    cookStep: ['Preheat the grill for high heat.', 'In a bowl, mix the ground beef, ranch dressing mix, egg, crushed crackers, and onion. Form into hamburger patties.', 'Lightly oil the grill grate. Place patties on the grill, and cook 5 minutes per side, or until well done.'],
    tips: ['This Food per Serve Have: 268 calories; protein 23.1g; carbohydrates 7.7g; fat 15.2g; cholesterol 97.6mg; sodium 392.7mg.'],
  };
  const recipeLikeList = [<RecipeCard cardType="normal" />, <RecipeCard cardType="normal" />, <RecipeCard cardType="normal" />, <RecipeCard cardType="normal" />];
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
        backgroundImage: `url(${'https://user-images.githubusercontent.com/90524474/185795801-545f94fa-8d62-4d71-a365-289c25645b0b.jpg'})`,
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

        <RecipeHeadInfo cheapsData={fakeInfoData} />

        <RecipeMaterial material={fakeData.needItem} />

        <RecipeCookSteps steps={fakeData.cookStep} />

        <RecipeCookTips tips={fakeData.tips} />

        <RecipeButtonGroup />

      </Flex>

      <ItemIntroducer title="May You Like This !" items={recipeLikeList} />

    </Flex>
  );
}

export default Recipe;
