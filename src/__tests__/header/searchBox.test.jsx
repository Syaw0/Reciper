/* eslint-disable no-undef */
import React from 'react';
import {
  fireEvent, render, screen, cleanup, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../components/head/header';
import App from '../../app';
import getSearchDataFromServer from '../../store/utils/querySearch';
import fakeSearchData from '../fakeData/fakeSearchData';
import getHomeData from '../../store/utils/getPageData/getHomeData';
import fakeHomeData from '../fakeData/fakeHomeData';

jest.mock('../../store/utils/getPageData/getHomeData');

jest.mock('../../store/utils/querySearch.js');
getSearchDataFromServer.mockImplementation(() => fakeSearchData);
getHomeData.mockImplementation(() => fakeHomeData);
jest.useFakeTimers();

afterEach(() => {
  cleanup();
});

describe('search Box', () => {
  it('write on input and when click on svg enter input must empty and callback called', () => {
    render(<Header />);
    const searchInput = screen.getByTestId('headSearchInput');
    const searchSvg = screen.getByTestId('headSearchSvg');
    fireEvent.change(searchInput, { target: { value: 'some expression' } });
    fireEvent.click(searchSvg);
    expect(searchInput.value).toEqual('');
    expect(getSearchDataFromServer).toHaveBeenCalled();
  });
  it('write on input and when key Down Enter same Happen', () => {
    render(<Header />);
    const searchInput = screen.getByTestId('headSearchInput');
    fireEvent.change(searchInput, { target: { value: 'some expression' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(searchInput.value).toEqual('');
    expect(getSearchDataFromServer).toHaveBeenCalled();
  });
  it('search for empty query will show an error and callback doesn`t call', async () => {
    render(<Header />);
    const searchInput = screen.getByTestId('headSearchInput');
    fireEvent.change(searchInput, { target: { value: '' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    const inputError = screen.getByTestId('headSearchError');
    expect(inputError).toBeInTheDocument();
    jest.runOnlyPendingTimers();
    await waitFor(() => expect(inputError).not.toBeInTheDocument());
  });
  it('if result is ok searching component is show up with recipe cards', async () => {
    render(<App />);
    const searchInput = screen.getByTestId('headSearchInput');
    fireEvent.change(searchInput, { target: { value: 'cookie' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(getSearchDataFromServer).toHaveBeenCalled();
    jest.runOnlyPendingTimers();
    await waitFor(() => expect(screen.getByTestId('orderListPage')).toBeInTheDocument());
    await waitFor(() => expect(screen.getAllByTestId('normalRecipeCard').length).toBeGreaterThan(0));
  });
  it('if result is empty or error happen error msg show up', async () => {
    getSearchDataFromServer.mockImplementation(() => ({
      status: false,
      text: 'error',
    }));
    render(<App />);
    const searchInput = screen.getByTestId('headSearchInput');
    fireEvent.change(searchInput, { target: { value: 'cookie' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(getSearchDataFromServer).toHaveBeenCalled();
    jest.runOnlyPendingTimers();
    await waitFor(() => expect(screen.getByTestId('searchErrorMsg')).toBeInTheDocument());
  });
});
