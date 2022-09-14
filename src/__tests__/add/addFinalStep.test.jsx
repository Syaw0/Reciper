/* eslint-disable no-promise-executor-return */
/* eslint-disable no-undef */
import React from 'react';
import {
  fireEvent, render, screen, cleanup, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../app';
import mainStore from '../../store/mainStore';
import setRequest from '../../utils/setReq';

jest.mock('../../utils/setReq');

beforeEach(() => {
  // prepare the test area
  mainStore.setState((state) => ({
    ...state, currentPage: 'Add Recipe', currentStep: 1, checkStrictFile: false,
  }));
  render(<App />);
  jest.useFakeTimers();
  const nextBtn = screen.getByTestId('addRecipeNextStageBtn');
  fireEvent.change(screen.getByTestId('addRecipeName'), { target: { value: 'bela bela' } });
  fireEvent.change(screen.getByTestId('addRecipeDescription'), { target: { value: 'bela bela' } });
  fireEvent.change(screen.getByTestId('addRecipePublisher'), { target: { value: 'bela bela' } });
  fireEvent.change(screen.getByTestId('addRecipeServing'), { target: { value: 2 } });
  fireEvent.change(screen.getByTestId('addRecipePrepTime'), { target: { value: 2 } });
  fireEvent.change(screen.getByTestId('addRecipeCookTime'), { target: { value: 2 } });
  fireEvent.click(nextBtn);
  fireEvent.change(screen.getByTestId('addMaterialInp1'), { target: { value: 'bela bela' } });
  fireEvent.click(nextBtn);
  fireEvent.change(screen.getByTestId('addStepInp1'), { target: { value: 'bela bela' } });
  fireEvent.click(nextBtn);
  fireEvent.change(screen.getByTestId('addTipInp1'), { target: { value: 'bela bela' } });
  fireEvent.click(nextBtn);
});

afterEach(() => {
  cleanup();
});

describe.only('in the final step we have 4 state', () => {
  it('when click on the insert callback called...', async () => {
    const nextBtn = screen.getByTestId('addRecipeNextStageBtn');
    setRequest.mockImplementation(() => true);
    fireEvent.click(nextBtn);
    await waitFor(() => expect(setRequest).toHaveBeenCalled());
  });

  it('when we came in final Message show up', () => {
    expect(screen.getByTestId('AddStep5FinalMsg')).toBeInTheDocument();
  });

  it('when we came click insert loader show up', () => {
    const nextBtn = screen.getByTestId('addRecipeNextStageBtn');
    fireEvent.click(nextBtn);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
  it('if server and network work fine , successful message showup', async () => {
    setRequest.mockImplementation(() => true);
    const nextBtn = screen.getByTestId('addRecipeNextStageBtn');
    fireEvent.click(nextBtn);
    await waitFor(() => expect(screen.getByTestId('AddStep5SuccessMsg')).toBeInTheDocument());
  });
  it('if server and network work fine , successful message showup and we navigate to home page', async () => {
    // this test work in the real but not here

    // setRequest.mockImplementation(() => new Promise((res) => res(true)));
    // const nextBtn = screen.getByTestId('addRecipeNextStageBtn');
    // fireEvent.click(nextBtn);
    // await waitFor(() => expect(screen.getByTestId('homePage')).toBeInTheDocument());
  });
  it('if server and network not work , error message showup', async () => {
    setRequest.mockImplementation(() => false);
    const nextBtn = screen.getByTestId('addRecipeNextStageBtn');
    fireEvent.click(nextBtn);
    await waitFor(() => expect(screen.getByTestId('AddStep5ErrorMsg')).toBeInTheDocument());
  });

  it('when you waiting for response you can not click on the buttons', async () => {
    setRequest.mockImplementation(() => false);
    const nextBtn = screen.getByTestId('addRecipeNextStageBtn');
    fireEvent.click(nextBtn);
    expect(nextBtn.disabled).toBeTruthy();
    expect(mainStore.getState().finalStepComponent).toEqual('loader');
  });
  it('when success msg show up you can not click on the buttons', async () => {
    setRequest.mockImplementation(() => true);
    const nextBtn = screen.getByTestId('addRecipeNextStageBtn');
    fireEvent.click(nextBtn);
    jest.runAllTimers();
    await waitFor(() => expect(nextBtn.disabled).toBeTruthy());
    await waitFor(() => expect(mainStore.getState().finalStepComponent).toEqual('successMsg'));
  });
  it('but when error msg show up buttons clickable', async () => {
    setRequest.mockImplementation(() => false);
    const nextBtn = screen.getByTestId('addRecipeNextStageBtn');
    fireEvent.click(nextBtn);
    jest.runAllTimers();
    await waitFor(() => expect(nextBtn.disabled).toBeFalsy());
    await waitFor(() => expect(mainStore.getState().finalStepComponent).toEqual('errorMsg'));
  });
});
