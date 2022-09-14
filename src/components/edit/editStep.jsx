/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import IcoClose from '../../assest/icons/IcoClose';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

function EditStep() {
  const { steps } = mainStore((state) => state.editCacheData);
  const setEditCacheData = mainStore((state) => state.setEditCacheData);

  const handleStepInput = (e) => {
    const editTarget = e.target.id.split('editStepInp')[1];
    const newStepList = [...steps.values];
    newStepList.splice(Number(editTarget) - 1, 1, e.target.value);
    setEditCacheData({ steps: { ...steps, values: newStepList } });
  };

  const handleAddStepButton = () => {
    // limit of adding items
    if (steps.values.length >= 25) return;
    const newStepList = [...steps.values, ''];
    setEditCacheData({ steps: { ...steps, number: steps.number += 1, values: newStepList } });
  };

  const handleDeleteStep = (e) => {
    const delTarget = e.target.id.split('delTipInp')[1];
    const newStepList = [...steps.values];
    newStepList.splice(Number(delTarget) - 1, 1);
    setEditCacheData({ steps: { number: steps.number -= 1, values: newStepList } });
  };

  return (
    <Flex
      data-testid="editSteps"
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
          '& svg': {
            fill: '$onPrimary500',
            transform: 'rotate(45deg)',
            '&:hover': {
              fill: '$onPrimary',
            },
          },
        }}
      >
        {`Steps (${steps.values.length}) `}
        <IcoClose
          width="15"
          height="15"
          dataTest="editAddStep"
          id="editAddStep"
          event={handleAddStepButton}
        />
      </Text>
      <Flex
        dir="column"
        css={{
          marginTop: '$2',
          '& > label': {
            headline6: '400',
            color: '$onBg700',
            marginBottom: '4px',
          },
          '& >p': {
            marginBottom: '$2',
          },
        }}
      >

        {steps.values.map((step, index) => (
          <Flex dir="column" key={index}>
            <Text
              type="bgColorHeadSecondary"
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&:hover': {
                  '& svg': {
                    display: steps.values.length === 1 ? 'none' : 'flex',
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
              key={`editStepInp${index + 1}`}
              id={`editStepInp${index + 1}`}
              data-testid={`editStepInp${index + 1}`}
              value={step}
              css={{
                marginBottom: '$6',
              }}
              whichType="text"
              placeholder="Enter your Step"
            />
          </Flex>
        ))}

      </Flex>
    </Flex>
  );
}

export default EditStep;
