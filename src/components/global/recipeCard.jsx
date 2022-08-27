/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropType from 'prop-types';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import mainStore from '../../store/mainStore';

function RecipeCard({ cardType }) {
  RecipeCard.propTypes = {
    cardType: PropType.string.isRequired,
  };
  const id = 'meat';
  const setCurrentPage = mainStore((state) => state.setCurrentPage);
  const setCurrentCategory = mainStore((state) => state.setCurrentCategory);
  const handleCardClick = () => {
    if (cardType === 'category') {
      // handleOrderListPage('fo');
      setCurrentCategory(id);
      // handleBreadsOutside("recipeCategory")
      setCurrentPage('recipeCategory');
    } else {
      setCurrentPage('Recipe');
    }
  };

  return (
    <Flex
      data-testid={`${cardType}RecipeCard`}
      onClick={handleCardClick}
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
        '& p': {
          cursor: 'pointer',
        },
        '&:hover': {
          boxShadow: '$8dp',
          transform: 'scale(1.01)',
          transition: 'all 0.2s',
        },
        '@bp3': {
          width: '14rem ',
          height: '19rem',
        },
        '@bp4': {
          width: '12rem ',
          height: '17rem',
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
            '@bp3': {
              headline5: '600',
            },
            '@bp4': {
              headline6: '600',
            },
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
              '@bp3': {
                subhead2: '400',
              },
              '@bp4': {
                // subhead3:"400"
              },
            },
          }}
        >
          {cardType !== 'category' && (
            <>
              <Text>16 material</Text>
              <Text>10 step</Text>
            </>
          )}
          {cardType === 'category' && (
            <Text>23 Salads Type</Text>
          )}
        </Flex>

      </Flex>

      {cardType !== 'category' && (
      <Flex
        data-testid="recipeDifLevel"
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
          '@bp4': {
            padding: '2px 6px',
          },

        }}
      >
        Level
        <Flex css={{
          marginLeft: '5px',
          width: '18px',
          height: '18px',
          backgroundColor: '$EasyDif',
          borderRadius: '50%',
          '@bp4': {
            width: '12px',
            height: '12px',
          },
        }}
        />
      </Flex>
      )}

    </Flex>
  );
}

export default RecipeCard;
