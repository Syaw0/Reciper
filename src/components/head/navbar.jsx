/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import IcoClose from '../../assest/icons/IcoClose';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import SearchInput from '../inputs/searchInput';
import { fadeInToBottom } from '../../styles/keyframes';
import NavigateItems from './navigateItems';

function Navbar({
  handleNav, handleInputChange, handleSearchStart, inputValue, inputError, handleNavigation,
}) {
  Navbar.propTypes = {
    handleNav: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleNavigation: PropTypes.func.isRequired,
    handleSearchStart: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    inputError: PropTypes.bool.isRequired,
  };

  return (
    <Flex
      dir="column"
      justify="between"
      align="center"
      id="headerNavbar"
      data-testid="headerNavbar"
      css={{
        position: 'absolute',
        backgroundColor: '$bg',
        boxShadow: '$24dp',
        borderRadius: '0px 0px 32px 32px',
        padding: '$1 $2',
        height: 'fit-content',
        width: '100%',
        left: '0',
        top: '0',
        zIndex: '1000',
        animation: `${fadeInToBottom} 1s both ease`,
      }}
    >
      <Flex
        justify="between"
        align="center"
        css={{
          '& svg': {
            fill: '$onBg',
          },
        }}
      >
        <Text type="logo">
          Reciper
        </Text>
        <IcoClose height="25px" width="25" id="headerNavbarCloseSvg" dataTest="headerNavbarCloseSvg" event={() => { handleNav('closing'); }} />
      </Flex>

      <Flex
        dir="column"
        justify="around"
        align="center"
        css={{
          height: '100%',
          padding: '$3 0px',
          '& button': {
            headline4: 400,
            width: '100%',
            textAlign: 'left',
            borderBottom: '1px solid $onBg300',
            padding: '$1 ',
            '&:hover': {
              backgroundColor: '$primary',
              color: '$bg',
            },
          },
          '& div': {
            width: '100%',
            marginTop: '$3',
            '& input': {
              headline5: '500',
              '&::placeHolder': {
                headline5: '500',
              },
            },
          },
        }}
      >
        <NavigateItems handleNavigation={handleNavigation} />
        <SearchInput
          placeholder="Look for something?"
          onchange={handleInputChange}
          onstart={handleSearchStart}
          value={inputValue}
          isError={inputError}
          id="header_NavSearch"
        />
      </Flex>

    </Flex>
  );
}

export default Navbar;
