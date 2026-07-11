import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Table = ({ children }: TableProps) => {
  return <StyledTable>{children}</StyledTable>;
};
