import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import Profil2 from '../../assets/profil2.png'; 
import Profil3 from '../../assets/profil3.avif'; 
import './homepage.css';

const ProfilSingkat = () => {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate('/profil');
  };

  return (
    <section className="profil-singkat-section">
      <Container className="profil-container">
        <Row className="align-items-center">
          
          <Col lg={6} xs={12} className="order-1">
            <h2 className="profil-title">
              Pendidikan Islam <br />
              Unggul untuk <br />
              Peradaban
            </h2>
            
            <div className="description-container d-none d-lg-block">
              <p className="profil-description">
                STIT AI Hadi Bojonegoro adalah lembaga pendidikan tinggi berbasis kultur pesantren dengan kekhasan pada penguatan khazanah turats (kitab-kitab klasik) yang terintegrasi dengan sistem pendidikan modern. Sebagai mitra strategis pemerintah, lembaga ini berkomitmen memajukan mutu pendidikan tinggi Islam, memperluas akses masyarakat, serta melahirkan pendidik dan dai-educator yang berkarakter Qur'ani, cakap digital, dan berkhidmat untuk kemaslahatan.
              </p>
              <Button className="btn-profil-more" onClick={handleNavigate}>
                Lihat Semua <span className="ms-2">&rarr;</span>
              </Button>
            </div>
          </Col>

          <Col lg={6} xs={12} className="order-2 mt-lg-0">
            <div className="img-combined-wrapper">
              <div className="img-main">
                <img src={Profil2} alt="Campus Building" className="img-fluid" />
              </div>
              <div className="img-overlay-top">
                <img src={Profil3} alt="Activity" className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProfilSingkat;