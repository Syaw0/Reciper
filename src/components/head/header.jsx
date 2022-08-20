/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import IcoMenu from '../../assest/icons/IcoMenu';
import mainStore from '../../store/mainStore';
import { fadeOutToTop } from '../../styles/keyframes';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import SearchInput from '../inputs/searchInput';
import Navbar from './navbar';
import NavigateItems from './navigateItems';

function Header() {
  const setCurrentPage = mainStore((state) => state.setCurrentPage);
  const getDataFromServer = mainStore((state) => state.getDataFromServer);
  const [inputError, setInputError] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleMenuHam = (status) => {
    if (status === 'closing') {
      document.getElementById('headerNavbar').style.animation = `${fadeOutToTop} 1s both ease`;
      setTimeout(() => {
        setIsNavOpen(false);
      }, 1000);
    } else {
      setIsNavOpen(true);
    }
  };
  const handleSearchStart = (e) => {
    if (e.type === 'click' || e.key === 'Enter') {
      if (inputValue.trim() !== '') {
        isNavOpen ? handleMenuHam('closing') : null;
        getDataFromServer(inputValue);
        document.getElementById('header_search').blur();
        setInputValue('');
      } else {
        setInputError(true);
        setTimeout(() => {
          setInputError(false);
        }, 2000);
      }
    }
  };
  const handleNavigation = (e) => {
    if (isNavOpen) {
      handleMenuHam('closing');
    }
    setCurrentPage(e.target.innerHTML);
  };

  return (
    <Flex
      justify="between"
      align="center"
      css={{
        borderBottom: '1px solid $onBg100',
        padding: '$2 0',
        '& #headerNavbar': {
          display: 'none',
        },
        '& #headerMenuHam': {
          display: 'none',
        },
        '& > div:first-child': {
          width: '35%',
        },
        '@bp3': {
          '& > div:first-child': {
            display: 'none',
          },
          '& #headerMenuHam': {
            display: 'flex',
          },
          '& #headerNavigateCon': {
            display: 'none',
          },
          '& #headerNavbar': {
            display: 'flex',
          },
        },
      }}
    >
      <SearchInput
        placeholder="Look for something?"
        onchange={handleInputChange}
        onstart={handleSearchStart}
        value={inputValue}
        isError={inputError}
        id="header_search"

      />

      <Text type="logo">
        Reciper
      </Text>

      <Flex
        id="headerNavigateCon"
        justify="around"
        css={{
          width: '35%',

        }}
      >
        <NavigateItems handleNavigation={handleNavigation} />
      </Flex>

      <IcoMenu width="30px" height="25px" id="headerMenuHam" dataTest="headerMenuHam" event={() => { handleMenuHam('open'); }} />

      {isNavOpen
      && (
      <Navbar
        handleNav={handleMenuHam}
        handleInputChange={handleInputChange}
        inputError={inputError}
        handleSearchStart={handleSearchStart}
        inputValue={inputValue}
        handleNavigation={handleNavigation}
      />
      )}

    </Flex>
  );
}

export default Header;
