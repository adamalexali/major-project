import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Map from './Map';
import Home from './Home';
import Faq from './Faq';
import Blog from './Blog';
import DigitalDivide from './DigitalDivide';
import Donate from './Donate';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Container fluid className='p-0'>
        <Navigation />
        <Routes>
          <Route path='/map' element={<Map />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/digital-divide' element={<DigitalDivide />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}
