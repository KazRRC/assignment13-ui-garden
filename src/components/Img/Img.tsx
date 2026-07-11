import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled?: boolean }>`
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

export const Img = ({ src, alt, disabled }: ImgProps) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} />;
};
