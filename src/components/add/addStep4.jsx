/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import IcoClose from '../../assest/icons/IcoClose';
import mainStore from '../../store/mainStore';
import Button from '../../styles/styledComponents/button';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

function AddStep4() {
  const { step4 } = mainStore((state) => state.cacheData);
  const setCacheData = mainStore((state) => state.setCacheData);

  const handleTipInput = (e) => {
    const editTarget = e.target.id.split('addTipInp')[1];
    const newTipsList = [...step4.tips];
    newTipsList.splice(Number(editTarget) - 1, 1, e.target.value);
    setCacheData({ step4: { ...step4, tips: newTipsList } });
  };

  const handleAddTipButton = () => {
    // limit of adding items
    if (step4.tips.length >= 25) return;
    const newTipsList = [...step4.tips, ''];
    setCacheData({ step4: { ...step4, number: step4.number += 1, tips: newTipsList } });
  };

  const handleDeleteTip = (e) => {
    const delTarget = e.target.id.split('delTipInp')[1];
    const newTipsList = [...step4.tips];
    newTipsList.splice(Number(delTarget) - 1, 1);
    setCacheData({ step4: { number: step4.number -= 1, tips: newTipsList } });
  };

  return (
    <Flex
      data-testid="addStep4"
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
        let`s add Tips !

      </Text>
      <Flex
        data-testid="addStep4InputHolder"
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
          onClick={handleAddTipButton}
          data-testid="addStep4AddTipButton"
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
          Add Tip
        </Button>

        {step4.tips.map((tip, index) => (
          <Flex dir="column" key={index}>
            <Text
              type="bgColorHeadSecondary"
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&:hover': {
                  '& svg': {
                    display: step4.tips.length === 1 ? 'none' : 'flex',
                  },
                },
                '& svg': {
                  display: 'none',
                  fill: '$onSecondary',
                },
              }}
            >
              {`Tip ${index + 1}`}
              <IcoClose
                id={`addTipInp${index + 1}`}
                width="14"
                height="14"
                event={handleDeleteTip}
                dataTest={`delTipInp${index + 1}`}
              />
            </Text>
            <Input
              onChange={handleTipInput}
              key={`addTipInp${index + 1}`}
              id={`addTipInp${index + 1}`}
              data-testid={`addTipInp${index + 1}`}
              value={tip}
              css={{
                marginBottom: '$6',
              }}
              whichType="text"
              placeholder="Enter your Tip"
            />
          </Flex>
        ))}

      </Flex>
    </Flex>
  );
}

export default AddStep4;
