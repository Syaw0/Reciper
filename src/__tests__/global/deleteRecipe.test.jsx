/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
import React from 'react';
import {
  fireEvent, render, screen, cleanup, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../app';
import getCategoryData from '../../store/utils/getPageData/getCategoryData';
import getHomeData from '../../store/utils/getPageData/getHomeData';
import getRecipeData from '../../store/utils/getPageData/getRecipeData';
import getSpecificCategoryData from '../../store/utils/getPageData/getSpecificCategoryData';
import fakeCategoryData from '../fakeData/fakeCategoryData';
import fakeHomeData from '../fakeData/fakeHomeData';
import fakeRecipeData from '../fakeData/fakeRecipeData';
import fakeSpecificCategory from '../fakeData/fakeSpecificCategory';
import deleteReq from '../../utils/deleteReq';

jest.mock('../../utils/deleteReq');
jest.mock('../../store/utils/getPageData/getRecipeData');
jest.mock('../../store/utils/getPageData/getSpecificCategoryData');
jest.mock('../../store/utils/getPageData/getHomeData');
jest.mock('../../store/utils/getPageData/getCategoryData');

deleteReq.mockImplementation(() => true);
getRecipeData.mockImplementation(() => fakeRecipeData);
getSpecificCategoryData.mockImplementation(() => Object.values(fakeSpecificCategory));
getHomeData.mockImplementation(() => fakeHomeData);
getCategoryData.mockImplementation(() => Object.values(fakeCategoryData));

afterEach(() => {
  cleanup();
});

describe('Recipe Card', () => {
  beforeEach(async () => {
    await waitFor(() => render(<App />));
    let normalRecipeCard;
    await waitFor(() => {
      normalRecipeCard = screen.getAllByTestId('normalRecipeCard')[0];
    });
    fireEvent.click(normalRecipeCard);
    let deleteBtn;
    await waitFor(() => {
      deleteBtn = screen.getByTestId('recipePageDeleteButton');
    });
    fireEvent.click(deleteBtn);
  });

  it('first float page show up', async () => {
    await waitFor(() => expect(screen.getByTestId('floatPageYesButton')).toBeInTheDocument());
  });

  it('when we click on the yes first loader came up if server is ok success msg show up', async () => {
    fireEvent.click(screen.getByTestId('floatPageYesButton'));
    await waitFor(() => expect(screen.getByTestId('loader')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId('recipeSuccessMsg')).toBeInTheDocument());
    // await waitFor(() => expect(screen.getByTestId('floatPageYesButton')).toBeInTheDocument());
  });

  it('if server does not response truthy error msg show up', async () => {
    deleteReq.mockImplementation(() => false);
    fireEvent.click(screen.getByTestId('floatPageYesButton'));
    await waitFor(() => expect(screen.getByTestId('loader')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId('recipeErrorMsg')).toBeInTheDocument());
    // await waitFor(() => expect(screen.getByTestId('floatPageYesButton')).toBeInTheDocument());
  });
});
