import React from 'react';
import IcoArrowRight from '../../assest/icons/IcoArrowRight';
import mainStore from '../../store/mainStore';
import stepValidator from '../../store/utils/stepValidator';
import Button from '../../styles/styledComponents/button';
import Flex from '../../styles/styledComponents/flex';
import insertRecipeToServer from '../../utils/insertRecipe';

function AddRecipeButtons() {
  const currentStep = mainStore((state) => state.currentStep);
  const setCurrentStep = mainStore((state) => state.setCurrentStep);
  const finalStepComponent = mainStore((state) => state.finalStepComponent);

  const nextButtonHandler = () => {
    if (stepValidator(currentStep)) {
      if (currentStep === 5) {
        insertRecipeToServer();
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const previousButtonHandler = () => {
    if (stepValidator(currentStep) || currentStep === 5) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isButtonsDisabled = () => finalStepComponent in { finalMsg: '', errorMsg: '' };
  return (
    <Flex
      justify={currentStep === 1 ? 'end' : 'between'}
      css={{
        margin: '$6 0px',
        '& button': {
          padding: '6px $3',
        },
        '@bp3': {
          // flexDirection:"column-reverse"
          '& button': {
            padding: '6px $1',
          },
        },
      }}
    >
      {currentStep !== 1
      && (
      <Button
        disabled={!isButtonsDisabled()}
        data-testid="addRecipePreStageBtn"
        onClick={previousButtonHandler}
        type="shadow"
        css={{
          color: '$primary',
          '&:hover': {
            color: '$primary500',
          },
        }}
      >
        Previous Step

      </Button>
      )}

      <Button
        disabled={!isButtonsDisabled()}
        data-testid="addRecipeNextStageBtn"
        onClick={nextButtonHandler}
        type="primary"
        css={{
        }}
      >
        {currentStep === 5 ? 'Insert Recipe' : 'Next Step'}
        <IcoArrowRight width="7px" height="7px" event={() => {}} />
      </Button>
    </Flex>
  );
}

export default AddRecipeButtons;
