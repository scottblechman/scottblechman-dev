import { render, screen } from '@testing-library/react';
import ListCard from './ListCard';

test('renders the card title', () => {
  render(<ListCard title="Card Title" icon="" list={[]} />);
  const titleElement = screen.getByText(/Card Title/i);
  expect(titleElement).toBeInTheDocument();
});
