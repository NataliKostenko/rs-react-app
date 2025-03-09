import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { renderWithProviders } from './test-utils.jsx';
import Toggler from '@/Toggler.jsx';

test('test selector', async () => {
  renderWithProviders(<Toggler />);

  expect(document.querySelector('button')).toBeInTheDocument();
});
