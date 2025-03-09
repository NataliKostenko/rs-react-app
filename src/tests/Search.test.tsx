import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { renderWithProviders } from './test-utils.jsx';
import { setupStore } from '@/redux/store.js';
import Search from '@/Search.jsx';

const expectedPage = 1;
const expectedSearchTerm = 'Tatooine';
const store = setupStore({
  search: {
    hasNext: true,
    currentPage: expectedPage,
    searchTerm: expectedSearchTerm,
    selectedItems: [],
    planets: [],
    isLoading: false,
  },
});

test('test selector', async () => {
  renderWithProviders(<Search />, { store });

  expect(document.querySelector('input')?.value).toBe(expectedSearchTerm);
});
