import React from 'react';
import mainStore from '../store/mainStore';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';

function ErrorDuringFetch() {
  const handleNavClick = () => {
    mainStore.setState((state) => ({
      ...state,
      getPageDataError: false,
    }));
    mainStore.getState().setCurrentPage('Home');
  };
  return (
    <Flex
      data-testid="errorDuringFetchPage"
      dir="column"
      justify="center"
      align="center"
      css={{
        margin: '$5 0',
      }}
    >
      <Text css={{
        headline3: '600',
        color: '$error',
        textAlign: 'center',
        '@bp5': {
          headline5: '600',
        },
      }}
      >
        Error During Fetch Data
      </Text>
      <Text
        onClick={handleNavClick}
        css={{
          display: 'flex',
          marginTop: '$2',
          color: '$onBg600',
          jc_ac: '',
          '&:hover': {
            color: '$bg300',
          },
        }}
      >
        you can navigate to home by this link
      </Text>
    </Flex>
  );
}

export default ErrorDuringFetch;
