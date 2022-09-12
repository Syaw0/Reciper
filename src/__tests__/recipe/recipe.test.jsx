/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
import React from 'react';
import {
  fireEvent, render, screen, cleanup, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../app';
import getHomeData from '../../store/utils/getPageData/getHomeData';
import getRecipeData from '../../store/utils/getPageData/getRecipeData';
import fakeHomeData from '../fakeData/fakeHomeData';
import fakeRecipeData from '../fakeData/fakeRecipeData';

jest.mock('../../store/utils/getPageData/getRecipeData');
jest.mock('../../store/utils/getPageData/getHomeData');

getRecipeData.mockImplementation(() => fakeRecipeData);
getHomeData.mockImplementation(() => fakeHomeData);

afterEach(() => {
  cleanup();
});

describe('Recipe Page', () => {
  beforeEach(async () => {
    await waitFor(() => render(<App />));
    let normalRecipeCard;
    await waitFor(() => {
      normalRecipeCard = screen.getAllByTestId('normalRecipeCard')[0];
    });
    fireEvent.click(normalRecipeCard);
  });
  it('when user click on the edit we will throw to edit page', async () => {
    // also when u came in this page we have recipe information on it (in future...)
    fireEvent.click(screen.getByTestId('recipePageEditButton'));
    await waitFor(() => expect(screen.getByTestId('editPage')).toBeInTheDocument());
  });
  it('when user click on the delete we will show up warn component', async () => {
    // also when u came in this page we have recipe information on it (in future...)
    fireEvent.click(screen.getByTestId('recipePageDeleteButton'));
    await waitFor(() => expect(screen.getByTestId('FloatPage')).toBeInTheDocument());
  });
});
