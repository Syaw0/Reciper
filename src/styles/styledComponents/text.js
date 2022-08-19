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
  },
});

export default Text;
