/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';

function RecipeCookSteps({ steps }) {
  RecipeCookSteps.propTypes = {
    steps: PropTypes.arrayOf.isRequired,
  };
  return (
    <Flex
      dir="column"
      css={{
        borderBottom: '1px solid $onBg100',
        padding: '$3 0',
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
        Let`s Cook !
      </Text>
      <Flex
        dir="column"
        css={{
        }}
      >
        {steps.map((item, index) => (
          <Flex
            dir="column"
            css={{
              marginBottom: '$3',

            }}
          >
            <Text css={{
              width: '100%',
              backgroundColor: '$primary',
              color: '$onPrimary',
              padding: '4px 10px',
              headline5: '600',
              borderRadius: '32px',
              marginBottom: '$2',
              '@bp4': {
                headline6: '600',

              },
            }}
            >
              Step
              {' '}
              {index + 1}

            </Text>
            <Text css={{
              headline5: '500',
              paddingLeft: '$3',
              '@bp4': {
                headline6: '500',
                paddingLeft: '$2',

              },
            }}
            >
              {item}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default RecipeCookSteps;
