import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Warta from '../../assets/warta.png'; 
import './homepage.css';

const WartaAkademik = () => {
  const beritaData = [
    { id: 1, title: "Lorem ipsum dolor sit amet", date: "22 Maret 2026", img: Warta },
    { id: 2, title: "Lorem ipsum dolor sit amet", date: "22 Maret 2026", img: Warta },
    { id: 3, title: "Lorem ipsum dolor sit amet", date: "22 Maret 2026", img: Warta },
    { id: 4, title: "Lorem ipsum dolor sit amet", date: "22 Maret 2026", img: Warta },
    { id: 5, title: "Lorem ipsum dolor sit amet", date: "22 Maret 2026", img: Warta },
  ];

  return (
    /* Gunakan px-container-custom agar padding kiri-kanan sama dengan section lain */
    <section className="warta-section px-container-custom py-5">
      <Container fluid> {/* Pakai Fluid agar padding container diatur oleh px-container-custom */}
        <h2 className="warta-title mb-5">Warta Akademik</h2>
        
        <Row className="warta-row">
          {/* BERITA UTAMA */}
          <Col lg={6} xs={12} className="mb-4 mb-lg-0">
            <Card className="main-news-card border-0">
              <Card.Img src={beritaData[0].img} className="rounded-0 news-img-lg" />
              <Card.Body className="px-0">
                <Card.Title className="fw-bold fs-6">{beritaData[0].title}</Card.Title>
                <Card.Text className="text-muted small">{beritaData[0].date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* LIST BERITA KANAN */}
          <Col lg={6} xs={12}>
            <Row>
              {beritaData.slice(1, 5).map((item) => (
                <Col key={item.id} xs={12} md={6} className="mb-4">
                  <Card className="border-0 sub-news-card h-100">
                    <Card.Img src={item.img} className="rounded-0 news-img-sm" />
                    <Card.Body className="px-0">
                      <Card.Title className="news-sub-title">{item.title}</Card.Title>
                      <Card.Text className="text-muted small">{item.date}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <div className="text-center mt-2">
          <Button className="btn-lihat-semua">
            Lihat Semua <span className="ms-2">&rarr;</span>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default WartaAkademik;