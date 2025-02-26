import { expect, test } from 'vitest';
import CardList from '../CardList.tsx';
import { renderWithProviders } from './test-utils.tsx';
import { setupStore } from '../redux/store.ts';
import '@testing-library/jest-dom';

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
  renderWithProviders(<CardList />, { store });

  expect(document.querySelector('p')).toBeInTheDocument();
});
