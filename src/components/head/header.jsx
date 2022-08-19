import React, { useState } from 'react';
import mainStore from '../../store/mainStore';
import Button from '../../styles/styledComponents/button';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import SearchInput from '../inputs/searchInput';

function Header() {
  const setCurrentPage = mainStore((state) => state.setCurrentPage);
  const getDataFromServer = mainStore((state) => state.getDataFromServer);
  const [inputError , setInputError] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSearchStart = (e) => {
    if (e.type === 'click' || e.key === 'Enter') {
      if (inputValue.trim() !== '') {
        getDataFromServer(inputValue);
        document.getElementById('header_search').blur();
        setInputValue('');
      }else{
        setInputError(true)
        setTimeout(()=>{
          setInputError(false)
        },2000)
      }
    }
  };
  const handleNavigation = (e) => {
    setCurrentPage(e.target.innerHTML);
  };

  return (
    <Flex
      justify="between"
      align="center"
      css={{
        borderBottom: '1px solid $onBg100',
        padding: '$2 0',
      }}
    >
      <SearchInput
        placeholder="Look for something?"
        onchange={handleInputChange}
        onstart={handleSearchStart}
        value={inputValue}
        isError={inputError}
        id="header_search"
        css={{
          width: '30%',
        }}
      />

      <Text
        css={{
          headline1: '500',
          fontFamily: '$yeseva',
          width: '50%',
          textAlign: 'center',
          color: '$onBg',
        }}
      >
        Reciper
      </Text>

      <Flex
        justify="around"
        css={{
          width: '30%',

        }}
      >
        <Button data-testid="headerNavHome" onClick={handleNavigation} type="shadow">Home</Button>
        <Button data-testid="headerNavOrderList" onClick={handleNavigation} type="shadow">Category</Button>
        <Button data-testid="headerNavAdd" onClick={handleNavigation} type="shadow">Add Recipe</Button>
      </Flex>

    </Flex>
  );
}

export default Header;
