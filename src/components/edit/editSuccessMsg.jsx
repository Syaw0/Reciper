import React from 'react';
import Text from '../../styles/styledComponents/text';

function EditSuccessMsg() {
  return (
    <>
      <Text
        data-testid="editSuccessMsg"
        css={{
          headline3: '600',
          color: '$EasyDif',
          textAlign: 'center',
          '@bp5': {
            headline5: '600',
          },
        }}
      >
        Successfully Edit Recipe And Replace in Db
      </Text>
      <Text css={{
        display: 'flex',
        marginTop: '$2',
        color: '$onBg600',
        jc_ac: '',
      }}
      >
        thanks for editing and maintain this valuable data
      </Text>
    </>
  );
}

export default EditSuccessMsg;
