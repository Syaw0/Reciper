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
jest.mock('../../store/utils/getPageData/getCategoryData');

getHomeData.mockImplementation(() => fakeHomeData);

jest.useFakeTimers();

afterEach(() => {
  cleanup();
});

describe('navbar section', () => {
  it('click on the ham menu and open the navbar', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('headerMenuHam'));
    expect(screen.getByTestId('headerNavbar')).toBeInTheDocument();
  });

  it('click on the close when nav is open and nav will closed', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('headerMenuHam'));
    const navbar = screen.getByTestId('headerNavbar');
    fireEvent.click(screen.getByTestId('headerNavbarCloseSvg'));
    jest.runAllTimers();
    await waitFor(() => expect(navbar).not.toBeInTheDocument());
  });
  it('when click on the navbar item navbar closed', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('headerMenuHam'));
    const navbar = screen.getByTestId('headerNavbar');
    const navBtnToOrderList = screen.getAllByTestId('headerNavOrderList');
    fireEvent.click(navBtnToOrderList[1]);
    jest.runAllTimers();
    await waitFor(() => expect(navbar).not.toBeInTheDocument());
  });
});
