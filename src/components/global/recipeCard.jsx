/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropType from 'prop-types';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import mainStore from '../../store/mainStore';

function RecipeCard({ cardType, data }) {
  RecipeCard.propTypes = {
    cardType: PropType.string.isRequired,
    data: PropType.objectOf.isRequired,
  };
  const setCurrentPage = mainStore((state) => state.setCurrentPage);
  const setCurrentCategory = mainStore((state) => state.setCurrentCategory);
  const setCurrentRecipeId = mainStore((state) => state.setCurrentRecipeId);
  const setCurrentRecipeCategory = mainStore((state) => state.setCurrentRecipeCategory);
  let diffLevelColor;

  if (data.difficulty === 'intermediate') {
    diffLevelColor = 'rgba(245,173,64,1)';
  } else if (data.difficulty === 'Easy') {
    diffLevelColor = 'rgba(109,188,96,1)';
  } else {
    diffLevelColor = 'rgba(186,26,26,1)';
  }

  const handleCardClick = () => {
    if (cardType === 'category') {
      setCurrentCategory(data.name);
      setCurrentPage('recipeCategory');
    } else {
      setCurrentRecipeId(data.recipeId);
      setCurrentRecipeCategory(data.category);
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
        height: '24rem',
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
          height: '20rem',
        },
        '@bp4': {
          width: '12rem ',
          height: '16rem',
        },
      }}
    >

      <Flex
        css={{
          backgroundImage: `url(${data.imgUrl})`,
          bgCentering: '',
          height: '72%',
          borderRadius: '32px',
        }}
      />

      <Flex
        dir="column"
        justify="between"
        css={{
          height: '28%',
          '@bp4': {
            height: '35%',
          },
        }}
      >
        <Text
          css={{
            headline5: '600',
            padding: '12px $2 $1 $2',
            '@bp3': {
              headline5: '600',
            },
            '@bp4': {
              subhead1: '600',
            },
          }}
        >
          {data.name}
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
                // subhead3: '400',
              },
            },
          }}
        >
          {cardType !== 'category' && (
            <>
              <Text>
                {data.materials.length}
                {' '}
                material
              </Text>
              <Text>
                {data.steps.length}
                {' '}
                step
              </Text>
            </>
          )}
          {cardType === 'category' && (
            <Text>
              {data.number}
              {' '}
              {data.name}
              {' '}
              Type
            </Text>
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
          backgroundColor: diffLevelColor,
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
