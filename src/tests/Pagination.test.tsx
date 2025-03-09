import React from 'react';
import { expect, test } from 'vitest';
import Pagination from '../Pagination';
import { setupStore } from '../redux/store';
import { renderWithProviders } from './test-utils';
import { screen } from '@testing-library/react';

test('onClickDown should called when onClick fired.', () => {
  const expectedPage = 1;
  const store = setupStore({
    search: {
      hasNext: true,
      currentPage: expectedPage,
      searchTerm: '',
      selectedItems: [],
      planets: [],
      isLoading: false,
    },
  });

  renderWithProviders(<Pagination hasNext={false} />, { store });

  expect(screen.getByText('1').innerHTML).toBe(expectedPage.toString());
});
