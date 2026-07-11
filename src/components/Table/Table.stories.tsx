import { Table } from '.';
import { TableHeader } from './TableHeader/TableHeader';
import { TableRow } from './TableRow/TableRow';
import { TableCell } from './TableCell/TableCell';

const meta = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

export const Default = {
  args: {
    children: (
      <>
        <TableHeader>
          <tr>
            <th>Name</th>
          </tr>
        </TableHeader>

        <TableRow>
          <TableCell>John</TableCell>
        </TableRow>
      </>
    ),
  },
};
