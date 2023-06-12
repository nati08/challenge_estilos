import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 2rem;
  font-family: 'Raleway';
`;

const Logo = styled.div`
  flex: 1;
  text-align: left;
  img {
    width: 70%;
  }
`;

const Menu = styled.div`
  flex: 2;
  text-align: right;
  li {
    list-style: none;
    display: inline-block;
    padding: 10px 30px;
    @media (max-width: 1440px) {
      padding: 10px;
    }
    @media (max-width: 400px) {
      padding: 5px 10px;
    }
  }
  a {
    font-size: 1.2vw;
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    transition: all 0.3s ease 0s;
    @media (max-width: 400px) {
      font-size: 2.5vw;
    }
  }

  a:hover {
    font-weight: 700;
  }
`;

export { HeaderContainer, Logo, Menu };
