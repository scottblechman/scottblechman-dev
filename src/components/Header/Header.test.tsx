import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the bio', () => {
  render(<Header avatar={undefined} />);
  const linkElement = screen.getByText(/SWE @ Tyler Technologies./i);
  expect(linkElement).toBeInTheDocument();
});
