/* eslint-disable no-continue */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
const beAErrorInput = (element) => {
  element.style.border = '2px solid rgba(186,26,26,1)';
  element.style.outline = 'none';
  element.onfocus = () => {
    element.style.border = '1px solid rgba(77,98,104,0.5)';
    element.style.outline = '2px solid rgba(77,98,104,1)';
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
  const stepHolder = document.querySelector(`[data-testid='addStep${step}']`);
  const stepInputs = stepHolder.querySelectorAll('input');
  for (const i of stepInputs) {
    if (i.type === 'file') {
      continue;
    }
    if (i.value.trim() === '') {
      beAErrorInput(i);
      errInp.push(i);
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
