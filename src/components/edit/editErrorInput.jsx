import React from 'react';
import Text from '../../styles/styledComponents/text';

function EditErrorInput() {
  return (
    <>
      <Text
        data-testid="editErrorInput"
        css={{
          headline3: '600',
          color: '$error',
          textAlign: 'center',
          '@bp5': {
            headline5: '600',
          },
        }}
      >
        Some Inputs are empty
      </Text>
      <Text css={{
        display: 'flex',
        marginTop: '$2',
        color: '$onBg600',
        jc_ac: '',
      }}
      >
        please fill them then try again
      </Text>

    </>
  );
}

export default EditErrorInput;
