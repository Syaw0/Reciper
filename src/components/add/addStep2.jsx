/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import IcoClose from '../../assest/icons/IcoClose';
import mainStore from '../../store/mainStore';
import Button from '../../styles/styledComponents/button';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

const addStep2 = () => {
  const { step2 } = mainStore((state) => state.cacheData);
  const setCacheData = mainStore((state) => state.setCacheData);

  const handleMaterialInput = (e) => {
    const editTarget = e.target.id.split('addMaterialInp')[1];
    const newMaterialList = [...step2.materials];
    newMaterialList.splice(Number(editTarget) - 1, 1, e.target.value);
    setCacheData({ step2: { ...step2, materials: newMaterialList } });
  };

  const handleAddMaterialButton = () => {
    // limit of adding items
    if (step2.materials.length >= 25) return;
    const newMaterialList = [...step2.materials, ''];
    setCacheData({ step2: { ...step2, number: step2.number += 1, materials: newMaterialList } });
  };

  const handleDeleteMaterial = (e) => {
    const delTarget = e.target.id.split('delMaterialInp')[1];
    const newMaterialList = [...step2.materials];
    newMaterialList.splice(Number(delTarget) - 1, 1);
    setCacheData({ step2: { number: step2.number -= 1, materials: newMaterialList } });
  };

  return (
    <Flex
      data-testid="addStep2"
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
        data-testid="addStep2InputHolder"
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
          data-testid="addStep2AddMaterialButton"
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
            '@bp4': {
              padding: '5px',
            },
          }}
        >
          Add Material
        </Button>

        {step2.materials.map((material, index) => (
          <>
            <Text
              type="bgColorHeadSecondary"
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&:hover': {
                  '& svg': {
                    display: step2.materials.length === 1 ? 'none' : 'flex',
                  },
                },
                '& svg': {
                  display: 'none',
                  fill: '$onSecondary',
                },
              }}
            >
              {`Material ${index + 1}`}
              <IcoClose
                id={`delMaterialInp${index + 1}`}
                width="14"
                height="14"
                event={handleDeleteMaterial}
                dataTest={`delMaterialInp${index + 1}`}
              />
            </Text>
            <Input
              onChange={handleMaterialInput}
              key={`addMaterialInp${index + 1}`}
              id={`addMaterialInp${index + 1}`}
              data-testid={`addMaterialInp${index + 1}`}
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
