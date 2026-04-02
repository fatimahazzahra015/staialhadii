import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import SertifikatImg from '../../assets/akreditasi.png'; 
import './akreditasi.css';

const Akreditasi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dataAkreditasi = [
    {
      id: "0",
      prodi: "Pendidikan Agama Islam",
      strata: "S1",
      peringkat: "A",
      nomorSk: "XXXXXXXXXXXXXX",
      masaBerlaku: "08/08/2030",
      linkUnduh: "#"
    },
    {
      id: "1",
      prodi: "Pendidikan Bahasa Arab",
      strata: "S1",
      peringkat: "A",
      nomorSk: "XXXXXXXXXXXXXX",
      masaBerlaku: "08/08/2030",
      linkUnduh: "#"
    }
  ];

  return (
    <div className="Akreditasi-Page">
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

      <main className="Akreditasi-content" >
        <Container className="custom-container-1440">
          <nav className="custom-breadcrumb mb-4">
            <Link to="/" className="text-decoration-none text-muted">Home</Link>
            <span className="mx-2">/</span>
            <span className="active text-dark fw-bold">Akreditasi</span>
          </nav>

          <h1 className="page-main-title mb-4">Akreditasi</h1>

          <Row className="align-items-center mb-5 gx-lg-5">
            <Col lg={7} className="mb-4 mb-lg-0">
              <div className="sertifikat-wrapper p-2 border shadow-sm">
                <img 
                  src={SertifikatImg} 
                  alt="Sertifikat Akreditasi" 
                  className="img-fluid w-100" 
                />
              </div>
            </Col>
            <Col lg={5}>
              <div className="akreditasi-detail">
                <h2 className="detail-title">Akreditasi Baik Sekali</h2>
                <p className="sk-number text-muted mb-3">NO SK: XXXXXXXXXXXXXX</p>
                <p className="detail-desc text-secondary">
                  Sertifikat akreditasi merupakan bukti formal kualitas mutu pendidikan di lingkungan kampus STAI Al-Hadi Bojonegoro sesuai dengan standar nasional.
                </p>
                <a href="#unduh" className="btn-unduh-text text-decoration-none">Unduh</a>
              </div>
            </Col>
          </Row>

          {/* --- SECTION TABEL (Desktop Only) --- */}
          <section className="table-section mt-5 d-none d-lg-block">
            <div className="table-responsive custom-table-wrapper">
              <Table hover className="align-middle mb-0">
                <thead>
                  <tr>
                    <th>Institusi/ Program Studi</th>
                    <th>Strata</th>
                    <th>Peringkat</th>
                    <th>Nomor SK</th>
                    <th>Masa Berlaku</th>
                    <th>Unduh</th>
                  </tr>
                </thead>
                <tbody>
                  {dataAkreditasi.map((item) => (
                    <tr key={item.id}>
                      <td className="fw-bold text-dark">{item.prodi}</td>
                      <td className="text-center">{item.strata}</td>
                      <td className="text-center">
                        <span className="badge-peringkat">{item.peringkat}</span>
                      </td>
                      <td className="text-muted">{item.nomorSk}</td>
                      <td>{item.masaBerlaku}</td>
                      <td><a href={item.linkUnduh} className="link-unduh-table">Unduh</a></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </section>

          {/* --- SECTION ACCORDION (Mobile Only) --- */}
          <section className="accordion-section mt-4 d-lg-none">
            <div className="accordion-header-custom p-3">
              <Row className="mx-0">
                <Col xs={9} className="fw-bold text-center ps-4">Institusi/ Program Studi</Col>
                <Col xs={3} className="fw-bold text-end">Strata</Col>
              </Row>
            </div>
            
            <Accordion flush className="custom-akreditasi-accordion">
              {dataAkreditasi.map((item) => (
                <Accordion.Item eventKey={item.id} key={item.id}>
                  <Accordion.Header>
                    <div className="d-flex justify-content-around align-items-center w-100">
                      <span className="prodi-name text-dark">{item.prodi}</span>
                      <span className="strata-label text-dark">{item.strata}</span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="accordion-detail-row">
                      <span className="label">Nomor SK</span>
                      <span className="value text-muted">{item.nomorSk}</span>
                    </div>
                    <div className="accordion-detail-row">
                      <span className="label">Peringkat</span>
                      <span className="value fw-medium text-dark">{item.peringkat}</span>
                    </div>
                    <div className="accordion-detail-row border-0">
                      <span className="label">Unduh</span>
                      <span className="value">
                        <a href={item.linkUnduh} className="text-success-custom fw-bold text-decoration-none">Unduh</a>
                      </span>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </section>

        </Container>
      </main>

      <Banner />
      <Footer />
    </div>
  );
};

export default Akreditasi;