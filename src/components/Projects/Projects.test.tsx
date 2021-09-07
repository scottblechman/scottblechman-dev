import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('section name is "My Projects"', () => {
  render(<Projects />);
  const linkElement = screen.getByText(/My Projects/i);
  expect(linkElement).toBeInTheDocument();
});
