import React from 'react';
import { loaderAnimation } from '../../styles/keyframes';
import Flex from '../../styles/styledComponents/flex';

function Loader() {
  return (
    <Flex
      data-testid="loader"
      align="center"
      justify="between"
      css={{
        flexFlow: 'row nowrap',
        width: '2rem',
        '& span': {
          width: '0.3rem',
          height: '1rem',
          backgroundColor: '$primary',
        },
        '& span:nth-of-type(1)': {
          animation: `${loaderAnimation} 1s -0.45s ease-in-out infinite`,
        },
        '& span:nth-of-type(2)': {
          animation: `${loaderAnimation} 1s -0.3s ease-in-out infinite`,
        },
        '& span:nth-of-type(3)': {
          animation: `${loaderAnimation} 1s -0.15s ease-in-out infinite`,
        },
        '& span:nth-of-type(4)': {
          animation: `${loaderAnimation} 1s  ease-in-out infinite`,
        },
      }}
    >
      <span />
      <span />
      <span />
      <span />
    </Flex>
  );
}

export default Loader;
