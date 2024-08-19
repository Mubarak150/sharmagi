import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from  './routes/Home'
import Contact from  './routes/Contact'
import Booking from  './routes/Booking'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// applying navbar and footer to every page... while changing the rest of the contents as per the URL..
function App () {

  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />       
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

