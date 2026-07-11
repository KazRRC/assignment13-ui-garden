import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

test('renders text', () => {
  render(<Text content="Hello" />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});

test('disabled text style', () => {
  render(<Text content="Hello" disabled />);
  expect(screen.getByText('Hello')).toHaveStyle('color: #888');
});
