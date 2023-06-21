import React, { FC } from 'react';
import { LinkStyled } from './Link.Styled';

interface LinkProps {
  link: string;
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Link: FC<LinkProps> = ({ link, children }) => {
  return <LinkStyled href={link}>{children}</LinkStyled>;
};

export default Link;
