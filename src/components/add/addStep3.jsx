/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import IcoClose from '../../assest/icons/IcoClose';
import mainStore from '../../store/mainStore';
import Button from '../../styles/styledComponents/button';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

const addStep3 = () => {
  const { step3 } = mainStore((state) => state.cacheData);
  const setCacheData = mainStore((state) => state.setCacheData);

  const handleStepInput = (e) => {
    const editTarget = e.target.id.split('addStepInp')[1];
    const newStepList = [...step3.steps];
    newStepList.splice(Number(editTarget) - 1, 1, e.target.value);
    setCacheData({ step3: { ...step3, steps: newStepList } });
  };

  const handleAddStepButton = () => {
    // limit of adding items
    if (step3.steps.length >= 15) return;
    const newStepList = [...step3.steps, ''];
    setCacheData({ step3: { ...step3, number: step3.number += 1, steps: newStepList } });
  };

  const handleDeleteStep = (e) => {
    const delTarget = e.target.id.split('delTipInp')[1];
    const newStepList = [...step3.steps];
    newStepList.splice(Number(delTarget) - 1, 1);
    setCacheData({ step3: { number: step3.number -= 1, steps: newStepList } });
  };

  return (
    <Flex
      data-testid="addStep3"
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
        let`s add Steps !

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
          },
          '& >p': {
            marginBottom: '$2',
          },
        }}
      >

        <Button
          type="outline"
          onClick={handleAddStepButton}
          css={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            padding: '$1',
            marginBottom: '$4',
            '&:hover': {
              backgroundColor: '$primary200',
              color: '$primary',
            },
            '@bp4': {
              padding: '5px',
            },
          }}
        >
          Add Step
        </Button>

        {step3.steps.map((step, index) => (
          <>
            <Text
              type="bgColorHeadSecondary"
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&:hover': {
                  '& svg': {
                    display: step3.steps.length === 1 ? 'none' : 'flex',
                  },
                },
                '& svg': {
                  display: 'none',
                  fill: '$onSecondary',
                },
              }}
            >
              {`Step ${index + 1}`}
              <IcoClose
                id={`delTipInp${index + 1}`}
                width="14"
                height="14"
                event={handleDeleteStep}
                dataTest={`delStepInp${index + 1}`}
              />
            </Text>
            <Input
              onChange={handleStepInput}
              key={`addStepInp${index + 1}`}
              id={`addStepInp${index + 1}`}
              data-testid={`addStepInp${index + 1}`}
              value={step}
              css={{
                marginBottom: '$6',
              }}
              whichType="text"
              placeholder="Enter your Step"
            />
          </>
        ))}

      </Flex>
    </Flex>
  );
};

export default addStep3;
