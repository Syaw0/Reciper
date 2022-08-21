import React from 'react';
import RecipeCard from '../components/global/recipeCard';
import ItemIntroducer from '../components/home/itemIntroducer';
import Flex from '../styles/styledComponents/flex';

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
      <ItemIntroducer title="Trends Recipes" items={[<RecipeCard /> , <RecipeCard /> , <RecipeCard /> , <RecipeCard />]} />
      <ItemIntroducer title="New Recipes" items={[]} />
      <ItemIntroducer title="User Suggestion" items={[]} />
      <ItemIntroducer title="Top Categories" items={[]} />
    </Flex>
  );
}

export default Home;
