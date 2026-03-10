import React from 'react';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import Hero from './hero';
import WartaBerita from './wartaakademik';
import ProfilSingkat from './profilsingkat';
import Prodi from './prodi';
import Card from './card';
import AgendaKampus from './agenda';
import Banner from '../../components/banner';
import Footer from '../../components/footer';

// HomePage.js
const HomePage = () => {
  return (
    <div className="homepage">
      {/* Area Navigasi yang dikunci di atas */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 2000, 
        backgroundColor: '#fff' 
      }}>
        <Header />
        <MyNavbar />
      </div>
      
      {/* Berikan padding-top sebesar total tinggi Header + Navbar (± 125px) */}
      <main style={{ paddingTop: '125px' }}>
        <Hero />
        <WartaBerita />
        <ProfilSingkat />
        <Prodi />
        <Card />
        <AgendaKampus />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;