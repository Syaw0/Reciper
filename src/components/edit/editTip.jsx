import React from 'react';
import IcoClose from '../../assest/icons/IcoClose';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import Text from '../../styles/styledComponents/text';

function EditTip() {
  const { tips } = mainStore((state) => state.editCacheData);
  const setEditCacheData = mainStore((state) => state.setEditCacheData);

  const handleTipInput = (e) => {
    const editTarget = e.target.id.split('editTipInp')[1];
    const newTipsList = [...tips.values];
    newTipsList.splice(Number(editTarget) - 1, 1, e.target.value);
    setEditCacheData({ tips: { ...tips, values: newTipsList } });
  };

  const handleAddTipButton = () => {
    // limit of adding items
    if (tips.values.length >= 15) return;
    const newTipsList = [...tips.values, ''];
    setEditCacheData({ tips: { ...tips, number: tips.number += 1, values: newTipsList } });
  };

  const handleDeleteTip = (e) => {
    const delTarget = e.target.id.split('delTipInp')[1];
    const newTipsList = [...tips.values];
    newTipsList.splice(Number(delTarget) - 1, 1);
    setEditCacheData({ tips: { number: tips.number -= 1, values: newTipsList } });
  };

  return (
    <Flex
      data-testid="editTips"
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
        {`Tips (${tips.values.length}) `}
        <IcoClose
          width="15"
          height="15"
          dataTest="editAddTips"
          id="editAddTips"
          event={handleAddTipButton}
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

        {tips.values.map((tip, index) => (
          <>
            <Text
              type="bgColorHeadSecondary"
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&:hover': {
                  '& svg': {
                    display: tips.values.length === 1 ? 'none' : 'flex',
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
              key={`editTipInp${index + 1}`}
              id={`editTipInp${index + 1}`}
              data-testid={`editTipInp${index + 1}`}
              value={tip}
              css={{
                marginBottom: '$6',
              }}
              whichType="text"
              placeholder="Enter your Tip"
            />
          </>
        ))}

      </Flex>
    </Flex>
  );
}

export default EditTip;
