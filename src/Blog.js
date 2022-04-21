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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to='/blog/digital-divide'>Read more</Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className='mx-auto mb-4 p-3'>
            <Card.Img variant='top' src='https://picsum.photos/200' />
            <Card.Body>
              <Card.Title>The internet as a commons</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
