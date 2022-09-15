import React from 'react';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import Loader from '../global/loader';
import EditErrorInput from './editErrorInput';
import EditErrorMsg from './editErrorMsg';
import EditSuccessMsg from './editSuccessMsg';

function EditMsg() {
  const editCurrentMsg = mainStore((state) => state.editCurrentMsg);
  return (
    <Flex
      dir="column"
      justify="center"
      align="center"
    >
      {editCurrentMsg === 'loader' && <Loader />}
      {editCurrentMsg === 'successEdit' && <EditSuccessMsg />}
      {editCurrentMsg === 'errorMsg' && <EditErrorMsg />}
      {editCurrentMsg === 'inputError' && <EditErrorInput />}

    </Flex>
  );
}

export default EditMsg;
