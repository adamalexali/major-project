import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
export class DigitalDivide extends Component {
  render() {
    return (
      <Container className='my-3 main-content'>
        <Row>
          <div>
            <h1>Addressing the Digital Divide</h1>
            <p>By: Adam Ali</p>
          </div>
          <div className='mb-4'>
            <h5>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </h5>
          </div>
          <div>
            <h2>Introduction</h2>
            <p>
              The most difficult thing about connecting a building to the
              internet is the internal wiring. If a building has its own wiring
              to the apartments, it is quick and easy to connect it to the
              internet. The building is free to negotiate the best connection at
              a price way below individual apartments paying for a connection.
            </p>
            <p>
              This post will describe how to make your building “mesh ready”.
              Once a building is mesh ready it can choose how it will connect to
              the internet- either wireless or fiber. An NYC Mesh wireless
              connection will probably be the best value and the quickest to
              install. It is also possible to connect with fiber, either a
              business fiber lease or “dark” unused fiber that can be connected
              inside a data center. NYC Mesh can also manage fiber connections.
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

export default DigitalDivide;
