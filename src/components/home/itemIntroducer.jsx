/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropType from 'prop-types';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import IcoArrowRight from '../../assest/icons/IcoArrowRight';
import mainStore from '../../store/mainStore';

function ItemIntroducer({ title, items }) {
  ItemIntroducer.PropType = {
    title: PropType.string.isRequired,
    items: PropType.array.isRequired,
  };
  const setCurrentPage = mainStore((state) => state.setCurrentPage);
  const handleSeeMoreButton = (whichSeeMore) => {
    setCurrentPage(whichSeeMore);
  };
  return (
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
        '&>div': {
          padding: '$4 0',
        },
      }}
    >
      <legend>{title}</legend>
      <Flex
        justify="between"
        css={{
          height: '100%',
          width: '100%',
          display: 'inline-flex',
          '&>div': {
            // marginRight: '20px',
          },
        }}
      >
        {items}
      </Flex>
      <Text
        onClick={() => { handleSeeMoreButton(title); }}
        css={{
          position: 'absolute',
          right: '0',
          top: '-28px',
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
        }}
      >
        See More
        <IcoArrowRight height="5px" width="5px" event={() => {}} />
      </Text>
    </Flex>
  );
}

export default ItemIntroducer;
