import React from 'react';
import Text from '../../styles/styledComponents/text';

function RecipeErrorMsg() {
  return (
    <>
      <Text
        data-testid="recipeErrorMsg"
        css={{
          headline3: '600',
          color: '$error',
          textAlign: 'center',
          '@bp5': {
            headline5: '600',
          },
        }}
      >
        Error during operation
      </Text>
      <Text css={{
        display: 'flex',
        marginTop: '$2',
        color: '$onBg600',
        jc_ac: '',
      }}
      >
        this error may for server response or your network connection
      </Text>
    </>
  );
}

export default RecipeErrorMsg;
