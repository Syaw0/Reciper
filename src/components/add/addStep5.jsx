import React from 'react';
import Button from '../../styles/styledComponents/button';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';

function AddStep5() {
  return (
    <Flex
      dir="column"
      justify="center"
      align="center"
      css={{
        margin: '$10 0px',
      }}
    >
      <Text css={{
        headline3: '600',
      }}
      >
        You Successfully Insert All We Need 💫✨

      </Text>
      <Text css={{
        display: 'flex',
        marginTop: '$2',
        color: '$onBg600',
        jc_ac: '',
      }}
      >
        If You Want You Can See The
        <Button
          type="primary"
          css={{
            backgroundColor: '$secondary',
            color: '$onSecondary',
            padding: '5px $1',
            marginLeft: '$1',
          }}
        >
          Preview

        </Button>
      </Text>
    </Flex>
  );
}

export default AddStep5;
