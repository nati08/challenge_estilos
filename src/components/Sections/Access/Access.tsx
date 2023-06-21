import React, { FC, useState } from 'react';
import { Container, AccessContainer, FormContainer } from './Access.Styled';
import Button from '@/components/Button/Button';
import Input, { InputField } from '@/components/Input/Input';

const Access: FC = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (value === '') {
      setError('Please enter a valid email address');
    }
    event.preventDefault();
  };
  //onChange={(e) => setValue(e.target.value)}
  const inputField: InputField = {
    label: '',
    value: '',
    type: 'text',
    placeholder: 'email@example.com',
    error: error,
  };

  return (
    <Container>
      <AccessContainer>
        <h1>Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
          our support team would be happy to help you.
        </p>
        <FormContainer onSubmit={handleSubmit}>
          <label>
            <Input key={'email'} inputInfo={inputField} onChange={setValue} resetError={setError} />
          </label>
          <Button text={'Get Started For Free'} />
        </FormContainer>
      </AccessContainer>
    </Container>
  );
};

export default Access;
