import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import './App.css';
export class Donate extends Component {
  render() {
    return (
      <Container className='my-3 main-content'>
        <Row>
          <h1>Donate</h1>
          <h2>Your donation helps fund a better internet!</h2>
          <div>
            <p>
              The Internet is central to our lives, but in New York City far too
              many people don't have access.
            </p>
          </div>
          <Container className='text-center'>
            <Row className='justify-content-md-center'>
              <Col>
                <Button className='p-3' variant='outline-success'>
                  $10
                </Button>
              </Col>
              <Col>
                <Button className='p-3' variant='outline-success'>
                  $20
                </Button>
              </Col>
              <Col>
                <Button className='p-3' variant='outline-success'>
                  $30
                </Button>
              </Col>
            </Row>
            <Row className='justify-content-md-center'>
              <Col>
                <InputGroup className='mt-4 mx-auto' id='moneyInput'>
                  <InputGroup.Text className='py-3'>$</InputGroup.Text>
                  <FormControl aria-label='Amount (to the nearest dollar)' />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
          </Container>
          <Container className='text-center mt-4'>
            <Button variant='primary'>Donate now</Button>
          </Container>
          <Container className='text-center mt-4 text-muted'>
            <p>
              ETH address:{' '}
              <a
                href='https://etherscan.io/address/0xfb6F8D5DD687E77Aa9275a1Cb397dA3c23aAf342'
                target='_blank'
              >
                0xfb6F…f342
              </a>
            </p>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Donate;
