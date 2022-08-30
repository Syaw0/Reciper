/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

const addStep2 = () => {
  const materialLimit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const [materialNumber, setMaterialNumber] = useState(1);
  const materialItemLists = [];
  for (let i = 1; i !== materialNumber + 1; i += 1) {
    materialItemLists.push(
      <>
        <Text type="bgColorHeadSecondary">{`Material ${i}`}</Text>
        <Input
          css={{
            marginBottom: '$6',
          }}
          whichType="text"
          placeholder="Enter your Material"
        />
      </>,
    );
  }

  const handleSelectChange = (e) => {
    setMaterialNumber(Number(e.target.value));
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
        let`s add Materials

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

        <label htmlFor="addRecipeMaterialNumber">How Many Material This Recipe Need ?</label>
        <Input
          css={{
            marginBottom: '$5',
          }}
          onChange={handleSelectChange}
          id="addRecipeMaterialNumber"
          whichType="select"
          as="select"
        >
          {materialLimit.map((number) => (
            <option value={number}>{number}</option>
          ))}
        </Input>

        {materialItemLists}

      </Flex>
    </Flex>
  );
};

export default addStep2;
