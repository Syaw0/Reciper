/* eslint-disable no-undef */
import React from 'react';
import {
  fireEvent, render, screen, cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Head from '../../components/head/head';

afterEach(() => {
  cleanup();
});

describe('BreadCrumbs Section', () => {
  // 1.navigate in navbar will change a bread
  // 2.search will change a bread
  // 3.navigate inside a breads

  it('Navigate in navigation Header will change a bread to it', () => {
    render(<Head />);
    // insert Category
    fireEvent.click(screen.getByTestId('headerNavOrderList'));
    expect(screen.getByTestId('breadHolder')).toHaveTextContent('Category');
    // insert Home and remove category
    fireEvent.click(screen.getByTestId('headerNavHome'));
    expect(screen.getByTestId('breadHolder')).not.toHaveTextContent('Category');
    expect(screen.getByTestId('breadHolder')).toHaveTextContent('Home');
    // insert add
    fireEvent.click(screen.getByTestId('headerNavAdd'));
    expect(screen.getByTestId('breadHolder')).toHaveTextContent('Add Item');
  });

  it('when user search bread will changed ', () => {
    render(<Head />);
    const searchInput = screen.getByTestId('headSearchInput');
    fireEvent.change(searchInput, { target: { value: 'some expression' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(screen.getByTestId('breadHolder')).toHaveTextContent('SearchFor..');
  });

  it('when user click on the own bread , bread will updated ', () => {
    render(<Head />);
    const bread = screen.getByTestId('breadHolder');
    expect(bread.childElementCount).toEqual(1);
    fireEvent.click(screen.getByTestId('headerNavOrderList'));
    expect(bread.childElementCount).toEqual(3);
    expect(screen.getByTestId('breadHolder')).toHaveTextContent('Category');
    fireEvent.click(bread.childNodes[0]);
    expect(bread.childElementCount).toEqual(1);
    expect(screen.getByTestId('breadHolder')).not.toHaveTextContent('Category');
  });

  it('user can not click on the last bread and nothing happen ', () => {
    render(<Head />);
    const bread = screen.getByTestId('breadHolder');
    expect(bread.childElementCount).toEqual(1);
    fireEvent.click(bread.childNodes[0]);
    expect(bread.childElementCount).toEqual(1);
  });
});
