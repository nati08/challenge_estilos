import React, { FC } from 'react';
import { Container } from './Main.Styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main: FC = () => (
  <>
    <Container>
      <Header></Header>
    </Container>
    <Footer></Footer>
  </>
);

export default Main;
