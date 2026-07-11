import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor};

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

export const Button = ({ label, backgroundColor, disabled }: ButtonProps) => {
  return (
    <StyledButton backgroundColor={backgroundColor} disabled={disabled}>
      {label}
    </StyledButton>
  );
};
