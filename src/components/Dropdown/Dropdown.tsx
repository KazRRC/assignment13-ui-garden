import styled from 'styled-components';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
`;

export const Dropdown = ({ disabled }: any) => {
  return (
    <StyledSelect disabled={disabled}>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </StyledSelect>
  );
};
