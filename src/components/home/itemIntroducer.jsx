/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropType from 'prop-types';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import IcoArrowRight from '../../assest/icons/IcoArrowRight';
import mainStore from '../../store/mainStore';
import createHomeRecipeCard from '../../pages/utils/createHomeRecipeCard';

function ItemIntroducer({ title, items }) {
  ItemIntroducer.propTypes = {
    title: PropType.string.isRequired,
    items: PropType.arrayOf.isRequired,
  };
  const setCurrentPage = mainStore((state) => state.setCurrentPage);
  const setCurrentOrderList = mainStore((state) => state.setCurrentOrderList);

  const handleSeeMoreButton = (whichSeeMore) => {
    switch (whichSeeMore) {
      case 'Trends Recipes':

        setCurrentOrderList(createHomeRecipeCard('normal', 'trendRecipes'));
        break;
      case 'New Recipes':
        setCurrentOrderList(createHomeRecipeCard('normal', 'newRecipes'));
        break;
      case 'User Suggestion':
        setCurrentOrderList(createHomeRecipeCard('normal', 'userSuggestion'));
        break;
      case 'Top Categories':
        setCurrentOrderList(createHomeRecipeCard('category', 'topCategories'));
        break;
      default:
        break;
    }
    setCurrentPage(whichSeeMore);
  };
  return (
    <Flex
      dir="column"
      css={{
        border: 'none',
        margin: '$4 0',
        position: 'relative',
        // overflow: 'hidden',
        '&>div': {
          padding: '$4 0',
        },
      }}
    >
      <Flex
        as="fieldset"
        css={{
          border: 'none',
          borderTop: '1px solid $onBg200',
          position: 'relative',
          '& legend': {
            paddingRight: '$3',
            headline3: '500',
            fontFamily: '$yeseva',
            color: '$onBg',

          },
          '@bp3': {
            '& legend': {
              headline3: '500',
              fontFamily: '$yeseva',
            },
          },
          '@bp4': {
            '& legend': {
              headline5: '500',
              fontFamily: '$yeseva',
              paddingRight: '$2',
            },
          },
        }}
      >

        <legend>{title}</legend>
      </Flex>
      <Flex
        justify="between"
        id="introducerItemHolder"
        css={{
          height: '100%',
          width: '100%',
          overflowX: 'auto',
        }}
      >
        <Flex
          css={{
            display: 'inline-flex',
            width: 'fit-content',
            '&>div': {
              margin: '0 16px',
              '@bp3': {
                margin: '0 8px',
              },
            },
          }}
        >
          {items}
        </Flex>

      </Flex>
      <Text
        data-testid="itemIntroducerSeeMoreBtn"
        onClick={() => { handleSeeMoreButton(title); }}
        css={{
          position: 'absolute',
          right: '0',
          top: '8px',
          backgroundColor: '$bg',
          paddingLeft: '$3',
          color: '$onBg500',
          subhead2: '400',
          cursor: 'pointer',
          '&:hover': {
            color: '$onBg',
            '& svg': {
              fill: '$onBg',
            },
          },
          '& svg': {
            fill: '$onBg500',
            marginLeft: '$1',
          },
          '@bp4': {
            subhead3: '400',
          },
        }}
      >
        See More
        <IcoArrowRight height="5px" width="5px" event={() => {}} />
      </Text>
    </Flex>
  );
}

export default ItemIntroducer;
