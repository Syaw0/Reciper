import React from 'react';
import IcoFacebook from '../../assest/icons/IcoFacebook';
import IcoInstagram from '../../assest/icons/IcoInstagram';
import IcoTwitter from '../../assest/icons/IcoTwitter';
import Flex from '../../styles/styledComponents/flex';

function FooterSocial() {
  const sizes = {
    width: '25px',
    height: '25px',
  };
  const socialAddress = {
    instagram: 'https://instagram.com/syaw0',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
  };
  const handleDirect = (whichSocial) => {
    window.open(socialAddress[whichSocial]);
  };

  return (
    <Flex
      justify="center"
      align="center"
      css={{
        '& svg': {
          margin: '10px $1',
          fill: '$onBg400',
          '&:hover': {
            fill: '$primary900',
          },
        },
      }}
    >
      <IcoInstagram width={sizes.width} height={sizes.height} id="instagramDir" event={() => { handleDirect('instagram'); }} />
      <IcoFacebook width={sizes.width} height={sizes.height} id="facebookDir" event={() => { handleDirect('twitter'); }} />
      <IcoTwitter width={sizes.width} height={sizes.height} id="twitterDir" event={() => { handleDirect('facebook'); }} />
    </Flex>
  );
}

export default FooterSocial;
