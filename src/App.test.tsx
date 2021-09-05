import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Scott Blechman/i);
  expect(linkElement).toBeInTheDocument();
});
