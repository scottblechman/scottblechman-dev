import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';

test('component is recognized as button', () => {
  render(<IconButton name="code-outline" onClick={() => {}} disabled={true} />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeDefined();
});
