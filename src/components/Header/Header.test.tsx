import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the description', () => {
  render(<Header avatar={undefined} />);
  const aboutElement = screen.getByText(/SWE @ Tyler Technologies./i);
  expect(aboutElement).toBeInTheDocument();
});
