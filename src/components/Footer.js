import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../src/App.css';
export class Footer extends Component {
  render() {
    return (
      <Container>
        <footer className='my-3'>
          <Row>
            <Col col-4>
              <h5>Community</h5>
              <ul className='unstyled-ul'>
                <li>
                  <a href='#' className='text-muted'>
                    Slack
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Element
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Meetup
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Newsletter
                  </a>
                </li>
              </ul>
            </Col>
            <Col col-4>
              <h5>Resources</h5>
              <ul className='unstyled-ul'>
                <li>
                  <Link to='/faq' className='text-muted'>
                    FAQ
                  </Link>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Docs
                  </a>
                </li>
                <li>
                  <Link to='/donate' className='text-muted'>
                    Donate
                  </Link>
                </li>
                <li>
                  <Link to='/blog' className='text-muted'>
                    Blog
                  </Link>
                </li>
              </ul>
            </Col>
            <Col col-4>
              <h5>Social</h5>
              <ul className='unstyled-ul'>
                <li>
                  <a href='#' className='text-muted'>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='#' className='text-muted'>
                    YouTube
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
