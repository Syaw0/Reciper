import React from 'react';
import AddRecipeBreads from '../components/add/addRecipeBreads';
import AddRecipeButtons from '../components/add/addRecipeButtons';
import AddRecipeHead from '../components/add/addRecipeHead';
import AddStep1 from '../components/add/addStep1';
import AddStep2 from '../components/add/addStep2';
import AddStep3 from '../components/add/addStep3';
import AddStep4 from '../components/add/addStep4';
import AddStep5 from '../components/add/addStep5';
import mainStore from '../store/mainStore';
import Flex from '../styles/styledComponents/flex';

function Add() {
  const currentStep = mainStore((state) => state.currentStep);
  return (
    <Flex
      dir="column"
      justify="center"
      align="start"
      data-testid="addPage"
      css={{
        width: '70%',
        height: '100%',

      }}
    >

      <AddRecipeHead />
      <AddRecipeBreads />
      {currentStep === 1 && <AddStep1 />}
      {currentStep === 2 && <AddStep2 />}
      {currentStep === 3 && <AddStep3 />}
      {currentStep === 4 && <AddStep4 />}
      {currentStep === 5 && <AddStep5 />}

      <AddRecipeButtons />
    </Flex>
  );
}

export default Add;
