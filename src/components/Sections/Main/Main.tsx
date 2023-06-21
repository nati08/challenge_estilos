import React, { FC } from 'react';
import { Container, Intro } from './Main.Styled';

const Main: FC = () => (
  <Container>
    <Intro>
      <img className="icon" src="/images/illustration-intro.png" title="Intro"></img>
      <div className="title">All your files in one secure location, accessible anywhere.</div>
      <div className="description">
        Fily stores all your most important files in one secure location. Access them wherever you need, share and
        collaboarate with friends family, and co-workers.
      </div>
    </Intro>
  </Container>
);

export default Main;
