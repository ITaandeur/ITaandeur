import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { OverOns } from './pages/OverOns';
import { Diensten } from './pages/Diensten';
import { Tarieven } from './pages/Tarieven';
import { FAQ } from './pages/FAQ';
import { StoringMelden } from './pages/StoringMelden';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/tarieven" element={<Tarieven />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/storing-melden" element={<StoringMelden />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;