import React from 'react';
import Text from '../../styles/styledComponents/text';

function RecipeSuccessMsg() {
  return (
    <>
      <Text
        data-testid="recipeSuccessMsg"
        css={{
          headline3: '600',
          color: '$EasyDif',
          textAlign: 'center',
          '@bp5': {
            headline5: '600',
          },
        }}
      >
        Successfully Delete Recipe!
      </Text>
      <Text css={{
        display: 'flex',
        marginTop: '$2',
        color: '$onBg600',
        jc_ac: '',
      }}
      >
        thanks for editing and maintain our Db
      </Text>
    </>
  );
}

export default RecipeSuccessMsg;
