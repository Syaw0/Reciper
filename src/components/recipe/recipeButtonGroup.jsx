import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import Button from '../../styles/styledComponents/button';
import IcoClose from '../../assest/icons/IcoClose';
import IcoEidt from '../../assest/icons/IcoEdit';
import IcoLike from '../../assest/icons/IcoLike';
import mainStore from '../../store/mainStore';

function RecipeButtonGroup() {
  const setCurrentPage = mainStore((state) => state.setCurrentPage);
  const setToggleFloat = mainStore((state) => state.setToggleFloat);
  const setTextValue = mainStore((state) => state.setTextValue);
  const setCurrentFloat = mainStore((state) => state.setCurrentFloat);

  const handleLikeButton = () => {
    // console.log('handlLike');
  };
  const handleEditButton = () => {
    setCurrentPage('editRecipe');
  };
  const handleDeleteButton = () => {
    setTextValue({ alert: 'Do you want to remove this recipe?', no: 'No, Save me !', yes: 'delete it' });
    setToggleFloat(true);
    setCurrentFloat('Delete Recipe');
  };
  return (
    <Flex
      justify="end"
      css={{
        marginTop: '$4',
        '& button': {
          marginLeft: '$3',
        },
        '@bp3_1': {
          flexDirection: 'column-reverse',
          '&> button:first-child': {
            padding: '4px $2',

          },
          '& button': {
            marginBottom: '$2',
            marginLeft: '0px',
          },
        },
      }}
    >
      <Button
        data-testid="recipePageDeleteButton"
        onClick={handleDeleteButton}
        type="shadow"
        css={{
          color: '$error',
          '&:hover': {
            color: '$error',
            borderBottom: '1px solid $error',
          },
          '& svg': {
            stroke: '$error',

            fill: '$error',
          },
        }}
      >
        Delete Recipe
        <IcoClose dataTest="RecipeDeleteButton" width="15px" height="15px" id="RecipeDeleteButton" event={() => {}} />
      </Button>

      <Button
        data-testid="recipePageEditButton"
        onClick={handleEditButton}
        type="outline"
        css={{
          padding: '4px $2',
        }}
      >
        Edit Recipe
        <IcoEidt dataTest="RecipeDeleteButton" width="15px" height="15px" id="RecipeDeleteButton" event={() => {}} />
      </Button>

      <Button
        floatInfo="futureFeature"
        onClick={handleLikeButton}
        type="primary"
        css={{
          padding: '4px $2',
        }}
      >
        Like Recipe
        <IcoLike dataTest="RecipeDeleteButton" width="15px" height="15px" id="RecipeDeleteButton" event={() => {}} />
      </Button>

    </Flex>
  );
}

export default RecipeButtonGroup;
