import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import FooterSocial from './footerSocial';

function Footer() {
  return (
    <Flex
      dir="column"
      justify="center"
      align="center"
      css={{
        borderTop: '1px solid $onBg100',
      }}
    >
      <Text
        css={{
          headline3: '500',
          color: '$onBg900',
          fontFamily: '$yeseva',
        }}
      >
        Reciper
      </Text>
      <Text
        css={{
          subhead1: '400',
          color: '$onBg500',
        }}
      >
        © Copy Right 2021 - 2022
      </Text>
      <FooterSocial />
    </Flex>
  );
}

export default Footer;
