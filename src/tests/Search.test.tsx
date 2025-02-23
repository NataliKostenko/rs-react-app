import { expect, test } from 'vitest';
import { renderWithProviders } from './test-utils.tsx';
import { setupStore } from '../redux/store.ts';
import '@testing-library/jest-dom';
import Search from '../Search.tsx';

const expectedPage = 1;
const expectedSearchTerm = 'Tatooine';
const store = setupStore({
  search: {
    hasNext: true,
    currentPage: expectedPage,
    searchTerm: expectedSearchTerm,
    selectedItems: [],
  },
});

test('test selector', async () => {
  renderWithProviders(<Search />, { store });

  expect(document.querySelector('input')?.value).toBe(expectedSearchTerm);
});
