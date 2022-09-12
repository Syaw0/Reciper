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

jest.mock('../../store/utils/getPageData/getRecipeData');
jest.mock('../../store/utils/getPageData/getSpecificCategoryData');
jest.mock('../../store/utils/getPageData/getHomeData');
jest.mock('../../store/utils/getPageData/getCategoryData');

getRecipeData.mockImplementation(() => fakeRecipeData);
getSpecificCategoryData.mockImplementation(() => Object.values(fakeSpecificCategory));
getHomeData.mockImplementation(() => fakeHomeData);
getCategoryData.mockImplementation(() => Object.values(fakeCategoryData));

afterEach(() => {
  cleanup();
});

describe('Recipe Card', () => {
  it('when user click on normal recipe card bread crumbs will changed', async () => {
    await waitFor(() => render(<App />));
    let normalRecipeCard;
    await waitFor(() => {
      normalRecipeCard = screen.getAllByTestId('normalRecipeCard')[0];
    });
    fireEvent.click(normalRecipeCard);
    await waitFor(() => expect(screen.getByTestId('recipePage')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId('breadHolder')).toHaveTextContent('Recipe'));
  });

  it('when user click on category recipe card bread crumbs will changed ', async () => {
    await waitFor(() => render(<App />));
    let categoryRecipeCard;
    await waitFor(() => {
      categoryRecipeCard = screen.getAllByTestId('categoryRecipeCard')[0];
    });
    fireEvent.click(categoryRecipeCard);
    await waitFor(() => expect(screen.getByTestId('orderListPage')).toBeInTheDocument());
  });

  it('normal card have level on his card', async () => {
    await waitFor(() => render(<App />));
    let normalRecipeCard;
    await waitFor(() => {
      normalRecipeCard = screen.getAllByTestId('normalRecipeCard')[0];
    });
    const recipeDifLevel = normalRecipeCard.querySelector('[data-testid="recipeDifLevel"]');
    await waitFor(() => expect(recipeDifLevel).toBeInTheDocument());
  });
  it('category card have Not level on his card', async () => {
    await waitFor(() => render(<App />));
    let categoryRecipeCard;
    await waitFor(() => {
      categoryRecipeCard = screen.getAllByTestId('categoryRecipeCard')[0];
    });
    const recipeDifLevel = categoryRecipeCard.querySelector('[data-testid="recipeDifLevel"]');
    await waitFor(() => expect(recipeDifLevel).toEqual(null));
  });
  it('from category click on the recipe card and bread crumbs will have category / categoryRecipe', async () => {
    await waitFor(() => render(<App />));
    fireEvent.click(screen.getByTestId('headerNavOrderList'));
    let categoryRecipeCard;
    await waitFor(() => {
      categoryRecipeCard = screen.getAllByTestId('categoryRecipeCard')[0];
    });
    fireEvent.click(categoryRecipeCard);
    await waitFor(() => expect(screen.getByTestId('breadHolder')).toHaveTextContent('Category'));
    let normalRecipeCard;
    await waitFor(() => {
      normalRecipeCard = screen.getAllByTestId('normalRecipeCard')[0];
    });
    const recipeDifLevel = normalRecipeCard.querySelector('[data-testid="recipeDifLevel"]');
    await waitFor(() => expect(recipeDifLevel).toBeInTheDocument());
  });
});
