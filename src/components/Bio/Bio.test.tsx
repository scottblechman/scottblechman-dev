import { render, screen } from '@testing-library/react';
import Bio from './Bio';

test('section name is "About Me"', () => {
  render(<Bio />);
  const titleElement = screen.getByText(/About Me/i);
  expect(titleElement).toBeInTheDocument();
});
