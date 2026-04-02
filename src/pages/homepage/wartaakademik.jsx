import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Import data dari file Warta
import { allNews } from '../wartaakademik/warta.jsx'; // Pastikan path filenya benar
import './homepage.css';

const WartaAkademik = () => {
  // Ambil 5 berita terbaru saja untuk ditampilkan di homepage
  const beritaData = allNews.slice(0, 5);

  if (beritaData.length === 0) return null;

  return (
    <section className="warta-section mx-auto">
      <Container> 
        <h2 className="warta-title mb-4 mb-lg-5 text-center text-lg-start">Warta Akademik</h2>
        
        <Row>
          {/* BERITA UTAMA (HIGHLIGHT) */}
          <Col lg={6} xs={12} className="mb-5 mb-lg-0">
            <Link to={`/warta/${beritaData[0].id}`} className="text-decoration-none">
              <Card className="main-news-card border-0 bg-transparent hov-card">
                <Card.Img src={beritaData[0].img} className="rounded-0 news-img-lg" />
                <Card.Body className="pb-0">
                  <Card.Text className="text-muted small mb-2">{beritaData[0].date}</Card.Text>
                  <Card.Title className="main-news-title fw-bold text-dark">{beritaData[0].title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          {/* LIST BERITA KANAN */}
          <Col lg={6} xs={12}>
            <Row>
              {beritaData.slice(1, 5).map((item) => (
                <Col key={item.id} xs={12} md={6} className="mb-4">
                  <Link to={`/warta/${item.id}`} className="text-decoration-none">
                    <Card className="border-0 sub-news-card h-100 bg-transparent hov-card">
                      <Card.Img src={item.img} className="rounded-0 news-img-sm" />
                      <Card.Body className="pb-0">
                        <Card.Text className="text-muted small mb-1">{item.date}</Card.Text>
                        <Card.Title className="news-sub-title text-dark">{item.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Link to="/warta"> 
            <Button className="btn-lihat-semua">
              Lihat Semua <span className="ms-2">&rarr;</span>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default WartaAkademik;