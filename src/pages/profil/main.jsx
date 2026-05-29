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
               STIT AI Hadi Bojonegoro adalah lembaga pendidikan tinggi berbasis kultur pesantren dengan kekhasan pada penguatan khazanah turats (kitab-kitab klasik) yang terintegrasi dengan sistem pendidikan modern. Sebagai mitra strategis pemerintah, lembaga ini berkomitmen memajukan mutu pendidikan tinggi Islam, memperluas akses masyarakat, serta melahirkan pendidik dan dai-educator yang berkarakter Qur'ani, cakap digital, dan berkhidmat untuk kemaslahatan.
              </p>
            </div>
          </Col>
          
          <Col md={6}>
            <div className="img-composition-wrapper">
              <img 
                src={MainImage} 
                alt="Suasana Kelas STIT Al Hadi" 
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