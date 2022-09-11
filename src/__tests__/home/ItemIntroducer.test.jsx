/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
import React from 'react';
import {
  fireEvent, render, screen, cleanup, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../app';
import getHomeData from '../../store/utils/getPageData/getHomeData';
import fakeHomeData from '../fakeData/fakeHomeData';

jest.mock('../../store/utils/getPageData/getHomeData');

afterEach(() => {
  cleanup();
});

describe('ItemIntroducer', () => {
  it('when user click on the see more button bread crumbs will changed', async () => {
    getHomeData.mockImplementation(() => fakeHomeData);
    render(<App />);
    let seeMoreBtn;
    await waitFor(() => {
      seeMoreBtn = screen.getAllByTestId('itemIntroducerSeeMoreBtn')[0];
    });
    fireEvent.click(seeMoreBtn);
    await waitFor(() => expect(screen.getByTestId('orderListPage')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId('breadHolder')).toHaveTextContent('Trends Recipes'));
  });
});
