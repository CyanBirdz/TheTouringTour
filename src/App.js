import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SuperLaningPage from './SuperLaningPage';
import Pricing from './Pricing';
import TheQ from './Questionare';
import G from './TheQuestion'
import Consa from './ContaUs'


export default function Example() {

  return (
    <Router>
    
    <div className="app-container">
     
      <Routes>
        <Route path="/" element={<SuperLaningPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Questionare" element={<G />} />
      </Routes>
    </div>
  </Router>
  );
}
