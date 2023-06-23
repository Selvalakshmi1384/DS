import React from 'react';
import Navbar from './navbar';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Page1 from './Page1';
import Footer from './Footer';
import Technology from './Technology';
import Lifestyle from './Lifestyle';
import Travel from './Travel';
import SkillsPage from './SkillsPage';
import BlogPage from './BlogPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />

        <Routes>
        <Route exact path="/" element={<Page1 />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/skills" element={<SkillsPage/>}/>
          <Route path="/blog-page" element={<BlogPage/>}/>
          
        </Routes>
      </Router>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
      <Footer/>
      </div>
      </div>
      );
};
export default App;


      
  
