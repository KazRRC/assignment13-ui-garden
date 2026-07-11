import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('button renders', () => {
  render(<Button label="Submit" />);
  expect(screen.getByText('Submit')).toBeInTheDocument();
});

test('button disabled state', () => {
  render(<Button label="Submit" disabled={true} />);

  const button = screen.getByText('Submit');

  expect(button).toHaveStyle('background-color: #cccccc');
});
