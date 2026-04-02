import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Tambahkan ini
import Homepages from './pages/homepage/homepage';
import Warta from './pages/wartaakademik/warta';
import WartaDetail from './pages/wartaakademik/wartadetail';
import VisiMisi from './pages/visimisi/visimisi';
import Prodi from './pages/prodi/prodi';
import Akreditasi from './pages/akreditasi/akreditasi';
import KalenderAkademik from './pages/kalenderakademik/kalender';
import Agenda from './pages/agenda/agenda';
import AgendaDetail from './pages/agenda/agendadetail';
import Dosen from './pages/dosen/dosen';
import Logo from './pages/logo/logo';
import Profil from './pages/profil/profil'; // Pastikan ini ada jika diperlukan
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
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/prodi/:slug" element={<Prodi />} />
          <Route path="/akreditasi" element={<Akreditasi />} />
          <Route path="/kalender-akademik" element={<KalenderAkademik />} /> {/* Tambahkan ini */}
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/agenda/:id" element={<AgendaDetail />} />
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/profil" element={<Profil />} /> {/* Pastikan ini ada jika diperlukan */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;