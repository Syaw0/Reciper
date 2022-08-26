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

describe('ItemIntroducer', () => {
  it('when user click on the see more button bread crumbs will changed', async () => {
    render(<App />);
    const seeMoreBtn = screen.getAllByTestId('itemIntroducerSeeMoreBtn')[0];
    fireEvent.click(seeMoreBtn);
    await waitFor(() => expect(screen.getByTestId('orderListPage')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId('breadHolder')).toHaveTextContent('Trends Recipes'));
  });
});
