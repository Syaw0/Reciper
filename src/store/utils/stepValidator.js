/* eslint-disable no-continue */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import mainStore from '../mainStore';

/* eslint-disable no-restricted-syntax */
const beAErrorInput = (element) => {
  element.style.backgroundColor = 'rgba(186,26,26,0.1)';
  element.style.border = '2px solid rgba(186,26,26,1)';
  element.style.outline = 'none';
  element.onfocus = () => {
    element.style.backgroundColor = 'transparent';
    element.style.border = '1px solid rgba(77,98,104,0.5)';
    element.style.outline = '2px solid rgba(77,98,104,1)';
    element.style.opacity = '1';
  };
  element.onblur = () => {
    element.style.outline = 'none';
  };
};
const stepValidator = (step) => {
  if (step === 5) {
    return true;
  }
  const errInp = [];
  let stepHolder;
  if (step === 'editPage') {
    stepHolder = document.querySelector(`[data-testid='${step}']`);
  } else {
    stepHolder = document.querySelector(`[data-testid='addStep${step}']`);
  }

  const stepInputs = stepHolder.querySelectorAll('input');
  for (const i of stepInputs) {
    if (i.type === 'file' && mainStore.getState().checkStrictFile) {
      if (i.files.length < 1) {
        beAErrorInput(i);
        errInp.push(i);
      } else {
        i.style.backgroundColor = 'transparent';
        i.style.border = '1px solid rgba(77,98,104,0.5)';
      }
    }
    if (i.type === 'number' && Number(i.value) < 1) {
      beAErrorInput(i);
      errInp.push(i);
      continue;
    } else {
      i.style.border = '1px solid rgba(77,98,104,0.5)';
    }
    if (i.value.trim() === '') {
      if (i.type !== 'file') {
        beAErrorInput(i);
        errInp.push(i);
      }
    } else {
      i.style.border = '1px solid rgba(77,98,104,0.5)';
    }
  }
  if (errInp.length >= 1) {
    return false;
  }
  return true;
};

export default stepValidator;
