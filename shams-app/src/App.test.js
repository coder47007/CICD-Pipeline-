import { render, screen } from '@testing-library/react';
import App from './App';

test('renders user name Shams on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Shams/i);
  expect(nameElement).toBeInTheDocument();
});
