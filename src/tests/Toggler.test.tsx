import { expect, test } from 'vitest';
import { renderWithProviders } from './test-utils.tsx';
import '@testing-library/jest-dom';
import Toggler from '../Toggler.tsx';

test('test selector', async () => {
  renderWithProviders(<Toggler />);

  expect(document.querySelector('button')).toBeInTheDocument();
});
