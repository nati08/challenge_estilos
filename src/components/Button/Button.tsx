import React, { FC } from 'react';
import { ButtonStyled } from './Button.Styled';

interface ButtonProps {
  text: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, disabled = false }) => {
  const classes = `${disabled && 'disabled'}`;
  return <ButtonStyled className={classes}>{text}</ButtonStyled>;
};

export default Button;
