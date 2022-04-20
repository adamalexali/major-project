import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './Map';
import Home from './Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';

export default function App() {
  return (
    <Router>
      <Container fluid className='p-0'>
        <Navigation />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/map' element={<Map />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
