import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, hsl(218, 28%, 13%) 50%, hsl(216, 53%, 9%) 50%);
  padding: 2rem 12rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const AccessContainer = styled.div`
  background-color: hsl(219, 30%, 18%);
  padding: 2rem 12rem 2rem;
  text-align: center;
  p {
    padding: 0 5%;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  label {
    width: 70%;
  }
  button {
    width: 25%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    label {
      width: 95%;
    }
    button {
      width: 100%;
    }
  }
`;

export { Container, AccessContainer, FormContainer };
