import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  text-align: center;
  font-family: 'Raleway';
  margin: auto;
  padding: 5rem;
  flex-direction: row;
  background-color: hsl(218, 28%, 13%);
  img {
    flex: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
  padding: 2rem;
  gap: 2rem;
  .icon {
    width: 60%;
  }
  .title {
    text-align: left;
    font-weight: 700;
    font-size: 2.5rem;
    width: 70%;
  }
  .description {
    text-align: left;
    width: 90%;
  }
  @media (max-width: 400px) {
    .icon,
    .description {
      width: 100%;
    }
    .title {
      width: 100%;
      font-size: 1.5rem;
    }
  }
`;

export { Container, Details };
