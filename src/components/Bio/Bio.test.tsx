import { render, screen } from '@testing-library/react';
import Bio from './Bio';

test('section name is "About Me"', () => {
  render(<Bio />);
  const linkElement = screen.getByText(/About Me/i);
  expect(linkElement).toBeInTheDocument();
});
