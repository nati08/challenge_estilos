import React, { FC } from 'react';
import { Container } from './Landing.Styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Comments from '../Comments/Comments';
import Services from '../Services/Services';

const Landing: FC = () => (
  <>
    <Container>
      <Header></Header>
      <Main></Main>
      <Services></Services>
      <Comments></Comments>
      <Footer></Footer>
    </Container>
  </>
);

export default Landing;
