import styled from 'styled-components';

const InputStyled = styled.input`
  width: 90%;
  padding: 10px 20px;
  outline: 0;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  border-radius: 16px;
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const Error = styled.span`
  color: #cc0033;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0 20px;
`;

export { InputStyled, Error };
