import React, { FC } from 'react';
import { HeaderContainer, Logo, Menu } from './Header.Styled';

const Header: FC = () => (
  <HeaderContainer>
    <Logo>
      <a href="#" className="brand">
        <img src="/images/logo.svg" alt="brand" />
      </a>
    </Logo>
    <Menu>
      <nav>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </Menu>
  </HeaderContainer>
);

export default Header;
