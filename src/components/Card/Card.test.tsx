import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders the card title', () => {
  render(<Card title="card title" />);
  const titleElement = screen.getByText(/card title/i);
  expect(titleElement).toBeInTheDocument();
});
