import React from 'react';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import ProfilHero from './hero';
import ProfilMain from './main';
import ProfilMisi from './misi';
import ProfilCard from './card';
import ProfilAgenda from './agenda';
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
      
      <main style={{ paddingTop: '20px' }}>
        <ProfilHero />
        <ProfilMain />
        <ProfilMisi />
        <ProfilCard />
        <ProfilAgenda />
      </main>
       <Banner />
       <Footer />
    </div>
  );
}

export default HomePage;