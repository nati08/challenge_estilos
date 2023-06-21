import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  background-color: hsl(218, 28%, 13%);
  padding: 2rem 12rem;
  margin-top: -1px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const Service = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 40%;
  padding: 2rem;
  gap: 2rem;
  .icon {
    height: 80px;
  }
  .title {
    text-align: center;
    font-weight: 700;
  }
  .description {
    text-align: center;
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    flex: 0 0 100%;
  }
`;

export { Container, Service };
