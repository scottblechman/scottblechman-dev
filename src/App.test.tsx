import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the name', () => {
  render(<App />);
  const nameElement = screen.getAllByText(/Scott Blechman/i);
  expect(nameElement.length).toBeGreaterThan(0);
});
