import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.span<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#999' : '#000')};
  font-size: 14px;
`;

export const Label = ({ text, disabled }: LabelProps) => {
  return <StyledLabel disabled={disabled}>{text}</StyledLabel>;
};
