/* eslint-disable import/prefer-default-export */
import { keyframes } from './@stitches.config';

const fadeInToBottom = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-500px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeOutToTop = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(-500px)',
  },
});

export { fadeInToBottom, fadeOutToTop };
