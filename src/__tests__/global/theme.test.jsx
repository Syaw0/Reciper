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
import mainStore from '../../store/mainStore';

jest.mock('../../store/utils/getPageData/getHomeData');
getHomeData.mockImplementation(() => fakeHomeData);

afterEach(() => {
  cleanup();
});

describe('Theme', () => {
  it('default theme is light', async () => {
    await waitFor(() => render(<App />));
    expect(mainStore.getState().currentTheme).toEqual('light');
    expect(screen.getByTestId('changeThemeToDark')).toBeInTheDocument();
  });
  it('change theme to dark', async () => {
    await waitFor(() => render(<App />));
    const changeToDark = screen.getByTestId('changeThemeToDark');
    fireEvent.click(changeToDark);
    expect(mainStore.getState().currentTheme).toEqual('dark');
    await waitFor(() => expect(changeToDark).not.toBeInTheDocument());
  });
  it('change theme to light', async () => {
    await waitFor(() => render(<App />));
    const changeToDark = screen.getByTestId('changeThemeToDark');
    fireEvent.click(changeToDark);
    const changeToLight = screen.getByTestId('changeThemeToLight');
    fireEvent.click(changeToLight);
    expect(mainStore.getState().currentTheme).toEqual('light');
    await waitFor(() => expect(screen.getByTestId('changeThemeToDark')).toBeInTheDocument());
    await waitFor(() => expect(changeToLight).not.toBeInTheDocument());
  });
});
