import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  background-color: hsl(216, 53%, 9%);
  color: hsl(0, 0%, 100%);
  &:first-child {
    width: 1440px;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    align-items: left;
  }
`;

const Logo = styled.div`
  flex: 1;
  text-align: left;
  img {
    height: 60px;
  }
`;

const Information = styled.div`
  margin: 3rem 0;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .column {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    &:first-child {
      flex: 3;
      padding: 0 4rem 0 0;
    }
    &:nth-child(2) {
      flex: 2;
    }
    &:last-child {
      padding-right: 0;
    }

    span {
      padding-bottom: 1rem;
    }
    a {
      text-decoration: none;
      color: hsl(0, 0%, 100%);
      &:hover {
        font-weight: 700;
      }
    }
    @media (max-width: 768px) {
      padding: 2rem 0;
      &:first-child {
        flex: 1;
        padding: 0 0;
      }
    }
  }
`;

const InfoWithIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    height: 20px;
  }
  span {
    padding-left: 1rem;
    width: 100%;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  i {
    width: 20px;
    height: 20px;
    color: hsl(0, 0%, 100%);
    border-radius: 50%;
    border: 1px solid hsl(0, 0%, 100%);
    padding: 0.5rem;
    margin: auto 3px;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    display: inline-block;
  }
`;

export { Container, Logo, Information, InfoWithIcon, SocialMedia };
