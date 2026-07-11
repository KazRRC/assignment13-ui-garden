import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

test('renders label', () => {
  render(<Label text="Hello" />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});

test('disabled label style', () => {
  render(<Label text="Hello" disabled />);
  const el = screen.getByText('Hello');
  expect(el).toHaveStyle('color: #999');
});
