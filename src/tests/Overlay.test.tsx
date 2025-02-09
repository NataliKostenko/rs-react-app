import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Overlay from '../Overlay';

test('Overlay should be shown wnen it is enabled.', () => {
  render(<Overlay isEnabled={true} />);
  const result = document.querySelector('.overlay[style~="display: block"]');
  expect(result).not.toBeNull();
  screen.debug();
});

test('Overlay should not be shown wnen it is disabled.', () => {
  render(<Overlay isEnabled={false} />);
  const result = document.querySelector('.overlay[style~="display: none"]');
  expect(result).not.toBeNull();
  screen.debug();
});
