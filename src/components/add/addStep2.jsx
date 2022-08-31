/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import mainStore from '../../store/mainStore';
import Button from '../../styles/styledComponents/button';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

const addStep2 = () => {
  const { step2 } = mainStore((state) => state.cacheData);
  const setCacheData = mainStore((state) => state.setCacheData);
  const handleMaterialInput = () => {
  };
  const handleAddMaterialButton = () => {
    const newMaterialList = [...step2.materials, ''];
    setCacheData({ step2: { ...step2, number: step2.number += 1, materials: newMaterialList } });
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

        <Button
          type="outline"
          onClick={handleAddMaterialButton}
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
          }}
        >
          Add Material
        </Button>

        {step2.materials.map((material, index) => (
          <>
            <Text type="bgColorHeadSecondary">{`Material ${index + 1}`}</Text>
            <Input
              onChange={handleMaterialInput}
              key={`addMaterialInp ${index}`}
              id={`addMaterialInp ${index}`}
              value={material}
              css={{
                marginBottom: '$6',
              }}
              whichType="text"
              placeholder="Enter your Material"
            />
          </>
        ))}

      </Flex>
    </Flex>
  );
};

export default addStep2;
