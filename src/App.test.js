import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
});

test('lists the commercial projects', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /medisept/i })).toHaveAttribute('href', 'https://medisept.pl/');
  expect(screen.getByRole('link', { name: /wsparcie lto/i })).toHaveAttribute('href', 'https://wsparcielto.org.pl/');
});
