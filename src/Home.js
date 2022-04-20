import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

export class Home extends Component {
  render() {
    return (
      <Container className='my-3 main-content'>
        <Row>
          <h1>Home</h1>
          <Container>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit officiis molestiae itaque cupiditate ea minima
              excepturi aspernatur? Dolorum quaerat voluptatem, voluptas cum
              nisi ipsum quia, non, reiciendis aperiam fuga doloremque?
            </p>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Home;
