import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 2rem;
  font-family: 'Raleway';
`;

const Logo = styled.div`
  text-align: center;
  img {
    width: 75%;
  }
`;

const Menu = styled.div`
  text-align: right;
  li {
    list-style: none;
    display: inline-block;
    padding: 10px 30px;
  }
  a {
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    transition: all 0.3s ease 0s;
  }

  a:hover {
    font-weight: 600;
  }
`;

export { HeaderContainer, Logo, Menu };
