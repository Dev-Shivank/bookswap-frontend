import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Podcasts from './pages/Podcasts';
// import Guests from './pages/Guests';
import Contact from './pages/Contact';
import Category from './pages/Category';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-50">
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/podcasts" element={<Podcasts />} />
            {/* <Route path="/guests" element={<Guests />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:slug" element={<Category />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;