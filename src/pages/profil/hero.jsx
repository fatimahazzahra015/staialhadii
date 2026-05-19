import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfilImg from '../../assets/profil.png';
import WartaImg from '../../assets/warta.png';
import './profil.css';

const ProfilHero = () => {
  return (
    <section className="profil-hero bg-white">
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb profil-breadcrumb mb-4">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active text-dark fw-bold" aria-current="page">Profil Kami</li>
          </ol>
        </nav>

        <div className="mb-4">
          <h1 className="profil-title">Profil Kami</h1>
          <p className="profil-description">
            Program Studi S1 Pendidikan Agama Islam dirancang untuk mencetak tenaga pendidik yang kompeten dalam bidang keislaman, pedagogik, dan pengembangan karakter. Mahasiswa dibekali dengan pemahaman mendalam tentang ilmu-ilmu keislaman serta keterampilan mengajar yang relevan dengan kebutuhan pendidikan masa kini.
          </p>
        </div>

        <div className="mobile-flex-stack">
          <div className="order-img-1 mb-md-0">
            <Row>
              <Col md={6} className="mb-4 mb-md-0">
                <div className="hero-img-wrapper shadow-sm">
                  <img src={ProfilImg} alt="Kegiatan Mahasiswa" />
                </div>
              </Col>
              
              <Col md={6} className="d-none d-md-block">
                <div className="hero-img-wrapper shadow-sm">
                  <img src={WartaImg} alt="Gedung Kampus" />
                </div>
              </Col>
            </Row>
          </div>

          <div className="profil-tagline-container order-tagline">
            <h2 className="profil-tagline-text">
              Berbasis pesantren, STAI Al Hadi membentuk lulusan unggul dalam ilmu, karakter, dan pengabdian.
            </h2>
          </div>

          <div className="order-img-2 d-md-none">
            <div className="hero-img-wrapper shadow-sm">
              <img src={WartaImg} alt="Gedung Kampus Mobile" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProfilHero;