import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

export class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='md' bg='white' variant='light'>
        <Container className='p-0'>
          <Navbar.Brand href='/'>
            <strong>TDotComm</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav as='ul'>
              <Nav.Item as='li'>
                <LinkContainer to='/faq'>
                  <Nav.Link>FAQ</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item as='li'>
                <LinkContainer to='/map'>
                  <Nav.Link>Map</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item as='li'>
                <LinkContainer to='/blog'>
                  <Nav.Link>Blog</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item as='li'>
                <LinkContainer to='/donate'>
                  <Nav.Link>Donate</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
