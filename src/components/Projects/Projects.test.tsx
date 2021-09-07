import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('section name is "My Projects"', () => {
  render(<Projects projects={[]} />);
  const titleElement = screen.getByText(/My Projects/i);
  expect(titleElement).toBeInTheDocument();
});
