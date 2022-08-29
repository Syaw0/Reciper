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

describe('Recipe Page', () => {
  beforeEach(() => {
    render(<App />);
    const normalRecipeCard = screen.getAllByTestId('normalRecipeCard')[0];
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
    await waitFor(() => expect(screen.getByTestId('FloatPage  ')).toBeInTheDocument());
  });
});
