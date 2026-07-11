import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';

test('renders hero image', () => {
  render(<HeroImage src="test.jpg" />);
  expect(screen.getByRole('img')).toBeInTheDocument();
});
