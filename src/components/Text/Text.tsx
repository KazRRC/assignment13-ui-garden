import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#888' : '#222')};
`;

export const Text = ({ content, disabled }: TextProps) => {
  return <StyledText disabled={disabled}>{content}</StyledText>;
};
