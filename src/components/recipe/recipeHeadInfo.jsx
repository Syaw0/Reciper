/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import RecipeCheaps from './recipeCheaps';

function RecipeHeadInfo({ cheapsData }) {
  RecipeHeadInfo.propTypes = {
    cheapsData: PropTypes.objectOf.isRequired,
  };
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
          Reminiscent of a ladyfinger cake, this is a deliciously light
          cake that is not all that sweet and is best made with fresh, ripe strawberries.
          Decorate with additional strawberries.
        </Text>
        <RecipeCheaps cheapsData={cheapsData} />
      </Flex>
    </>
  );
}

export default RecipeHeadInfo;
