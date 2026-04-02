import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainImage from '../../assets/profil.png'; 
import SubImage from '../../assets/warta.png';
import './profil.css';

const ProfilMain = () => {
  return (
    <section className="profil-main">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <h2 className="profil-main-title">
              Membangun Fondasi, Menata Masa Depan
            </h2>
            <div className="profil-main-text">
              <p>
                STAI Al Hadi lahir dari semangat pengabdian para pendiri untuk membangun pusat kaderisasi pendidik dan generasi muslim unggul. Berlandaskan tradisi pesantren yang kokoh dan komitmen terhadap mutu pendidikan tinggi, STAI Al Hadi melangkah dengan visi jangka panjang menjadi institusi yang adaptif, profesional, dan relevan bagi masyarakat.
              </p>
              <p>
                STAI Al Hadi lahir dari semangat pengabdian para pendiri untuk membangun pusat kaderisasi pendidik dan generasi muslim unggul. Berlandaskan tradisi pesantren yang kokoh dan komitmen terhadap mutu pendidikan tinggi, STAI Al Hadi melangkah dengan visi jangka panjang menjadi institusi yang adaptif, profesional, dan relevan bagi masyarakat.
              </p>
            </div>
          </Col>
          
          <Col md={6}>
            <div className="img-composition-wrapper">
              <img 
                src={MainImage} 
                alt="Suasana Kelas STAI Al Hadi" 
                className="img-main"
              />
              <img 
                src={SubImage} 
                alt="Diskusi Mahasiswa" 
                className="img-sub"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProfilMain;