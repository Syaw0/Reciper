import React from 'react';
import RecipeCheaps from '../components/recipe/recipeCheaps';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';

function Recipe() {
  const fakeInfoData = [
    { 'Min Perpetration': '15min' },
    { 'Min Cook': '15min' },
    { Level: 'Easy' },
    { Steps: '3' },
    { Material: '5' },
  ];
  return (
    <Flex
      data-testid="recipePage"
      dir="column"
      css={{
        width: '70%',
        margin: '$5 0',
      }}
    >

      <Flex css={{
        backgroundImage: `url(${'https://user-images.githubusercontent.com/90524474/185795801-545f94fa-8d62-4d71-a365-289c25645b0b.jpg'})`,
        bgCentering: '',
        height: '42rem',
        borderRadius: '32px',
      }}
      />

      <Flex
        dir="column"
        css={{
          width: '100%',
        }}
      >

        <Flex
          justify="between"
          css={{
            margin: '$2 0',
          }}
        >
          <Text css={{
            headline1: '700',
            fontFamily: '$yeseva',
            color: '$onBg',
          }}
          >
            French Strawberry Cake

          </Text>
          <Flex
            dir="column"
            css={{
              width: 'fit-content',
              '& > p': {
                subhead1: '400',
                color: '$onBg500',
              },
            }}
          >
            <Text>
              2022/02/01

            </Text>
            <Text>
              Publisher

            </Text>
          </Flex>
        </Flex>

        <Flex
          dir="column"
          css={{
            margin: '$2 0',
          }}
        >
          <Text css={{
            headline5: '400',
            marginBottom: '$4',
            color: '$onBg900',
          }}
          >
            Reminiscent of a ladyfinger cake, this is a deliciously light
            cake that is not all that sweet and is best made with fresh, ripe strawberries.
            Decorate with additional strawberries.
          </Text>
          <Flex css={{
            flexWrap: 'wrap',
          }}
          >
            {fakeInfoData.map((info) => (
              <RecipeCheaps cheapsInside={info} key={Object.keys(info)[0]} />))}
          </Flex>
        </Flex>

      </Flex>

    </Flex>
  );
}

export default Recipe;
