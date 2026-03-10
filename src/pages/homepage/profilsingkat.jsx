import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Profil from '../../assets/profil.png'; 
import './homepage.css';

const ProfilSingkat = () => {
  return (
    <section className="profil-singkat-section">
      <Container fluid className="px-container-custom p-5">
        <Row className="align-items-center">
          
          {/* JUDUL - Order 1 */}
          <Col lg={6} xs={12} className="order-1">
            <h2 className="profil-title">
              Pendidikan Islam <br />
              Unggul untuk <br />
              Peradaban
            </h2>
            {/* Deskripsi ini hanya muncul di Desktop (lg) */}
            <div className="description-container d-none d-lg-block">
              <p className="profil-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                komodo consequat.
              </p>
              <Button className="btn-profil-more">
                Lihat Semua <span className="ms-2">&rarr;</span>
              </Button>
            </div>
          </Col>

          {/* GAMBAR - Order 2 di Mobile */}
          <Col lg={6} xs={12} className="order-2 mt-5 mt-lg-0">
            <div className="img-combined-wrapper">
              <div className="img-main">
                <img src={Profil} alt="Campus Building" className="img-fluid" />
              </div>
              <div className="img-overlay-top">
                <img src={Profil} alt="Activity" className="img-fluid" />
              </div>
            </div>
          </Col>

          {/* DESKRIPSI & BUTTON - Hanya Muncul di Mobile (Order 3) */}
          <Col xs={12} className="order-3 d-lg-none">
            <div className="description-container text-center mx-auto">
              <p className="profil-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                komodo consequat.
              </p>
              <Button className="btn-profil-more">
                Lihat Semua <span className="ms-2">&rarr;</span>
              </Button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default ProfilSingkat;