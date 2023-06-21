import React, { FC } from 'react';
import { Comment, Container } from './Comments.Styled';

const Comments: FC = () => (
  <Container>
    <Comment>
      <div className="description">
        Fylo has improved our team productivity by an order of magniture. Since Making the switch our tema has becamo a
        well-olled collaboration machine
      </div>
      <div className="author">
        <img src="/images/profile-1.jpg" title="profile-1"></img>
        <div className="user">
          <span className="name">Satish Patel</span>
          <span className="job">Founder & CEO, Huddle</span>
        </div>
      </div>
    </Comment>
    <Comment>
      <div className="description">
        Fylo has improved our team productivity by an order of magniture. Since Making the switch our tema has becamo a
        well-olled collaboration machine
      </div>
      <div className="author">
        <img src="/images/profile-2.jpg" title="profile-2"></img>
        <div className="user">
          <span className="name">Bruce McKenzie</span>
          <span className="job">Founder & CEO, Huddle</span>
        </div>
      </div>
    </Comment>
    <Comment>
      <div className="description">
        Fylo has improved our team productivity by an order of magniture. Since Making the switch our tema has becamo a
        well-olled collaboration machine
      </div>
      <div className="author">
        <img src="/images/profile-3.jpg" title="profile-3"></img>
        <div className="user">
          <span className="name">Iva Boyd</span>
          <span className="job">Founder & CEO, Huddle</span>
        </div>
      </div>
    </Comment>
  </Container>
);

export default Comments;
