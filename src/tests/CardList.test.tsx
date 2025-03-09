import { expect, test } from 'vitest';
import CardList from '../CardList';
import { setupStore } from '../redux/store';
import '@testing-library/jest-dom';
import { renderWithProviders } from './test-utils';

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
  renderWithProviders(<CardList planets={[]} />, { store });

  expect(document.querySelector('p')).toBeInTheDocument();
});
