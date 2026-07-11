import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableHeader } from './TableHeader';

test('renders header', () => {
  render(
    <table>
      <TableHeader>Header</TableHeader>
    </table>
  );
  expect(screen.getByText('Header')).toBeInTheDocument();
});
