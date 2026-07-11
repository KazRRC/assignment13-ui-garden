import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableFooter } from './TableFooter';

test('renders footer', () => {
  render(
    <table>
      <TableFooter>Footer</TableFooter>
    </table>
  );

  expect(screen.getByText('Footer')).toBeInTheDocument();
});
