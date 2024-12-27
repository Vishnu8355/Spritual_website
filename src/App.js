import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import About from './Components/Pages/About';
import Chakratest from './Components/Pages/Chakratest';
import Contactus from './Components/Pages/Contactus';
import HealingPage from './Components/Pages/HealingPage';
import Products from './Components/Pages/Products';
import Tranningworkshop from './Components/Pages/Tranningworkshop';

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/chakratest" element={<Chakratest />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/healingpage" element={<HealingPage />} />
          <Route path="/tranningworkshop" element={<Tranningworkshop />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
