import React from 'react';
import Text from '../../styles/styledComponents/text';

function AddStep5SuccessMsg() {
  return (
    <>
      <Text
        data-testid="AddStep5SuccessMsg"
        css={{
          headline3: '600',
          color: '$EasyDif',
          textAlign: 'center',
          '@bp5': {
            headline5: '600',
          },
        }}
      >
        Successfully Add Recipe To Db
      </Text>
      <Text css={{
        display: 'flex',
        marginTop: '$2',
        color: '$onBg600',
        jc_ac: '',
      }}
      >
        thanks for sharing this valuable data
      </Text>
    </>
  );
}

export default AddStep5SuccessMsg;
