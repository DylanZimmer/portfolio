import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('opens work details and returns home', () => {
  render(<App />);
  userEvent.click(screen.getByRole('link', { name: /work experience/i }));
  userEvent.click(screen.getByText('BNY'));
  expect(screen.getByText(/Advanced from intern to full-time developer/)).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: 'Back' }));
  expect(screen.getByRole('heading', { name: 'Dylan Zimmer-Eads' })).toBeInTheDocument();
});
