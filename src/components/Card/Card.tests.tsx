import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

test('renders card', () => {
  render(<Card />);
  expect(screen.getByText('Card Title')).toBeInTheDocument();
});
