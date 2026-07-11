import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

test('renders table', () => {
  render(<Table>Content</Table>);
  expect(screen.getByText('Content')).toBeInTheDocument();
});
