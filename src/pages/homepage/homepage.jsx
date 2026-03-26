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

const HomePage = () => {
  return (
    <div className="homepage">
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 2000, 
      }}>
        <Header />
        <MyNavbar />
      </div>
      
      <main style={{ paddingTop: '120px' }}>
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