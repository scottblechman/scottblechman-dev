import { render, screen } from '@testing-library/react';
import HeaderComponent from './HeaderComponent';

test('renders the bio', () => {
  render(<HeaderComponent avatar={undefined} />);
  const linkElement = screen.getByText(/SWE @ Tyler Technologies./i);
  expect(linkElement).toBeInTheDocument();
});
