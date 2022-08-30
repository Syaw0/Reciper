/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import fakeDb from '../../fakeData';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

function AddStep1() {
  return (
    <Flex
      dir="column"
      css={{
        marginTop: '$3',
      }}
    >
      <Text css={{
        headline5_i: '500',
        marginBottom: '$3',
      }}
      >
        introduce your recipe

      </Text>
      <Flex
        dir="column"
        css={{
          '& > label': {
            headline6: '400',
            color: '$onBg700',
            marginBottom: '4px',
          },
          '& > input , & > select': {
            marginBottom: '$3',
          },
        }}
      >

        <label htmlFor="addRecipeName">Your Recipe Name</label>
        <Input
          whichType="text"
          placeholder="Recipe Name"
          id="addRecipeName"
        />

        <label htmlFor="addRecipeDescription">Short Description About Recipe</label>
        <Input
          whichType="text"
          id="addRecipeDescription"
          placeholder="short description about this recipe"
        />

        <label htmlFor="addRecipeDescription">Which Category ?</label>
        <Input id="addRecipeCategory" whichType="select" as="select">
          {fakeDb.category.map((category) => (
            <optgroup key={category} label={category.name}>
              {category.items.map((cateItems) => (
                <option key={cateItems} value={cateItems}>
                  {cateItems}
                </option>
              ))}
            </optgroup>
          ))}
        </Input>

        <label htmlFor="addRecipeDifficulty">Difficulty Level ?</label>
        <Input id="addRecipeDifficulty" whichType="select" as="select">
          <option value="easy">Easy</option>
          <option value="intermediate">Intermediate</option>
          <option value="hard">Hard</option>
        </Input>

        <label htmlFor="addRecipePublisher">Publisher Name</label>
        <Input
          whichType="text"
          id="addRecipePublisher"
          placeholder="Please enter your name"
        />

        <label htmlFor="addRecipeFile">Upload Image for This Recipe</label>
        <Input
          type="file"
          whichType="file"
          id="addRecipeFile"
          placeholder="short description about this recipe"
        />

      </Flex>
    </Flex>
  );
}

export default AddStep1;
