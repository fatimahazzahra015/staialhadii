import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Tambahkan ini
import Homepages from './pages/homepage/homepage';
import Warta from './pages/wartaakademik/warta';
import WartaDetail from './pages/wartaakademik/wartadetail';
import ScrollToTop from './components/ScrollToTop'; // Opsional tapi sangat disarankan
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* ScrollToTop memastikan layar kembali ke atas saat pindah halaman */}
        <ScrollToTop /> 
        
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/warta" element={<Warta />} />
          <Route path="/warta/:id" element={<WartaDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;