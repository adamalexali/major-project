import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export class Footer extends Component {
  render() {
    return (
      <Container>
        <footer className='my-3'>
          <Row>
            <Col col-4>
              <h5>Features</h5>
              <ul className='unstyled-ul'>
                <li>
                  <a href='#' className='text-muted'>
                    Feature 1
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Feature 2
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Feature 3
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Feature 4
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Feature 5
                  </a>
                </li>
              </ul>
            </Col>
            <Col col-4>
              <h5>Resources</h5>
              <ul className='unstyled-ul'>
                <li>
                  <a href='#' className='text-muted'>
                    Resource 1
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Resource 2
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Resource 3
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Resource 4
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Resource 5
                  </a>
                </li>
              </ul>
            </Col>
            <Col col-4>
              <h5>About</h5>
              <ul className='unstyled-ul'>
                <li>
                  <a href='#' className='text-muted'>
                    About 1
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    About 2
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    About 3
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    About 4
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    About 5
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </footer>
      </Container>
    );
  }
}

export default Footer;
