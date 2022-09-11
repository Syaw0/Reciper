import React from 'react';
import ItemIntroducer from '../components/home/itemIntroducer';
import Flex from '../styles/styledComponents/flex';
import createHomeRecipeCard from './utils/createHomeRecipeCard';

function Home() {
  return (
    <Flex
      data-testid="homePage"
      dir="column"
      css={{
        '& > fieldset': {
          margin: '$4 0',
        },
      }}
    >
      <ItemIntroducer title="Trends Recipes" items={createHomeRecipeCard('normal', 'trendRecipes')} />
      <ItemIntroducer title="New Recipes" items={createHomeRecipeCard('normal', 'newRecipes')} />
      <ItemIntroducer title="User Suggestion" items={createHomeRecipeCard('normal', 'userSuggestion')} />
      <ItemIntroducer title="Top Categories" items={createHomeRecipeCard('category', 'topCategories')} />
    </Flex>
  );
}

export default Home;
