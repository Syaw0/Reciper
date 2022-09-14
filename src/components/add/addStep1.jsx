/* eslint-disable default-case */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import categories from '../../categories';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

function AddStep1() {
  const { step1 } = mainStore((state) => state.cacheData);
  const setCacheData = mainStore((state) => state.setCacheData);

  const textInputHandle = (e, type) => {
    switch (type) {
      case 'recipeName':
        setCacheData({ step1: { ...step1, recipeName: e.target.value } });
        // setDataStep1((state) => ({ ...state,  }));
        break;
      case 'recipeDes':
        setCacheData({ step1: { ...step1, recipeDes: e.target.value } });

        break;
      case 'publisherName':
        setCacheData({ step1: { ...step1, publisherName: e.target.value } });
        break;

      case 'serving':
        setCacheData({ step1: { ...step1, serving: e.target.value } });
        break;

      case 'prepTime':
        setCacheData({ step1: { ...step1, prepTime: e.target.value } });
        break;

      case 'cookTime':
        setCacheData({ step1: { ...step1, cookTime: e.target.value } });
        break;
    }
  };

  const selectInputHandle = (e, type) => {
    switch (type) {
      case 'category':
        setCacheData({ step1: { ...step1, category: e.target.value } });
        break;

      case 'difficulty':
        setCacheData({ step1: { ...step1, difficulty: e.target.value } });
        break;
    }
  };

  const fileInputHandle = (e) => {
    setCacheData({ step1: { ...step1, imgFile: e.target.files[0] } });
  };

  return (
    <Flex
      data-testid="addStep1"
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
          value={step1.recipeName}
          onChange={(e) => { textInputHandle(e, 'recipeName'); }}
          whichType="text"
          placeholder="Recipe Name"
          id="addRecipeName"
          data-testid="addRecipeName"
        />
        <label htmlFor="addRecipeDescription">Short Description About Recipe</label>
        <Input
          value={step1.recipeDes}
          onChange={(e) => { textInputHandle(e, 'recipeDes'); }}
          whichType="text"
          id="addRecipeDescription"
          data-testid="addRecipeDescription"
          placeholder="Short description about this recipe"
        />

        <label htmlFor="addRecipeDescription">Which Category ?</label>
        <Input
          value={step1.category}
          onChange={(e) => { selectInputHandle(e, 'category'); }}
          id="addRecipeCategory"
          data-testid="addRecipeCategory"
          whichType="select"
          as="select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Input>

        <label htmlFor="addRecipeDifficulty">Difficulty Level ?</label>
        <Input
          value={step1.difficulty}
          onChange={(e) => { selectInputHandle(e, 'difficulty'); }}
          id="addRecipeDifficulty"
          data-testid="addRecipeDifficulty"
          whichType="select"
          as="select"
        >
          <option value="easy">Easy</option>
          <option value="intermediate">Intermediate</option>
          <option value="hard">Hard</option>
        </Input>

        <label htmlFor="addRecipePublisher">Publisher Name</label>
        <Input
          value={step1.publisherName}
          onChange={(e) => { textInputHandle(e, 'publisherName'); }}
          whichType="text"
          id="addRecipePublisher"
          data-testid="addRecipePublisher"
          placeholder="Please enter your name"
        />

        <label htmlFor="addRecipeServing">Serving</label>
        <Input
          min={1}
          type="number"
          value={step1.serving}
          onChange={(e) => { textInputHandle(e, 'serving'); }}
          whichType="text"
          id="addRecipeServing"
          data-testid="addRecipeServing"
          placeholder="serve for how many person? like 2 "
        />

        <label htmlFor="addRecipePrepTime">Preparation Time</label>
        <Input
          type="number"
          min={1}
          value={step1.prepTime}
          onChange={(e) => { textInputHandle(e, 'prepTime'); }}
          whichType="text"
          id="addRecipePrepTime"
          data-testid="addRecipePrepTime"
          placeholder="add preparation time for this recipe like 30min (just number)"
        />

        <label htmlFor="addRecipeCookTime">Cook Time</label>
        <Input
          min={1}
          type="number"
          value={step1.cookTime}
          onChange={(e) => { textInputHandle(e, 'cookTime'); }}
          whichType="text"
          id="addRecipeCookTime"
          data-testid="addRecipeCookTime"
          placeholder="add preparation time for this recipe like 80min (just number)"
        />

        <label htmlFor="addRecipeFile">
          Upload Image for This Recipe
        </label>
        <Input
          onChange={fileInputHandle}
          type="file"
          whichType="file"
          id="addRecipeFile"
          data-testid="addRecipeFile"
          accept="image/png, image/jpeg, image/jpg"
          placeholder="short description about this recipe"
        />

      </Flex>
    </Flex>
  );
}

export default AddStep1;
