import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import Button from '../../styles/styledComponents/button';
import IcoClose from '../../assest/icons/IcoClose';
import IcoEidt from '../../assest/icons/IcoEdit';
import IcoLike from '../../assest/icons/IcoLike';
import mainStore from '../../store/mainStore';
import transformRecipeDataToEdit from './util/transformRecipeDataToEdit';

function RecipeButtonGroup() {
  const setCurrentPage = mainStore((state) => state.setCurrentPage);
  const setToggleFloat = mainStore((state) => state.setToggleFloat);
  const setTextValue = mainStore((state) => state.setTextValue);
  const setCurrentFloat = mainStore((state) => state.setCurrentFloat);
  const setEditCacheData = mainStore((state) => state.setEditCacheData);
  const recipeCacheData = mainStore((state) => state.recipeCacheData);
  const recipeCurrentMsg = mainStore((state) => state.recipeCurrentMsg);

  const handleLikeButton = () => {
    // console.log('handlLike');
  };
  const handleEditButton = () => {
    setEditCacheData(transformRecipeDataToEdit(recipeCacheData));
    setCurrentPage('editRecipe');
  };
  const handleDeleteButton = () => {
    setTextValue({ alert: 'Do you want to remove this recipe?', no: 'No, Save me !', yes: 'delete it' });
    setToggleFloat(true);
    setCurrentFloat('Delete Recipe');
  };

  const isButtonsDisabled = () => recipeCurrentMsg in { null: '', errorMsg: '' };

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
        disabled={!isButtonsDisabled()}
        data-testid="recipePageDeleteButton"
        onClick={handleDeleteButton}
        type={isButtonsDisabled() ? 'shadow' : 'primary'}
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
          '&:disabled': {
            '& svg': {
              cursor: 'wait',
              stroke: '$onBg100',
            },
            '&:hover': {
              borderBottom: 'none',
            },
          },

        }}
      >
        Delete Recipe
        <IcoClose dataTest="RecipeDeleteButton" width="15px" height="15px" id="RecipeDeleteButton" />
      </Button>

      <Button
        disabled={!isButtonsDisabled()}
        data-testid="recipePageEditButton"
        onClick={handleEditButton}
        type={isButtonsDisabled() ? 'outline' : 'primary'}
        css={{
          padding: '4px $2',
          '&:disabled': {
            '& svg': {
              cursor: 'wait',
            },
          },
        }}
      >
        Edit Recipe
        <IcoEidt dataTest="RecipeDeleteButton" width="15px" height="15px" id="RecipeDeleteButton" />
      </Button>

      <Button
        disabled={!isButtonsDisabled()}
        floatInfo="futureFeature"
        onClick={handleLikeButton}
        type="primary"
        css={{
          padding: '4px $2',
          '&:disabled': {
            '& svg': {
              cursor: 'wait',
            },
          },
        }}
      >
        Like Recipe
        <IcoLike dataTest="RecipeDeleteButton" width="15px" height="15px" id="RecipeDeleteButton" />
      </Button>

    </Flex>
  );
}

export default RecipeButtonGroup;
