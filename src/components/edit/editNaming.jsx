/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import categories from '../../categories';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

function EditNaming() {
  const { naming } = mainStore((state) => state.editCacheData);
  const setEditCacheData = mainStore((state) => state.setEditCacheData);

  const textInputHandle = (e, type) => {
    switch (type) {
      case 'recipeName':
        setEditCacheData({ naming: { ...naming, recipeName: e.target.value } });
        break;
      case 'recipeDes':
        setEditCacheData({ naming: { ...naming, recipeDes: e.target.value } });

        break;
      case 'publisherName':
        setEditCacheData({ naming: { ...naming, publisherName: e.target.value } });
        break;

      case 'serving':
        setEditCacheData({ naming: { ...naming, serving: e.target.value } });
        break;

      case 'prepTime':
        setEditCacheData({ naming: { ...naming, prepTime: e.target.value } });
        break;

      case 'cookTime':
        setEditCacheData({ naming: { ...naming, cookTime: e.target.value } });
        break;

      default:
        break;
    }
  };

  const selectInputHandle = (e, type) => {
    switch (type) {
      case 'category':
        setEditCacheData({ naming: { ...naming, category: e.target.value } });
        break;

      case 'difficulty':
        setEditCacheData({ naming: { ...naming, difficulty: e.target.value } });
        break;

      default:
        break;
    }
  };

  const fileInputHandle = (e) => {
    setEditCacheData({ naming: { ...naming, imgFile: e.target.files[0] } });
  };

  return (
    <Flex
      data-testid="editNaming"
      dir="column"
      css={{
        marginTop: '$6',
      }}
    >
      <Text
        type="bgColorHeadPrimary"
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Naming
      </Text>
      <Flex
        dir="column"
        css={{
          marginTop: '$1',
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

        <label htmlFor="editRecipeName">Your Recipe Name</label>
        <Input
          value={naming.recipeName}
          onChange={(e) => { textInputHandle(e, 'recipeName'); }}
          whichType="text"
          placeholder="Recipe Name"
          id="editRecipeName"
          data-testid="editRecipeName"
        />
        <label htmlFor="editRecipeDescription">Short Description About Recipe</label>
        <Input
          value={naming.recipeDes}
          onChange={(e) => { textInputHandle(e, 'recipeDes'); }}
          whichType="text"
          id="editRecipeDescription"
          data-testid="editRecipeDescription"
          placeholder="Short description about this recipe"
        />

        <label htmlFor="editRecipeCategory">Which Category ?</label>
        <Input
          value={naming.category}
          onChange={(e) => { selectInputHandle(e, 'category'); }}
          id="editRecipeCategory"
          whichType="select"
          as="select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Input>

        <label htmlFor="editRecipeDifficulty">Difficulty Level ?</label>
        <Input
          value={naming.difficulty}
          onChange={(e) => { selectInputHandle(e, 'difficulty'); }}
          id="editRecipeDifficulty"
          whichType="select"
          as="select"
        >
          <option value="easy">Easy</option>
          <option value="intermediate">Intermediate</option>
          <option value="hard">Hard</option>
        </Input>

        <label htmlFor="editRecipePublisher">Publisher Name</label>
        <Input
          value={naming.publisherName}
          onChange={(e) => { textInputHandle(e, 'publisherName'); }}
          whichType="text"
          id="editRecipePublisher"
          data-testid="editRecipePublisher"
          placeholder="Please enter your name"
        />

        <label htmlFor="editRecipeServing">Serving</label>
        <Input
          min={1}
          type="number"
          value={naming.serving}
          onChange={(e) => { textInputHandle(e, 'serving'); }}
          whichType="text"
          id="editRecipeServing"
          data-testid="editRecipeServing"
          placeholder="serve for how many person? like 2 "
        />

        <label htmlFor="editRecipePrepTime">Preparation Time</label>
        <Input
          type="number"
          min={1}
          value={naming.prepTime}
          onChange={(e) => { textInputHandle(e, 'prepTime'); }}
          whichType="text"
          id="editRecipePrepTime"
          data-testid="editRecipePrepTime"
          placeholder="add preparation time for this recipe like 30min (just number)"
        />

        <label htmlFor="editRecipeCookTime">Cook Time</label>
        <Input
          min={1}
          type="number"
          value={naming.cookTime}
          onChange={(e) => { textInputHandle(e, 'cookTime'); }}
          whichType="text"
          id="editRecipeCookTime"
          data-testid="eitRecipeCookTime"
          placeholder="add preparation time for this recipe like 80min (just number)"
        />

        <label htmlFor="editRecipeFile">Upload Image for This Recipe</label>
        <Input
          onChange={fileInputHandle}
          type="file"
          whichType="file"
          id="editRecipeFile"
          data-testid="editRecipeFile"
          accept="image/png, image/jpeg, image/jpg"
          placeholder="short description about this recipe"
        />

      </Flex>
    </Flex>
  );
}

export default EditNaming;
