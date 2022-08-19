/* eslint-disable no-undef */
import React from 'react';
import {
  fireEvent, render, screen, cleanup, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/head/header';
import getSearchDataFromServer from '../store/utils/querySearch';
import App from '../app';

jest.mock('../store/utils/querySearch.js');
jest.useFakeTimers();


afterEach(() => {
  cleanup();
});

describe('Header section', () => {
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
      expect(getSearchDataFromServer).not.toHaveBeenCalled();
      jest.runOnlyPendingTimers();
      await waitFor(() => expect(inputError).not.toBeInTheDocument());
    });
  });

  describe('navigate section', () => {
    it('navigate to category page', () => {
      render(<App />);
      const navBtnToOrderList = screen.getByTestId('headerNavOrderList');
      fireEvent.click(navBtnToOrderList);
      expect(screen.getByTestId('orderListPage')).toBeInTheDocument();
    });
    it('navigate to Add page', () => {
      render(<App />);
      const navBtnToAdd = screen.getByTestId('headerNavAdd');
      fireEvent.click(navBtnToAdd);
      expect(screen.getByTestId('addPage')).toBeInTheDocument();
    });
    it('navigate to Home page', () => {
      render(<App />);
      const navBtnToAdd = screen.getByTestId('headerNavAdd');
      fireEvent.click(navBtnToAdd);
      // first nav to another page
      const navBtnToHome = screen.getByTestId('headerNavHome');
      fireEvent.click(navBtnToHome);
      expect(screen.getByTestId('homePage')).toBeInTheDocument();
    });
  });
});