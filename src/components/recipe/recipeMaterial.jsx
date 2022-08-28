/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';

function RecipeMaterial({ material }) {
  RecipeMaterial.propTypes = {
    material: PropTypes.arrayOf.isRequired,
  };
  return (
    <Flex
      dir="column"
      css={{
        borderBottom: '1px solid $onBg100',
        padding: '$2 0',
      }}
    >
      <Text css={{
        headline3: '600',
        fontFamily: '$yeseva',
        margin: '$1 0 $5 0',
        '@bp4': {
          headline4: '600',
          fontFamily: '$yeseva',
        },
      }}
      >
        What We Need ?
      </Text>
      <Flex css={{
        '& ul': {
          position: 'relative',
          listStyle: 'none',
        },
        '& li': {
          headline5: '400',
          paddingLeft: '$4',
          marginBottom: '$2',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          '@bp4': {
            headline6: '500',
          },
          '&::before': {
            backgroundColor: '$onBg',
            content: ' ',
            display: 'block',
            height: '1rem',
            width: '1rem',
            left: '-1rem',
            borderRadius: '50%',
            position: 'relative',
          },
        },
      }}
      >
        <ul>
          {material.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </Flex>
    </Flex>
  );
}

export default RecipeMaterial;
