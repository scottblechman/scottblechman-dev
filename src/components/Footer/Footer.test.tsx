import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the description', () => {
  render(<Footer />);
  const textElement = screen.getByText(/2021 Scott Blechman/i);
  expect(textElement).toBeInTheDocument();
});
