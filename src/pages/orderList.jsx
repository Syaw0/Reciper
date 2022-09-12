import React from 'react';
import mainStore from '../store/mainStore';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';

function OrderList() {
  const currentOrderList = mainStore((state) => state.currentOrderList);
  const currentPage = mainStore((state) => state.currentPage);
  const currentCategory = mainStore((state) => state.currentCategory);
  const queriedData = mainStore((state) => state.queriedData);

  let title = '';

  if (currentPage === 'recipeCategory') {
    title = currentCategory;
  } else {
    title = currentPage;
  }
  return (
    <Flex
      justify="start"
      align="start"
      data-testid="orderListPage"
      dir="column"
      css={{
        marginBottom: '$5',
      }}
    >

      <Text css={{
        headline4: '500',
        fontFamily: '$yeseva',
        color: '$onBg',
        margin: '$3 0 $2 0',
      }}
      >
        {title === 'Searching' ? `Searching for ${queriedData}` : title}
      </Text>

      <Flex
        justify="between"
        align="start"
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridColumnGap: '$2',
          gridRowGap: '$5',
          '@bp0': {
            gridTemplateColumns: '1fr 1fr 1fr',
          },
          '@bp2': {
            gridTemplateColumns: '1fr 1fr',
          },
          '@bp5': {
            gridTemplateColumns: '1fr',
          },
          '& > div': {
            width: 'stretch',
          },

        }}
      >
        {currentOrderList}
      </Flex>

    </Flex>
  );
}

export default OrderList;
