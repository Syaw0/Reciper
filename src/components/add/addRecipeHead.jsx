import React from 'react';
import mainStore from '../../store/mainStore';
import Button from '../../styles/styledComponents/button';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';

function AddRecipeHead() {
  const setToggleFloat = mainStore((state) => state.setToggleFloat);
  const handleAbortButton = () => {
    setToggleFloat(true);
  };
  return (
    <Flex
      justify="between"
      align="center"
      css={{
        borderBottom: '1px solid $onBg100',
        padding: '$1',
        marginBottom: '$6',
      }}
    >
      <Text css={{
        headline1: '500',
        fontFamily: '$yeseva',
      }}
      >
        Let`s Add Recipe
      </Text>

      <Button
        onClick={handleAbortButton}
        type="primary"
        css={{
          backgroundColor: '$error',
          color: '$onError',
          padding: '4px $1',
          borderRadius: '16px',
          '&:hover': {
            backgroundColor: '$error300',
            color: '$error',
          },
        }}
      >
        Abort
      </Button>
    </Flex>
  );
}

export default AddRecipeHead;
