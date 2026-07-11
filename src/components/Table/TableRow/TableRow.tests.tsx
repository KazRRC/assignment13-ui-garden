import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableRow } from './TableRow';

test('renders row', () => {
  const { getByText } = render(
    <table>
      <tbody>
        <TableRow>Row</TableRow>
      </tbody>
    </table>
  );

  expect(getByText('Row')).toBeInTheDocument();
});
