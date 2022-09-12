/* eslint-disable no-undef */
import React from 'react';
import {
  fireEvent, render, screen, cleanup, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../app';
import getCategoryData from '../../store/utils/getPageData/getCategoryData';
import getHomeData from '../../store/utils/getPageData/getHomeData';
import fakeCategoryData from '../fakeData/fakeCategoryData';
import fakeHomeData from '../fakeData/fakeHomeData';

jest.mock('../../store/utils/getPageData/getHomeData');

jest.mock('../../store/utils/getPageData/getCategoryData');

getHomeData.mockImplementation(() => fakeHomeData);
getCategoryData.mockImplementation(() => Object.values(fakeCategoryData));

jest.useFakeTimers();

afterEach(() => {
  cleanup();
});

describe('navigate section', () => {
  it('navigate to category page', async () => {
    render(<App />);
    const navBtnToOrderList = screen.getByTestId('headerNavOrderList');
    fireEvent.click(navBtnToOrderList);
    await waitFor(() => expect(screen.getByTestId('orderListPage')).toBeInTheDocument());
  });
  it('navigate to Add page', async () => {
    await waitFor(() => render(<App />));
    const navBtnToAdd = screen.getByTestId('headerNavAdd');
    fireEvent.click(navBtnToAdd);
    await waitFor(() => expect(screen.getByTestId('addPage')).toBeInTheDocument());
  });
  it('navigate to Home page', async () => {
    render(<App />);
    const navBtnToAdd = screen.getByTestId('headerNavOrderList');
    fireEvent.click(navBtnToAdd);
    // first nav to another page
    const navBtnToHome = screen.getByTestId('headerNavHome');
    fireEvent.click(navBtnToHome);
    await waitFor(() => expect(screen.getByTestId('homePage')).toBeInTheDocument());
  });
});
