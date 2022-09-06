import React from 'react';
import IcoArrowRight from '../../assest/icons/IcoArrowRight';
import mainStore from '../../store/mainStore';
import stepValidator from '../../store/utils/stepValidator';
import Button from '../../styles/styledComponents/button';
import Flex from '../../styles/styledComponents/flex';
import editRecipeAndSend from '../../utils/editRecipeAndSend';

function EditRecipeButtons() {
  const editCurrentMsg = mainStore((state) => state.editCurrentMsg);
  const setCurrentFloat = mainStore((state) => state.setCurrentFloat);
  const setTextValue = mainStore((state) => state.setTextValue);
  const setIsFirstNav = mainStore((state) => state.setIsFirstNav);
  const setToggleFloat = mainStore((state) => state.setToggleFloat);

  const editButtonHandle = () => {
    if (stepValidator('editPage')) {
      editRecipeAndSend();
    }
  };

  const cancelButtonHandle = () => {
    setCurrentFloat('cancel Editing');
    setTextValue({ alert: 'You Are Leaving during Edit this recipe?', no: 'Dont leave', yes: 'leave' });
    setIsFirstNav(false);
    setToggleFloat(true);
  };

  const isButtonsDisabled = () => editCurrentMsg in { errorMsg: '', none: '' };
  return (
    <Flex
      justify="between"
      css={{
        margin: '$6 0px',
        '& button': {
          padding: '6px $3',
        },
        '@bp3': {
          '& button': {
            padding: '6px $1',
          },
        },
      }}
    >
      <Button
        disabled={!isButtonsDisabled()}
        data-testid="editCancelButton"
        onClick={cancelButtonHandle}
        type="shadow"
        css={{
          color: '$primary',
          '&:hover': {
            color: '$primary500',
          },
        }}
      >
        Cancel

      </Button>

      <Button
        disabled={!isButtonsDisabled()}
        data-testid="editEditButton"
        onClick={editButtonHandle}
        type="primary"
        css={{
        }}
      >
        Edit Recipe
        <IcoArrowRight width="7px" height="7px" event={() => {}} />
      </Button>
    </Flex>
  );
}

export default EditRecipeButtons;
