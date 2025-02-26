import { expect, test } from 'vitest';
import CardRow from '../CardRow';
import { setupStore } from '../redux/store';
import { renderWithProviders } from './test-utils';

const expectedPage = 1;
const expectedSearchTerm = 'Tatooine';
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
    currentPage: expectedPage,
    searchTerm: expectedSearchTerm,
    selectedItems: [planet],
  },
});

test('checkbox should fired.', () => {
  renderWithProviders(<CardRow item={planet} />, { store });

  expect(document.querySelector('input')?.checked).toBe(true);
  expect(document.querySelector('a')?.innerHTML).toBe(planet.name);
});
