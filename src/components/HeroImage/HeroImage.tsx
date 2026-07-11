import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const HeroImage = ({ src }: any) => {
  return <Img src={src} />;
};
