/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import fakeDb from '../../fakeData';
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

      default:
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

      default:
        break;
    }
  };

  const fileInputHandle = (e) => {
    setCacheData({ step1: { ...step1, imgFile: e.target.value } });
  };

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
          value={step1.recipeName}
          onChange={(e) => { textInputHandle(e, 'recipeName'); }}
          whichType="text"
          placeholder="Recipe Name"
          id="addRecipeName"
        />
        <label htmlFor="addRecipeDescription">Short Description About Recipe</label>
        <Input
          value={step1.recipeDes}
          onChange={(e) => { textInputHandle(e, 'recipeDes'); }}
          whichType="text"
          id="addRecipeDescription"
          placeholder="short description about this recipe"
        />

        <label htmlFor="addRecipeDescription">Which Category ?</label>
        <Input
          value={step1.category}
          onChange={(e) => { selectInputHandle(e, 'category'); }}
          id="addRecipeCategory"
          whichType="select"
          as="select"
        >
          {fakeDb.category.map((category) => (
            <optgroup key={category.name} label={category.name}>
              {category.items.map((cateItems) => (
                <option key={cateItems} value={cateItems}>
                  {cateItems}
                </option>
              ))}
            </optgroup>
          ))}
        </Input>

        <label htmlFor="addRecipeDifficulty">Difficulty Level ?</label>
        <Input
          value={step1.difficulty}
          onChange={(e) => { selectInputHandle(e, 'difficulty'); }}
          id="addRecipeDifficulty"
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
          placeholder="Please enter your name"
        />

        <label htmlFor="addRecipeFile">Upload Image for This Recipe</label>
        <Input
          onChange={fileInputHandle}
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
