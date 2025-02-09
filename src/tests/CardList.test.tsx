import { expect, test } from 'vitest';
import CardList from '../CardList.tsx';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';

test('renders the specified number of cards', () => {
  const planets = [
    {
      name: 'Tatooine',
      diameter: '10465',
      climate: 'arid',
      population: '200000',
      url: '',
    },
    {
      name: 'Tatoo',
      diameter: '10465',
      climate: 'arid',
      population: '200000',
      url: '',
    },
    {
      name: 'Toine',
      diameter: '10465',
      climate: 'arid',
      population: '200000',
      url: '',
    },
  ];
  const router = createMemoryRouter([
    { path: '*', element: <CardList planets={planets} /> },
  ]);
  render(<RouterProvider router={router} />);

  const result = document.querySelectorAll('tbody tr');
  expect(result.length).toBe(planets.length);
  screen.debug();
});

test('planets.length=0 to return <p>Not found search result</p>', () => {
  const router = createMemoryRouter([
    { path: '*', element: <CardList planets={[]} /> },
  ]);
  render(<RouterProvider router={router} />);

  const result = screen.getByText('Not found search result');
  expect(result).not.toBeNull();
  screen.debug();
});
