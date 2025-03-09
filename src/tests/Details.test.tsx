import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { renderWithProviders } from './test-utils.jsx';
import { setupStore } from '@/redux/store.js';
import Details from '@/Details.jsx';

const planet = {
  name: 'Tatooine',
  diameter: '10465',
  climate: 'arid',
  population: '200000',
  url: '',
};

const store = setupStore({
  details: {
    value: planet,
    isOpen: true,
    url: '',
  },
});

test('test planet name', async () => {
  renderWithProviders(<Details />, { store });

  expect(document.querySelector('h2')?.textContent).toBe(planet.name);
});
