/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../styles/styledComponents/flex';

function RecipeCheaps({ cheapsData }) {
  RecipeCheaps.propTypes = {
    cheapsData: PropTypes.objectOf.isRequired,
  };
  return (

    <Flex css={{
      flexWrap: 'wrap',
    }}
    >
      {cheapsData.map((info) => (
        <Flex
          key={Object.keys(info)[0]}
          justify="center"
          align="center"
          css={{
            border: '1px solid $onBg300',
            subhead2: '400',
            borderRadius: '16px',
            padding: '4px 8px',
            marginRight: '$1',
            marginBottom: '$1',
            color: '$onBg800',
            width: 'fit-content',
            cursor: 'default',
            '&:hover': {
              backgroundColor: '$primary100',
            },
          }}
        >
          {`${info[Object.keys(info)[0]]}  ${Object.keys(info)[0]}`}
        </Flex>

      ))}
    </Flex>

  );
}

export default RecipeCheaps;
