import { expect, test } from 'vitest';
import { renderWithProviders } from './test-utils.tsx';
import { setupStore } from '../redux/store.ts';
import '@testing-library/jest-dom';
import Details from '../Details.tsx';

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
