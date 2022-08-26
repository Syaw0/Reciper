/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../styles/styledComponents/flex';

function RecipeCheaps({ cheapsInside }) {
  RecipeCheaps.propTypes = {
    cheapsInside: PropTypes.objectOf.isRequired,
  };
  return (
    <Flex
      justify="center"
      align="center"
      css={{
        border: '1px solid $onBg300',
        subhead2: '400',
        borderRadius: '16px',
        padding: '4px 8px',
        marginRight: '$1',
        color: '$onBg800',
        width: 'fit-content',
        cursor: 'default',

      }}
    >
      {`${cheapsInside[Object.keys(cheapsInside)[0]]}  ${Object.keys(cheapsInside)[0]}`}
    </Flex>
  );
}

export default RecipeCheaps;
