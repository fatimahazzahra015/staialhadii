import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './profil.css';

const ProfilMisi = () => {
  const misiData = [
    {
      id: '01',
      text: 'Menjadi perguruan tinggi Islam unggul dalam mencetak generasi Qur’ani berkarakter dan responsif terhadap perkembangan zaman.',
    },
    {
      id: '02',
      text: 'Menjadi perguruan tinggi Islam unggul dalam mencetak generasi Qur’ani berkarakter dan responsif terhadap perkembangan zaman.',
    },
    {
      id: '03',
      text: 'Menjadi perguruan tinggi Islam unggul dalam mencetak generasi Qur’ani berkarakter dan responsif terhadap perkembangan zaman.',
    },
  ];

  return (
    <section className="profil-misi">
      <Container>
        <Row className="g-4 justify-content-center">
          {misiData.map((item) => (
            <Col key={item.id} lg={4} md={6} xs={12}>
              <div className="misi-card">
                <div className="misi-number">
                  <span>{item.id}</span>
                </div>
                <h3 className="misi-title">Mission Statement</h3>
                <p className="misi-text">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProfilMisi;