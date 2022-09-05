import React from 'react';
import IcoArrowRight from '../../assest/icons/IcoArrowRight';
import mainStore from '../../store/mainStore';
import addSteps from '../../store/utils/addSteps';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';

function AddRecipeBreads() {
  const currentStep = mainStore((state) => state.currentStep);
  return (
    <Flex dir="column">

      <Text
        type="bgColorHeadPrimary"
      >
        {`Step ${currentStep}`}
      </Text>

      <Flex
        justify="between"
        align="center"
        css={{
          '& svg': {
            margin: '0 $7',
            fill: '$onBg500',
            cursor: 'default',
            '@bp4': {
              margin: '0 $1',
            },
          },
          '&>p:first-child , &>p:last-child': {
            color: '$onBg400',
          },
        }}
      >
        <Text data-testid="addBreadPre">
          {addSteps[currentStep - 1] === undefined ? ' ' : addSteps[currentStep - 1]}
        </Text>
        {currentStep !== 1 && <IcoArrowRight width="7px" height="7px" event={() => {}} /> }
        <Text
          data-testid="addBreadCurrent"
          css={{
            subhead1: '600',
            textAlign: 'center',
          }}
        >
          {addSteps[currentStep]}
        </Text>
        {currentStep !== 5 && <IcoArrowRight width="7px" height="7px" event={() => {}} /> }
        <Text
          data-testid="addBreadNext"
        >
          {addSteps[currentStep + 1] === undefined ? ' ' : addSteps[currentStep + 1]}
        </Text>

      </Flex>

    </Flex>
  );
}

export default AddRecipeBreads;
