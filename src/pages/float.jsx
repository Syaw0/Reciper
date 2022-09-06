import React from 'react';
import IcoWarm from '../assest/icons/IcoWarm';
import mainStore from '../store/mainStore';
import defaultAddCacheData from '../store/utils/defaultAddCacheData';
import Button from '../styles/styledComponents/button';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';

function Float() {
  const textValue = mainStore((state) => state.textValue);
  const setToggleFloat = mainStore((state) => state.setToggleFloat);
  const nextPage = mainStore((state) => state.nextPage);
  const currentFloat = mainStore((state) => state.currentFloat);
  const setCurrentPage = mainStore((state) => state.setCurrentPage);
  const setCurrentStep = mainStore((state) => state.setCurrentStep);
  const setCacheData = mainStore((state) => state.setCacheData);
  const setIsFirstNav = mainStore((state) => state.setIsFirstNav);

  const handleDeleteButton = () => {
    switch (currentFloat) {
      case 'exit adding':
        setToggleFloat(false);
        setIsFirstNav(false);
        setCurrentPage(nextPage);
        break;
      case 'Abort Adding':
        setToggleFloat(false);
        setCurrentPage('Home');
        setCurrentStep(1);
        setCacheData(defaultAddCacheData);
        break;

      case 'Delete Recipe':
        setToggleFloat(false);
        setCurrentPage('Home');
        break;
      default:
        break;
    }
  };

  const handleSaveButton = () => {
    setToggleFloat(false);
    setIsFirstNav(true);
  };

  return (
    <Flex
      data-testid="FloatPage"
      justify="center"
      align="center"
      dir="column"
      id="floatPage"
      css={{
        position: 'fixed',
        backgroundColor: '$onPrimary300',
        color: '$onPrimary',
        width: '100%',
        height: '100vh',
        top: '0',
        left: '0',

      }}
    >

      <Flex
        justify="center"
        align="center"
        css={{
          width: 'fit-content',
          backgroundColor: '$error',
          color: '$onError',
          padding: '$1',
          borderRadius: '16px',
          '& svg': {
            fill: '$onError',
          },
        }}
      >
        <IcoWarm width="55px" height="55px" />
        <Text css={{
          color: '$onError',
          headline4: '600',
          padding: '$2',
        }}
        >
          {textValue.alert}
        </Text>
      </Flex>

      <Flex
        justify="center"
        align="center"
        css={{
          marginTop: '$2',
          '& button': {
            padding: '$1 $2',
            marginRight: '$1',
            border: '1px solid transparent',
          },
        }}
      >
        <Button
          onClick={handleSaveButton}
          data-testid="floatPageNoButton"
          type="primary"
          css={{
            backgroundColor: '$EasyDif',
            '&:hover': {
              border: '1px solid $EasyDif',
              backgroundColor: '$EasyDif300',
              color: '$bg',
            },

          }}
        >
          {textValue.no}

        </Button>

        <Button
          data-testid="floatPageYesButton"
          onClick={handleDeleteButton}
          type="primary"
          css={{
            backgroundColor: '$error',
            '&:hover': {
              border: '1px solid $error',
              backgroundColor: '$error300',
              color: '$bg',
            },
          }}
        >
          {textValue.yes}

        </Button>

      </Flex>

    </Flex>
  );
}

export default Float;
