import React, { Component, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Toast,
} from 'react-bootstrap';
import './App.css';

export default function Donate() {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Container className='my-3 main-content'>
      <Row>
        <h1>Donate</h1>
        <h2>Your donation helps fund a better internet!</h2>
        <div>
          <p>
            Although we don't charge to use the community network, donating some
            money goes a long way towards upkeeping the service and ensuring
            more people have access. Consider donating monthly using one of the
            options below. We even accept crypto!
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
          <Button onClick={toggleShowA} variant='primary'>
            Donate now
          </Button>
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
      <Row>
        <Col md={6} className='mb-2'>
          <Toast show={showA} onClose={toggleShowA} delay={3000} autohide>
            <Toast.Header>
              <img
                src='holder.js/20x20?text=%20'
                className='rounded me-2'
                alt=''
              />
              <strong className='me-auto'>Thank you!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              The TDotComm team thanks you for your contribution!
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
}
