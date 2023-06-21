import React, { FC } from 'react';
import { Container, Details } from './Productive.Styled';
import Link from '@/components/Link/Link';

const Productive: FC = () => (
  <Container>
    <img src="/images/illustration-stay-productive.png" title="Stay productive"></img>
    <Details>
      <div className="title">Stay productibe, wherever you are</div>
      <div className="description">
        Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage
        needs.
      </div>
      <div className="description">
        Securely share files and folders with friends, family and colleagues for live collaboration. No email
        attachments required.
      </div>
      <div className="description">
        <Link link="#">
          <>
            See how Fylo works <img src="/images/icon-arrow.svg" title="Filo"></img>
          </>
        </Link>
      </div>
    </Details>
  </Container>
);

export default Productive;
