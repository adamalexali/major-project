import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Card, Button } from 'react-bootstrap';
import './App.css';
export class Blog extends Component {
  render() {
    return (
      <Container className='my-3 main-content'>
        <Row>
          <h1 className='mb-4'>Blog</h1>
          <Card style={{ width: '20rem' }} className='mx-auto mb-4 p-3'>
            <Card.Img variant='top' src='https://picsum.photos/200' />
            <Card.Body>
              <Card.Title>Addressing the digital divide</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Link to='/blog/digital-divide'>Read more</Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className='mx-auto mb-4 p-3'>
            <Card.Img variant='top' src='https://picsum.photos/200' />
            <Card.Body>
              <Card.Title>The internet as a commons</Card.Title>
              <Card.Text>
                Egestas egestas fringilla phasellus faucibus scelerisque
                eleifend donec pretium vulputate.
              </Card.Text>
              <Link to='#'>Read more</Link>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default Blog;
