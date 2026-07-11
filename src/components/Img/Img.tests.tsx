import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

test('renders image', () => {
  render(<Img src="test.jpg" alt="test" />);
  expect(screen.getByAltText('test')).toBeInTheDocument();
});

test('disabled image style', () => {
  render(<Img src="test.jpg" alt="test" disabled />);
  const img = screen.getByAltText('test');
  expect(img).toHaveStyle('opacity: 0.4');
});
