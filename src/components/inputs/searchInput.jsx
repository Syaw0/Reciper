/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../styles/styledComponents/flex';
import Input from '../../styles/styledComponents/input';
import IcoSearch from '../../assest/icons/IcoSearch';

function SearchInput({
  id, placeholder, onchange, value, onstart, isError,
}) {
  SearchInput.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired,
    isError: PropTypes.bool.isRequired,
    onstart: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  };
  return (
    <Flex type="searchInput" onKeyDown={(e) => { onstart(e); }}>
      <Input data-testid="headSearchInput" id={id} type="search" placeholder={placeholder} onChange={(e) => { onchange(e); }} value={value} />
      <IcoSearch dataTest="headSearchSvg" id={`${id}SearchInput`} width="28px" height="28px" event={onstart} />
      {isError && (
      <Flex data-testid="headSearchError">
        input must have value
      </Flex>
      )}
    </Flex>
  );
}

export default SearchInput;
