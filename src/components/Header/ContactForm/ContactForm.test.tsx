import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders the form title', () => {
  render(<ContactForm open={true} setOpen={() => {}} />);
  const titleElement = screen.getByText(/Get in Touch/i);
  expect(titleElement).toBeInTheDocument();
});

test('does not render the form when closed', () => {
  render(<ContactForm open={false} setOpen={() => {}} />);
  const titleElement = screen.queryByText(/Get in Touch/i);
  expect(titleElement).toBeNull();
});
