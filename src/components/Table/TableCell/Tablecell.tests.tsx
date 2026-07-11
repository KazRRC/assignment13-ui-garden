import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableCell } from './TableCell';

test('renders cell', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell>Hello</TableCell>
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByText('Hello')).toBeInTheDocument();
});
