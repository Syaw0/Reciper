/* eslint-disable no-undef */
import React from 'react';
import {
  fireEvent, render, screen, cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../app';

jest.useFakeTimers();

afterEach(() => {
  cleanup();
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
