/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

const addStep3 = () => {
  const stepLimit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const [stepNumber, setStepNumber] = useState(1);
  const stepItemLists = [];
  for (let i = 1; i !== stepNumber + 1; i += 1) {
    stepItemLists.push(
      <>
        <Text type="bgColorHeadSecondary">{`Step ${i}`}</Text>
        <Input
          css={{
            marginBottom: '$6',
          }}
          whichType="text"
          placeholder="Enter your Step"
        />
      </>,
    );
  }

  const handleSelectChange = (e) => {
    setStepNumber(Number(e.target.value));
  };

  return (
    <Flex
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
        let`s add Steps

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

        <label htmlFor="addRecipeMaterialNumber">How Many Steps This Recipe Need ?</label>
        <Input
          css={{
            marginBottom: '$5',
          }}
          onChange={handleSelectChange}
          id="addRecipeMaterialNumber"
          whichType="select"
          as="select"
        >
          {stepLimit.map((number) => (
            <option value={number}>{number}</option>
          ))}
        </Input>

        {stepItemLists}

      </Flex>
    </Flex>
  );
};

export default addStep3;
