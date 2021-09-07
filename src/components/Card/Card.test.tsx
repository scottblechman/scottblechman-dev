import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders the section title', () => {
  render(<Card title="card title" />);
  const linkElement = screen.getByText(/card title/i);
  expect(linkElement).toBeInTheDocument();
});
