import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Vanessa Henson Lifetime Learner', () => {
  render(<App />);
  const textElement = screen.getByText(/Vanessa Henson Lifetime Learner/i);
  expect(textElement).toBeInTheDocument();
});
