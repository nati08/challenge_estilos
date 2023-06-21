import React, { FC, Dispatch, SetStateAction } from 'react';
import { InputStyled, Error } from './Input.Styled';

export interface InputField {
  label: string;
  type: string;
  placeholder: string;
  value: string | string[];
  error?: string;
}

export interface InputProps {
  inputInfo: InputField;
  onChange: Dispatch<SetStateAction<string>>;
  resetError: Dispatch<SetStateAction<string>>;
}

const Input: FC<InputProps> = ({ inputInfo, onChange, resetError }) => {
  const { placeholder, type, label, value, error } = inputInfo;
  return (
    <>
      <InputStyled
        id={label}
        className={''}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck="false"
        data-lpignore="true"
        defaultValue={value}
        onChange={(e) => {
          onChange(e.target.value);
          resetError('');
        }}
      />
      <Error>{error}</Error>
    </>
  );
};

export default Input;
