import React from 'react';
import RecipeCard from '../components/global/recipeCard';
import ItemIntroducer from '../components/home/itemIntroducer';
import Flex from '../styles/styledComponents/flex';

function Home() {
  const fakelist = [<RecipeCard cardType="normal" />, <RecipeCard cardType="normal" />, <RecipeCard cardType="normal" />, <RecipeCard cardType="normal" />];

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
      <ItemIntroducer title="Trends Recipes" items={fakelist} />
      <ItemIntroducer title="New Recipes" items={fakelist} />
      <ItemIntroducer title="User Suggestion" items={fakelist} />
      <ItemIntroducer title="Top Categories" items={[<RecipeCard cardType="category" />, <RecipeCard cardType="category" />, <RecipeCard cardType="category" />, <RecipeCard cardType="category" />]} />
    </Flex>
  );
}

export default Home;
