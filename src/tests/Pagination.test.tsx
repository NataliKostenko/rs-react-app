import { expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '../Pagination';

test('onClickDown should called when onClick fired.', () => {
  const onClickUp = vi.fn();
  const onClickDown = vi.fn();
  render(
    <Pagination
      onClickUp={onClickUp}
      onClickDown={onClickDown}
      hasNext={true}
      currentPage={2}
    />
  );

  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  });

  fireEvent(document.querySelectorAll('button')[0], event);

  expect(onClickDown.mock.calls[0].length).toBe(1);
  screen.debug();
});
