/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

function AddStep4() {
  const tipLimit = [1, 2, 3, 4, 5, 6, 7];
  const [tipNumber, setTipNumber] = useState(1);
  const tipItemLists = [];
  for (let i = 1; i !== tipNumber + 1; i += 1) {
    tipItemLists.push(
      <>
        <Text type="bgColorHeadSecondary">{`Tip ${i}`}</Text>
        <Input
          css={{
            marginBottom: '$6',
          }}
          whichType="text"
          placeholder="Enter your Tip"
        />
      </>,
    );
  }

  const handleSelectChange = (e) => {
    setTipNumber(Number(e.target.value));
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
        let`s add Tips

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

        <label htmlFor="addRecipeMaterialNumber">How Many Steps This Tips Need ?</label>
        <Input
          css={{
            marginBottom: '$5',
          }}
          onChange={handleSelectChange}
          id="addRecipeMaterialNumber"
          whichType="select"
          as="select"
        >
          {tipLimit.map((number) => (
            <option value={number}>{number}</option>
          ))}
        </Input>

        {tipItemLists}

      </Flex>
    </Flex>
  );
}

export default AddStep4;
