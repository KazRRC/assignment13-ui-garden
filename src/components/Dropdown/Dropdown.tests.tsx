import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

test('renders dropdown', () => {
  const { getByRole } = render(<Dropdown />);
  expect(getByRole('combobox')).toBeInTheDocument();
});
