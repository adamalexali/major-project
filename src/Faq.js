import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';

export class Faq extends Component {
  render() {
    return (
      <Container className='my-3 main-content'>
        <Row>
          <h1 className='text-center'>Frequently Asked Questions</h1>
          <Container className='my-3'>
            <h2></h2>
          </Container>
          <div>
            <p>
              The Internet is central to our lives, but in New York City far too
              many people don't have access.
            </p>
            <p>
              We are a diverse group of volunteers dedicated to ending the
              digital divide and extending high-speed, reliable internet to all
              New Yorkers. You can help by joining our community network to get
              online, volunteering to connect neighbors or grow the network, and
              donating to improve our community infrastructure and ensure access
              for all.
            </p>
            <p>
              NYC Mesh is a neutral network and we do not monitor, collect,
              store or block any user data or content. By joining our network
              you agree to extend it to others!
            </p>
            <p>
              We can connect your apartment to the internet by putting an
              antenna on the roof of your building and running a cable to your
              apartment.
            </p>
            <p>
              We can also connect your whole building using fiber with speeds of
              10 gigabit or more. Ask us about fiber to the home (FTTH).
            </p>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Faq;
