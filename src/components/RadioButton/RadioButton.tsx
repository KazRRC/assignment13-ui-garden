import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const RadioButton = ({ disabled }: any) => {
  return (
    <Wrapper>
      <input type="radio" disabled={disabled} />
      <label>Option</label>
    </Wrapper>
  );
};
