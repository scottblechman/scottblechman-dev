import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('section name is "What I Use"', () => {
  render(<Skills />);
  const titleElement = screen.getByText(/What I\'m Using/i);
  expect(titleElement).toBeInTheDocument();
});
