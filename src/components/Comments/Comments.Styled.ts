import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  height: 300px;
  background-color: hsl(218, 28%, 13%);
  flex-direction: row;
  padding: 2rem 6rem 2rem;
  background-image: url('/images/bg-quotes.png');
  background-repeat: no-repeat;
  background-size: 48px 48px;
  background-position: left 6rem top 1rem;
`;
const Comment = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  background-color: hsl(219, 30%, 18%);
  padding: 2rem;
  gap: 2rem;
  .description {
  }
  .author {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
    img {
      width: 50px;
      border-radius: 50%;
    }
    div.user {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: left;
      .name {
        font-weight: 700;
      }
      .job {
        font-size: 0.8rem;
      }
    }
  }
`;

export { Container, Comment };
