import { styled } from '../@stitches.config';

export default styled('input', {

  variants: {
    type: {
      search: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        padding: '$1 $6 $1 $2',
        headline6: '600',
        color: '$onBg800',
        fontFamily:"$josef",
        '&:focus': {
          outline: 'none',
        },
        '&::placeholder': {
          headline6_i: '600',
          color: '$onBg700',
        },

      },
    },
  },
});
