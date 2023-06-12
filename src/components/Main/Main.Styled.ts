import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 1440px;
  user-select: none;
  cursor: default;
  color: hsl(0, 0%, 100%);
  @media (max-width: 1440px) {
    width: 95%;
  }
  @media (max-width: 400px) {
    width: 375px;
  }
`;

export { Container };
