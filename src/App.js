import React  from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Footer from "./components/Footer";
import Contact from './pages/Contact';
import Services from './pages/Services';
import { useState } from 'react';

function App() {
   const [openLinks, setOpenLinks] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home setOpenLinks={setOpenLinks}/>} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/hizmetlerimiz" element={<Services />} />
        </Routes>
      </div>
      <Footer />

    </Router>
  );
}

export default App;
