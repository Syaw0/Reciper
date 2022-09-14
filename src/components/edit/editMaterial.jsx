/* eslint-disable react/no-array-index-key */
import React from 'react';
import IcoClose from '../../assest/icons/IcoClose';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

function EditMaterial() {
  const { materials } = mainStore((state) => state.editCacheData);
  const setEditCacheData = mainStore((state) => state.setEditCacheData);

  const handleMaterialInput = (e) => {
    const editTarget = e.target.id.split('editMaterialInp')[1];
    const newMaterialList = [...materials.values];
    newMaterialList.splice(Number(editTarget) - 1, 1, e.target.value);
    setEditCacheData({ materials: { ...materials, values: newMaterialList } });
  };

  const handleEditAddMaterialButton = () => {
    // limit of adding items
    if (materials.values.length >= 25) return;
    const newMaterialList = [...materials.values, ''];
    setEditCacheData({
      materials: { ...materials, number: materials.number += 1, values: newMaterialList },
    });
  };

  const handleDeleteMaterial = (e) => {
    const delTarget = e.target.id.split('delMaterialInp')[1];
    const newMaterialList = [...materials.values];
    newMaterialList.splice(Number(delTarget) - 1, 1);
    setEditCacheData({ materials: { number: materials.number -= 1, values: newMaterialList } });
  };

  return (
    <Flex
      data-testid="editMaterials"
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
        {`Materials (${materials.values.length}) `}
        <IcoClose
          width="15"
          height="15"
          dataTest="editAddMaterial"
          id="editAddMaterial"
          event={handleEditAddMaterialButton}
        />
      </Text>
      <Flex
        data-testid="editMaterialInputHolder"
        dir="column"
        css={{
          marginTop: '$2',
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

        {materials.values.map((material, index) => (
          <Flex dir="column" key={index}>
            <Text
              type="bgColorHeadSecondary"
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&:hover': {
                  '& svg': {
                    display: materials.values.length === 1 ? 'none' : 'flex',
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
              key={`editMaterialInp${index + 1}`}
              id={`editMaterialInp${index + 1}`}
              data-testid={`editMaterialInp${index + 1}`}
              value={material}
              css={{
                marginBottom: '$6',
              }}
              whichType="text"
              placeholder="Enter your Material"
            />
          </Flex>
        ))}

      </Flex>
    </Flex>
  );
}

export default EditMaterial;
