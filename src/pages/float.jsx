import React from 'react';
import IcoWarm from '../assest/icons/IcoWarm';
import mainStore from '../store/mainStore';
import Button from '../styles/styledComponents/button';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';

function Float() {
  const setToggleFloat = mainStore((state) => state.setToggleFloat);
  const setCurrentPage = mainStore((state) => state.setCurrentPage);

  const handleDeleteButton = () => {
    setToggleFloat(false);
    setCurrentPage('Home');
  };

  const handleSaveButton = () => {
    setToggleFloat(false);
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
          Are You Sure You Want
          {' '}
          <br />
          {' '}
          To Delete This Recipe?
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
          No Save Me!

        </Button>

        <Button
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
          Delete It

        </Button>

      </Flex>

    </Flex>
  );
}

export default Float;
