import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  font-family: 'Raleway';
  margin: auto;
  padding: 5rem;
  background: hsl(218, 28%, 18%) url('/images/bg-curvy-desktop.svg') no-repeat bottom center;
  background-size: auto;
  margin-top: -1px;
  @media (max-width: 768px) {
    padding: 0.5rem;
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
  @media (max-width: 768px) {
    padding: 0px;
    .icon {
      width: 100%;
    }
    .description {
      width: auto;
      padding: 0 1rem;
    }
    .title {
      width: auto;
      padding: 0 1.8rem;
      font-size: 1.5rem;
    }
  }
`;

export { Container, Intro };
