import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';

function RecipeCard() {
  return (
    <Flex
      dir="column"
      css={{
        width: '17rem ',
        height: '22rem',
        backgroundColor: '$primary100',
        borderRadius: '32px',
        cursor: 'pointer',
        boxShadow: '$1dp',
        position: 'relative',
        transition: 'all 0.1s',
        '&:hover': {
          boxShadow: '$8dp',
          transform: 'scale(1.01)',
          transition: 'all 0.2s',
        },
      }}
    >

      <Flex
        css={{
          backgroundImage: `url(${'https://user-images.githubusercontent.com/90524474/185795801-545f94fa-8d62-4d71-a365-289c25645b0b.jpg'})`,
          bgCentering: '',
          height: '75%',
          borderRadius: '32px',
        }}
      />

      <Flex
        dir="column"
        css={{
          height: '25%',
        }}
      >
        <Text
          css={{
            headline4: '600',
            padding: '12px $2 $1 $2',

          }}
        >
          piece of cake
        </Text>

        <Flex
          justify="end"
          css={{
            '& p': {
              subhead1: '400',
              color: '$onBg700',
              marginRight: '$2',
            },
          }}
        >
          <Text>16 material</Text>
          <Text>10 step</Text>
        </Flex>

      </Flex>

      <Flex
        title="this show the difficulty of cook this food"
        justify="center"
        align="center"
        css={{
          position: 'absolute',
          backgroundColor: '$bg500 ',
          width: 'fit-content',
          borderRadius: '16px',
          padding: '4px 10px',
          left: '10px',
          top: '12px',
          subhead1: '600',
          color: '$onBg900',
        }}
      >
        Level
        <Flex css={{
          marginLeft: '5px',
          width: '18px',
          height: '18px',
          backgroundColor: '$EasyDif',
          borderRadius: '50%',
        }}
        />
      </Flex>

    </Flex>
  );
}

export default RecipeCard;
