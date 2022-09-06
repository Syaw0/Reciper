import React from 'react';
import Text from '../../styles/styledComponents/text';

function AddStep5ErrorMsg() {
  return (
    <>
      <Text
        data-testid="AddStep5ErrorMsg"
        css={{
          headline3: '600',
          color: '$error',
          textAlign: 'center',
          '@bp5': {
            headline5: '600',
          },
        }}
      >
        Error Happen During Process
      </Text>
      <Text css={{
        display: 'flex',
        marginTop: '$2',
        color: '$onBg600',
        jc_ac: '',
      }}
      >
        this may cause form your internet or server response please try again.
      </Text>
    </>
  );
}

export default AddStep5ErrorMsg;
