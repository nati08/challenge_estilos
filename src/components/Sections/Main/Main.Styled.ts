import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  font-family: 'Raleway';
  margin: auto;
  padding: 5rem;
  background: hsl(218, 28%, 18%) url('/images/bg-curvy-desktop.svg') no-repeat bottom center;
  background-size: auto;
  @media (max-width: 400px) {
    background: hsl(218, 28%, 18%) url('/images/bg-curvy-mobile.svg') no-repeat bottom center;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  .icon {
    width: 60%;
  }
  .title {
    text-align: center;
    font-weight: 700;
    font-size: 2.5rem;
    width: 70%;
  }
  .description {
    text-align: center;
    width: 40%;
  }
  @media (max-width: 400px) {
    .icon {
      width: 100%;
    }
  }
`;

export { Container, Intro };
