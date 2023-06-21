import React, { FC } from 'react';
import { Container } from './Landing.Styled';
import Header from '../Sections/Header/Header';
import Footer from '../Sections/Footer/Footer';
import Main from '../Sections/Main/Main';
import Comments from '../Sections/Comments/Comments';
import Services from '../Sections/Services/Services';
import Access from '../Sections/Access/Access';
import Productive from '../Sections/Productive/Productive';

const Landing: FC = () => (
  <>
    <Container>
      <Header></Header>
      <Main></Main>
      <Services></Services>
      <Productive></Productive>
      <Comments></Comments>
      <Access></Access>
      <Footer></Footer>
    </Container>
  </>
);

export default Landing;
