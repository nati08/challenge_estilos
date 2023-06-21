import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: hsl(176, 68%, 64%);
  color: white;
  padding: 10px 20px;
  outline: 0;
  text-transform: capitalize;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  &:hover,
  &:active {
    background-color: linear-gradient(hsl(198, 60%, 50%), hsl(198, 60%, 50%));
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export { ButtonStyled };
