import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

test('renders radio', () => {
  render(<RadioButton />);
  expect(screen.getByRole('radio')).toBeInTheDocument();
});
