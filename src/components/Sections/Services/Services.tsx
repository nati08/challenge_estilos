import React, { FC } from 'react';
import { Service, Container } from './Services.Styled';

const Services: FC = () => (
  <Container>
    <Service>
      <img className="icon" src="/images/icon-access-anywhere.svg" title="access"></img>
      <div className="title">Access your files, anywhere</div>
      <div className="description">
        The ability yo use a smartphone, tablet, or computer to access your account means your files follow you
        everywhere.
      </div>
    </Service>
    <Service>
      <img className="icon" src="/images/icon-security.svg" title="security"></img>
      <div className="title">Security you can trust</div>
      <div className="description">
        2-factor authentication and user-controlled encryption are just a couple of features we allow to help secure
        your files.
      </div>
    </Service>
    <Service>
      <img className="icon" src="/images/icon-collaboration.svg" title="collaboration"></img>
      <div className="title">Real-time collaboration</div>
      <div className="description">
        Securely share files and folders with friends, family and colleagues for live collaboration. No email
        attachments required.
      </div>
    </Service>
    <Service>
      <img className="icon" src="/images/icon-any-file.svg" title="file"></img>
      <div className="title">Store any type of file</div>
      <div className="description">
        Whether you`re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be
        securely stored and shared.
      </div>
    </Service>
  </Container>
);

export default Services;
