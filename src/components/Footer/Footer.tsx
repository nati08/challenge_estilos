import React, { FC } from 'react';
import { Container, Logo, Information, InfoWithIcon, SocialMedia } from './Footer.Styled';

const Footer: FC = () => (
  <Container>
    <div>
      <Logo>
        <a href="#" className="brand">
          <img src="/images/logo.svg" alt="brand" />
        </a>
      </Logo>
      <Information>
        <div className="column">
          <InfoWithIcon>
            <img src="/images/icon-location.svg" alt="location" />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </span>
          </InfoWithIcon>
        </div>
        <div className="column">
          <InfoWithIcon>
            <img src="/images/icon-phone.svg" alt="phone" />
            <span>+1-543-123-4567</span>
          </InfoWithIcon>
          <InfoWithIcon>
            <img src="/images/icon-email.svg" alt="email" />
            <span>example@fylo.com</span>
          </InfoWithIcon>
        </div>
        <div className="column">
          <span>
            <a href="#" target="_blank" title="About Us">
              About Us
            </a>
          </span>
          <span>
            <a href="#" target="_blank" title="Jobs">
              Jobs
            </a>
          </span>
          <span>
            <a href="#" target="_blank" title="Press">
              Press
            </a>
          </span>
          <span>
            <a href="#" target="_blank" title="Blog">
              Blog
            </a>
          </span>
        </div>
        <div className="column">
          <span>
            <a href="#" target="_blank" title="Contact Us">
              Contact Us
            </a>
          </span>
          <span>
            <a href="#" target="_blank" title="Terms">
              Terms
            </a>
          </span>
          <span>
            <a href="#" target="_blank" title="Privacy">
              Privacy
            </a>
          </span>
        </div>
        <div className="column">
          <SocialMedia>
            <a href="#" target="_blank" title="facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" title="twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" target="_blank" title="instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </SocialMedia>
        </div>
      </Information>
    </div>
  </Container>
);

export default Footer;
