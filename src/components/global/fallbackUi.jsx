/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import IcoWarn from '../../assest/icons/IcoWarm';
import mainStore from '../../store/mainStore';

function FallbackUi({ handleErrorState }) {
  const setCurrentPage = mainStore((state) => state.setCurrentPage);
  const handleButton = () => {
    console.log('e');
    setCurrentPage('Home');
    handleErrorState(false);
  };

  return (
    <Flex
      dir="column"
      justify="center"
      align="center"
      css={{
        backgroundColor: '$onBg100',
        height: '100vh',
      }}
    >
      <Flex
        dir="column"
        justify="center"
        align="center"
        css={{
          width: 'fit-content',
          '& svg': {
            fill: '$error',
          },

        }}
      >
        <Flex css={{
          '& p': {
            headline3: '500',
            color: '$error',
            padding: '$2',
          },
        }}
        >
          <IcoWarn height="45" width="45" />
          <Text>Internal Error</Text>
        </Flex>

        <Text css={{
          headline6: 400,
          '&>span:first-child': {
            color: '$error',
            textDecoration: 'underline',
          },
          '& #btnToHomeInBoundary': {
            textAlign: 'center',
            margin: '0 $1',
            padding: '2px $1',
            borderRadius: '6px',
            height: 'fit-content',
            width: 'fit-content',
            backgroundColor: '$primary',
            color: '$onPrimary',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '$primary200',
              color: '$primary',
            },

          },
        }}
        >
          application
          {' '}
          <span>Crashed</span>
          {' '}
          😩
          {' '}
          <br />
          this may for difference reasons 🤔
          {' '}
          <br />
          from server or your network or something else
          {' '}
          <br />
          please try again and reload page or
          {' '}
          <br />
          you can navigate by this
          {' '}

          <span id="btnToHomeInBoundary" onClick={handleButton}>link </span>

          to home page
          {' '}
          <br />
          if you see this error again 😶 just wait to
          {' '}
          <br />
          developer find and kill the bug 🪲

        </Text>
      </Flex>

    </Flex>
  );
}

export default FallbackUi;
