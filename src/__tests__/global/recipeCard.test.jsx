/* eslint-disable no-undef */
import React from 'react';
import {
  fireEvent, render, screen, cleanup, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../app';

afterEach(() => {
  cleanup();
});
// we have 6 diff of type test for recipe card
// 1. when user click on the recipe card from home    (pass)
// 2. when user click on the recipe card from Category    (pass)
// 3. when user click on the recipe card from Trends list and etc..   (NOT pass)
// 4. when user click on the recipe card from Similar in recipe page  (NOT pass)
// 5. diff between form of category card and normal card  (pass)
// 6. when click on the category cards we will transfer to orderList page   (Not pass)

describe('Recipe Card', () => {
  it('when user click on normal recipe card bread crumbs will changed', async () => {
    render(<App />);
    const normalRecipeCard = screen.getAllByTestId('normalRecipeCard')[0];
    fireEvent.click(normalRecipeCard);
    await waitFor(() => expect(screen.getByTestId('recipePage')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId('breadHolder')).toHaveTextContent('Recipe'));
  });

  it('when user click on category recipe card bread crumbs will changed ', async () => {
    render(<App />);
    const categoryRecipeCard = screen.getAllByTestId('categoryRecipeCard')[0];
    fireEvent.click(categoryRecipeCard);
    await waitFor(() => expect(screen.getByTestId('orderListPage')).toBeInTheDocument());
  });

  it('normal card have level on his card', async () => {
    render(<App />);
    const normalRecipeCard = screen.getAllByTestId('normalRecipeCard')[0];
    const recipeDifLevel = normalRecipeCard.querySelector('[data-testid="recipeDifLevel"]');
    await waitFor(() => expect(recipeDifLevel).toBeInTheDocument());
  });
  it('category card have Not level on his card', async () => {
    render(<App />);
    const categoryRecipeCard = screen.getAllByTestId('categoryRecipeCard')[0];
    const recipeDifLevel = categoryRecipeCard.querySelector('[data-testid="recipeDifLevel"]');
    await waitFor(() => expect(recipeDifLevel).toEqual(null));
  });
  it('from category click on the recipe card and bread crumbs will have category / categoryRecipe', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('headerNavOrderList'));
    const categoryRecipeCard = screen.getAllByTestId('categoryRecipeCard')[0];
    fireEvent.click(categoryRecipeCard);
    await waitFor(() => expect(screen.getByTestId('breadHolder')).toHaveTextContent('Category'));
    const normalRecipeCard = screen.getAllByTestId('normalRecipeCard')[0];
    const recipeDifLevel = normalRecipeCard.querySelector('[data-testid="recipeDifLevel"]');
    await waitFor(() => expect(recipeDifLevel).toBeInTheDocument());
  });
});
