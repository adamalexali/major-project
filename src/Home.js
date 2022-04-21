import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';
export class Home extends Component {
  render() {
    return (
      <Container className='my-3 main-content'>
        <Row>
          <h1>TDotComm</h1>
          <h2>Toronto's Wireless Community Network</h2>
          <Container className='text-center mb-4'>
            <button type='button' className='btn btn-primary'>
              Join now
            </button>
          </Container>
          <div>
            <p>
              Toronto is home to Canada's best digital infrastructure, and yet,
              many are still facing barriers to accessing the internet. This has
              become even more prevalent with the pandemic, which highlighted
              the critical need for internet among all people.
            </p>
            <p>
              Among the greatest issues are access due to costs and reliability.{' '}
              <span className='emphasis-span'>
                {' '}
                Half of Toronto's low-income households (52%) and of those aged
                60 and older (48%)
              </span>{' '}
              report download speeds below the national target of 50 Mbps.
              Futhermore,{' '}
              <span className='emphasis-span'>
                half of all disconnected Toronto households
              </span>{' '}
              are not connected due to the cost, and{' '}
              <span className='emphasis-span'>61%</span> say it is impacting
              their ability to access critical services and information
            </p>
            <p>
              We are a diverse group of volunteers dedicated to ending the
              digital divide and providing community-owned, high-speed and
              reliable internet to Toronto residents. We are always looking out
              for people who are interested in being a part of the movement—you
              can contribute your technical skills, people skills, or donate if
              you are able!
            </p>
            <p>
              Interested in learning more? Check out our{' '}
              <Link to='/faq'>FAQs</Link> page.
            </p>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Home;
