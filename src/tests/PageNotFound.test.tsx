import { expect, test } from 'vitest';
import PageNotFound from '../PageNotFound';
import { render, screen } from '@testing-library/react';

test('PageNotFound should sown error message.', () => {
  render(<PageNotFound />);
  const result = screen.getByText("There's nothing here: 404!");
  expect(result).not.toBeNull();
});
