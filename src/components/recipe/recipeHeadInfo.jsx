/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import RecipeCheaps from './recipeCheaps';
import mainStore from '../../store/mainStore';

function RecipeHeadInfo({ cheapsData }) {
  RecipeHeadInfo.propTypes = {
    cheapsData: PropTypes.objectOf.isRequired,
  };
  const recipeCacheData = mainStore((state) => state.recipeCacheData);
  return (
    <>
      <Flex
        justify="between"
        css={{
          margin: '$3 0',
        }}
      >
        <Text css={{
          headline1: '700',
          fontFamily: '$yeseva',
          color: '$onBg',
          '@bp4': {
            headline2: '700',
            fontFamily: '$yeseva',
          },
        }}
        >
          {recipeCacheData.name}

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
            {recipeCacheData.publisher}

          </Text>
        </Flex>
      </Flex>

      <Flex
        dir="column"
        css={{
          margin: '$2 0',
          borderBottom: '1px solid $onBg100',
          paddingBottom: '$3',

        }}
      >
        <Text css={{
          headline5: '500',
          marginBottom: '$4',
          color: '$onBg900',
          '@bp4': {
            headline6: '500',

          },
        }}
        >
          {recipeCacheData.description}
        </Text>
        <RecipeCheaps cheapsData={cheapsData} />
      </Flex>
    </>
  );
}

export default RecipeHeadInfo;
