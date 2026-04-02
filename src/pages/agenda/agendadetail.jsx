import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { allAgendas } from './agenda';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner from '../../components/banner';

const AgendaDetail = () => {
  const { id } = useParams();
  const item = allAgendas.find(a => a.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) return <div className="text-center py-5">Agenda tidak ditemukan</div>;

  const currentUrl = window.location.href;

  return (
    <div className="Agenda-Page-Detail">
      <div className="fixed-top-nav">
        <Header />
        <MyNavbar />
      </div>

      <main className="agenda-main-content ">
        <Container className="custom-container-1440">
          <nav className="custom-breadcrumb mb-4" >
            <Link to="/" className="text-decoration-none text-muted">Home</Link> / 
            <Link to="/agenda" className="mx-1 text-decoration-none text-muted">Agenda Kampus</Link> / 
            <span className="active mx-1 text-dark fw-bold">Detail</span>
          </nav>

          <Row className="gx-lg-5">
            {/* Bagian Kiri (Desktop) / Konten Utama */}
            <Col lg={8} className="order-1">
              {/* 1. Judul (Selalu di atas) */}
              <h1 className="fw-bold mb-4" style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#1a1a1a' }}>
                {item.title}
              </h1>
            </Col>

            {/* Bagian Kanan (Desktop) / Sidebar yang naik ke atas di Mobile */}
            <Col lg={4} className="order-2 order-lg-3">
              <div className="sticky-sidebar" style={{ top: '100px' }}>
                {/* 2. Gambar (Muncul setelah Judul di Mobile) */}
                <div className="mb-4 shadow-sm rounded overflow-hidden cursor-pointer" onClick={() => setShowModal(true)}>
                  <img src={item.img} alt={item.title} className="img-fluid w-100 hov-scale" />
                </div>

                {/* 3. Info Box (Jam, Tanggal, Lokasi, Button) */}
                <div className="p-4 mb-4" style={{ backgroundColor: '#F3F4F6', borderRadius: '4px' }}>
                  <div className="mb-3">
                    <span className="d-block text-muted" style={{ fontSize: '13px' }}>Tanggal: <span className="text-dark fw-semibold ms-1">{item.date}</span></span>
                  </div>
                  <div className="mb-3">
                    <span className="d-block text-muted" style={{ fontSize: '13px' }}>Jam: <span className="text-dark fw-semibold ms-1">{item.time}</span></span>
                  </div>
                  <div className="mb-4">
                    <span className="d-block text-muted" style={{ fontSize: '13px' }}>Lokasi: <span className="text-dark fw-semibold ms-1">{item.location}</span></span>
                  </div>
                  <Button className="w-100 bg-black border-0 py-2 d-flex align-items-center justify-content-center" style={{ borderRadius: '4px', fontSize: '14px' }}>
                    Daftar Sekarang <i className="bi bi-arrow-right ms-2"></i>
                  </Button>
                </div>
              </div>
            </Col>

            {/* 4. Deskripsi (Turun ke bawah setelah Info Box di Mobile) */}
            <Col lg={8} className="order-3 order-lg-2">
              <div className="agenda-content">
                <p style={{ textAlign: 'justify', fontSize: '15px', color: '#444', lineHeight: '1.8' }}>{item.desc}</p>
                <p style={{ textAlign: 'justify', fontSize: '15px', color: '#444', lineHeight: '1.8' }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit accusamus quas soluta nesciunt temporibus impedit non tenetur, adipisci voluptatibus rerum? Aperiam qui nihil hic excepturi atque facere autem minima! Praesentium?
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', color: '#444', lineHeight: '1.8' }}>
                  Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                </p>

                {/* Ikon Sosial Media */}
                <div className="d-flex gap-3 mt-5 mb-5 align-items-center">
                  <a href={`https://wa.me/?text=${encodeURIComponent(item.title + " " + currentUrl)}`} target="_blank" rel="noreferrer" className="d-flex align-items-center justify-content-center text-white text-decoration-none shadow-sm hov-scale" style={{ width: '45px', height: '45px', backgroundColor: '#58d83d', borderRadius: '4px' }}>
                    <i className="bi bi-whatsapp fs-4"></i>
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noreferrer" className="d-flex align-items-center justify-content-center text-white text-decoration-none shadow-sm hov-scale" style={{ width: '45px', height: '45px', backgroundColor: '#1849d6', borderRadius: '4px' }}>
                    <i className="bi bi-facebook fs-4"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="d-flex align-items-center justify-content-center text-white text-decoration-none shadow-sm hov-scale" style={{ width: '45px', height: '45px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', borderRadius: '4px' }}>
                    <i className="bi bi-instagram fs-4"></i>
                  </a>
                  <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="border-0 d-flex align-items-center justify-content-center text-white shadow-sm" style={{ width: '45px', height: '45px', backgroundColor: '#666666', borderRadius: '4px' }} title="Salin Link">
                    <i className="bi bi-link-45deg fs-3"></i>
                  </button>                        
                </div>
              </div>
            </Col>
          </Row>

          {/* Agenda Lainnya Section */}
          <div className="mt-5 text-center">
            <h2 className="fw-bold mb-5" style={{ fontSize: '32px' }}>Agenda Lainnya</h2>
            <Row className="g-4">
              {allAgendas.filter(a => a.id !== item.id).slice(0, 3).map(other => (
                <Col lg={4} key={other.id}>
                  <Link to={`/agenda/${other.id}`} className="text-decoration-none text-start d-block h-100 hov-card">
                    <div className="mb-3 rounded-3 overflow-hidden shadow-sm">
                      <img src={other.img} className="img-fluid w-100" alt={other.title} style={{ height: '400px', objectFit: 'cover' }} />
                    </div>
                    <h6 className="agenda-badge mb-2 d-inline-block">{other.category}</h6>
                    <h5 className="agenda-title-card mb-3" style={{ fontSize: '18px' }}>{other.title}</h5>
                    <p className="text-muted small mb-0">{other.date} | {other.time}</p>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </main>
      
      <Banner />
      <Footer />

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Body className="text-center p-0">
          <img src={item.img} alt={item.title} className="img-fluid rounded shadow" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AgendaDetail;