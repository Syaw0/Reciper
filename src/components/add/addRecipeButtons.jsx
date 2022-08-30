import React from 'react';
import IcoArrowRight from '../../assest/icons/IcoArrowRight';
import mainStore from '../../store/mainStore';
import Button from '../../styles/styledComponents/button';
import Flex from '../../styles/styledComponents/flex';

function AddRecipeButtons() {
  const currentStep = mainStore((state) => state.currentStep);
  const setCurrentStep = mainStore((state) => state.setCurrentStep);

  const nextButtonHandler = () => {
    if (currentStep === 5) {
      // reach to end of steps
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousButtonHandler = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Flex
      justify={currentStep === 1 ? 'end' : 'between'}
      css={{
        margin: '$6 0px',
        '& button': {
          padding: '6px $3',
        },
      }}
    >
      {currentStep !== 1
      && (
      <Button
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
