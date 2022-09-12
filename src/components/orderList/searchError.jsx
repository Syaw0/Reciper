/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';

function SearchError({ data }) {
  SearchError.propTypes = {
    data: PropTypes.string.isRequired,
  };
  return (
    <Flex
      data-testid="searchErrorMsg"
      css={{
        height: '100vh',
        '& p': {
          color: '$error',
          subhead1: '500',
        },
      }}
    >
      <Text>
        {data}
      </Text>
    </Flex>
  );
}

export default SearchError;
