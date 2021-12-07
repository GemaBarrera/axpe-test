import { render, screen } from '@testing-library/react';
import App from './App';

test('renders grid', () => {
  render(<App />);
  const grid = screen.getByTestId("grid");
  expect(grid).toBeInTheDocument();
});
