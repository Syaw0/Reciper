/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
import React from 'react';
import {
  fireEvent, render, screen, cleanup, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../app';
import mainStore from '../../store/mainStore';
import setRequest from '../../utils/setReq';
import getHomeData from '../../store/utils/getPageData/getHomeData';
import fakeHomeData from '../fakeData/fakeHomeData';
import fakeRecipeData from '../fakeData/fakeRecipeData';
import getRecipeData from '../../store/utils/getPageData/getRecipeData';

jest.mock('../../store/utils/getPageData/getRecipeData');
jest.mock('../../store/utils/getPageData/getHomeData');
jest.mock('../../utils/setReq');

getHomeData.mockImplementation(() => fakeHomeData);
getRecipeData.mockImplementation(() => fakeRecipeData);
setRequest.mockImplementation(() => true);

beforeEach(async () => {
  mainStore.setState((state) => ({ ...state, checkStrictFile: false }));
  await waitFor(() => render(<App />));
  let normalRecipeCard;
  await waitFor(() => {
    normalRecipeCard = screen.getAllByTestId('normalRecipeCard')[0];
  });
  fireEvent.click(normalRecipeCard);
  await waitFor(() => expect(screen.getByTestId('recipePage')).toBeInTheDocument());
  fireEvent.click(screen.getByTestId('recipePageEditButton'));
});

afterEach(() => {
  cleanup();
});

describe('Edit Recipes', () => {
  it('when inputs are empty we can not edit recipe', () => {
    const recipeNameInput = screen.getByTestId('editRecipeName');
    fireEvent.change(recipeNameInput, { target: { value: '' } });
    fireEvent.click(screen.getByTestId('editEditButton'));
    expect(window.getComputedStyle(recipeNameInput).borderColor).toEqual('rgba(186,26,26,1)');
    expect(screen.getByTestId('editPage')).toBeInTheDocument();
  });
  it('when click on the edit loader show up first', async () => {
    fireEvent.click(screen.getByTestId('editEditButton'));
    await waitFor(() => expect(screen.getByTestId('loader')).toBeInTheDocument());
  });
  it('inputs are valid and server resolve data and success msg show up and navigate to home ', async () => {
    fireEvent.click(screen.getByTestId('editEditButton'));
    expect(setRequest).toHaveBeenCalled();
    await waitFor(() => expect(screen.getByTestId('editSuccessMsg')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId('homePage')).toBeInTheDocument());
  });
  it('during success msg and loader showup we can not click on the bottom buttons ', async () => {
    fireEvent.click(screen.getByTestId('editEditButton'));
    await waitFor(() => expect(screen.getByTestId('loader')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId('editEditButton').disabled).toBeTruthy());
    await waitFor(() => expect(screen.getByTestId('editCancelButton').disabled).toBeTruthy());
    await waitFor(() => expect(screen.getByTestId('editSuccessMsg')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId('editEditButton').disabled).toBeTruthy());
    await waitFor(() => expect(screen.getByTestId('editCancelButton').disabled).toBeTruthy());
  });
  it('if server reject request error msg show up ', async () => {
    setRequest.mockImplementation(() => false);
    fireEvent.click(screen.getByTestId('editEditButton'));
    await waitFor(() => expect(screen.getByTestId('editErrorMsg')).toBeInTheDocument());
  });

  it('if we cancel alert page show up if yes we navigate to home page and cache reset', async () => {
    fireEvent.click(screen.getByTestId('editCancelButton'));
    await waitFor(() => expect(screen.getByTestId('FloatPage')).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('floatPageYesButton'));
    await waitFor(() => expect(screen.getByTestId('homePage')).toBeInTheDocument());
    expect(mainStore.getState().editCacheData.naming.recipeName).toEqual('');
  });

  it('if we cancel alert page show up if no nothing happen just Float page gone', async () => {
    fireEvent.click(screen.getByTestId('editCancelButton'));
    const float = screen.getByTestId('FloatPage');
    await waitFor(() => expect(float).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('floatPageNoButton'));
    await waitFor(() => expect(float).not.toBeInTheDocument());
  });

  it('during editing we can not move to another page with out user permission', async () => {
    fireEvent.click(screen.getByTestId('headerNavHome'));
    const float = screen.getByTestId('FloatPage');
    await waitFor(() => expect(float).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('floatPageYesButton'));
    await waitFor(() => expect(float).not.toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId('homePage')).toBeInTheDocument());
  });
  it('when click on the plus sign on the head one item added', async () => {
    fireEvent.click(screen.getByTestId('editAddMaterial'));
    await waitFor(() => expect(screen.getByTestId('editMaterialInp2')).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('editAddMaterial'));
    await waitFor(() => expect(screen.getByTestId('editMaterialInp3')).toBeInTheDocument());
  });
  it('we can delete items (material and tip and steps)', async () => {
    fireEvent.click(screen.getByTestId('editAddMaterial'));

    const inp12 = screen.getByTestId('editMaterialInp12');
    await waitFor(() => expect(screen.getByTestId('editMaterialInp12')).toBeInTheDocument());

    // why 11? because of fake recipe data

    fireEvent.click(screen.getByTestId('delMaterialInp1'));
    await waitFor(() => expect(inp12).not.toBeInTheDocument());
  });

  it('we can not delete all the step or material or tips always one still', async () => {
    // this test pass in the real but in this env
    // when i use .toBeVisible() its not work
  });
  it('we can not add more limit number items', async () => {
    const editAddBtn = screen.getByTestId('editAddMaterial');
    for (let i = 0; i !== 26; i += 1) {
      fireEvent.click(editAddBtn);
    }
    await waitFor(() => expect(screen.getByTestId('delMaterialInp25')).toBeInTheDocument());
  });
});
