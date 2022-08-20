import { styled } from '../@stitches.config';

const Text = styled('p', {
  fontFamily: '$josef',
  color: '$onBg',
  cursor: 'default',
  variants: {
    cursor: {
      click: {
        cursor: 'pointer',
      },
    },
    type: {
      logo: {
        headline1: '500',
        fontFamily: '$yeseva',
        width: '20%',
        textAlign: 'center',
        color: '$onBg',
      },
    },
  },
});

export default Text;
