import React from 'react';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import Loader from '../global/loader';
import AddStep5ErrorMsg from './addStep5ErrorMsg ';
import AddStep5FinalMsg from './addStep5FinalMsg';
import AddStep5SuccessMsg from './addStep5SuccessMsg';

function AddStep5() {
  const finalStepComponent = mainStore((state) => state.finalStepComponent);
  return (
    <Flex
      data-testid="addStep5"
      dir="column"
      justify="center"
      align="center"
      css={{
        margin: '$10 0px',
      }}
    >
      {finalStepComponent === 'finalMsg' && <AddStep5FinalMsg />}
      {finalStepComponent === 'loader' && <Loader />}
      {finalStepComponent === 'errorMsg' && <AddStep5ErrorMsg />}
      {finalStepComponent === 'successMsg' && <AddStep5SuccessMsg />}

    </Flex>
  );
}

export default AddStep5;
