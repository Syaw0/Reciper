/* eslint-disable no-undef */
import React from 'react';
import {
  fireEvent, render, screen, cleanup, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Head from '../../components/head/head';
import getCategoryData from '../../store/utils/getPageData/getCategoryData';
import getHomeData from '../../store/utils/getPageData/getHomeData';
import fakeCategoryData from '../fakeData/fakeCategoryData';
import fakeHomeData from '../fakeData/fakeHomeData';

jest.mock('../../store/utils/getPageData/getHomeData');

jest.mock('../../store/utils/getPageData/getCategoryData');

getHomeData.mockImplementation(() => fakeHomeData);
getCategoryData.mockImplementation(() => Object.values(fakeCategoryData));

afterEach(() => {
  cleanup();
});

describe('BreadCrumbs Section', () => {
  // 1.navigate in navbar will change a bread
  // 2.search will change a bread
  // 3.navigate inside a breads

  it('Navigate in navigation Header will change a bread to it', async () => {
    render(<Head />);
    // insert Category
    fireEvent.click(screen.getByTestId('headerNavOrderList'));
    await waitFor(() => expect(screen.getByTestId('breadHolder')).toHaveTextContent('Category'));

    // insert Home and remove category
    fireEvent.click(screen.getByTestId('headerNavHome'));
    await waitFor(() => expect(screen.getByTestId('breadHolder')).not.toHaveTextContent('Category'));
    await waitFor(() => expect(screen.getByTestId('breadHolder')).toHaveTextContent('Home'));

    // insert add
    fireEvent.click(screen.getByTestId('headerNavAdd'));
    await waitFor(() => expect(screen.getByTestId('breadHolder')).toHaveTextContent('Add Item'));
  });

  it('when user search bread will changed ', async () => {
    render(<Head />);
    const searchInput = screen.getByTestId('headSearchInput');
    fireEvent.change(searchInput, { target: { value: 'some expression' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    await waitFor(() => expect(screen.getByTestId('breadHolder')).toHaveTextContent('SearchFor..'));
  });

  it('when user click on the own bread , bread will updated ', async () => {
    render(<Head />);
    const bread = screen.getByTestId('breadHolder');
    await waitFor(() => expect(bread.childElementCount).toEqual(1));

    fireEvent.click(screen.getByTestId('headerNavOrderList'));
    await waitFor(() => expect(bread.childElementCount).toEqual(3));
    await waitFor(() => expect(screen.getByTestId('breadHolder')).toHaveTextContent('Category'));

    fireEvent.click(bread.childNodes[0]);
    await waitFor(() => expect(bread.childElementCount).toEqual(1));
    await waitFor(() => expect(screen.getByTestId('breadHolder')).not.toHaveTextContent('Category'));
  });

  it('user can not click on the last bread and nothing happen ', () => {
    render(<Head />);
    const bread = screen.getByTestId('breadHolder');
    expect(bread.childElementCount).toEqual(1);
    fireEvent.click(bread.childNodes[0]);
    expect(bread.childElementCount).toEqual(1);
  });
});
