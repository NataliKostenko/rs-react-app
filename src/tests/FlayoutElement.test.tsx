import { expect, test } from 'vitest';
import { renderWithProviders } from './test-utils.tsx';
import { setupStore } from '../redux/store.ts';
import '@testing-library/jest-dom';
import FlayoutElement from '../FlayoutElement.tsx';

test('test div flayout', async () => {
  const store = setupStore({
    search: {
      hasNext: true,
      currentPage: 1,
      searchTerm: '',
      selectedItems: [],
    },
  });

  renderWithProviders(<FlayoutElement />, { store });

  expect(document.querySelector('div.flayout')).not.toBeInTheDocument();
});

test('test div selected', async () => {
  const planet = {
    name: 'Tatooine',
    diameter: '10465',
    climate: 'arid',
    population: '200000',
    url: '',
  };

  const store = setupStore({
    search: {
      hasNext: true,
      currentPage: 1,
      searchTerm: '',
      selectedItems: [planet],
      planets: [],
      isLoading: false,
    },
  });

  renderWithProviders(<FlayoutElement />, { store });

  expect(document.querySelector('div.flayout div')?.innerHTML).toBe(
    'Selected 1 elements'
  );
  expect(document.querySelector('a')?.innerHTML).toBe('Download');
});
