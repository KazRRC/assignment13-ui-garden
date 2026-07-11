import styled from 'styled-components';

const Wrapper = styled.div<{ disabled?: boolean }>`
  border: 1px solid #ddd;
  padding: 16px;
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
`;

export const Card = ({ disabled }: any) => {
  return (
    <Wrapper disabled={disabled}>
      <h3>Card Title</h3>
      <p>Card content</p>
    </Wrapper>
  );
};
