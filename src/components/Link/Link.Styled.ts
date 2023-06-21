import styled from 'styled-components';

const LinkStyled = styled.a`
  color: hsl(176, 68%, 64%);
  text-decoration: underline;
  cursor: pointer;
  text-underline-offset: 0.55em;
  display: flex;
  align-items: center;
  &:hover,
  &:active {
    font-weight: 700;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  &:first-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  img {
    flex: none;
    height: auto;
  }
`;

export { LinkStyled };
