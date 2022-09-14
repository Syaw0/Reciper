/* eslint-disable consistent-return */
import setReqForEditRecipe from './setReqForEdit';
import setReqForInsertRecipe from './setReqForInsert';

const setRequest = async (type) => {
  let result;
  switch (type) {
    case 'addRecipe':
      result = await setReqForInsertRecipe();
      return result;

    case 'editRecipe':
      result = await setReqForEditRecipe();
      return result;

    default:
      break;
  }
};

export default setRequest;
