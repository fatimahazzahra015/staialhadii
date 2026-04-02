import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Pagination, Modal, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import DosenImg1 from '../../assets/dosen 1.png';
import DosenImg2 from '../../assets/dosen 2.png';
import DosenImg3 from '../../assets/dosen 3.png';
import './dosen.css';

const allDosen = [
  // --- S1 Pendidikan Agama Islam (Data Lengkap untuk Pagination) ---
  { id: 1, name: "Dr. H. Ahmad Fauzan, M.Ag.", title: "Guru Besar", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Agama Islam", img: DosenImg1, 
    riwayat: [{ d: "S3", m: "Hukum Keluarga, UIN Sunan Kalijaga", t: "2020" }, { d: "S2", m: "Syariah, UIN Syarif Hidayatullah", t: "2012" }], publikasi: ["Analisis Hukum Islam Kontemporer"] },
  { id: 2, name: "Prof. Akmal Firdaus, S.E., M.Si.", title: "Dosen Tetap", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Agama Islam", img: DosenImg3, 
    riwayat: [{ d: "S2", m: "Ekonomi Syariah, UI", t: "2010" }], publikasi: ["Implementasi Ekonomi Islam"] },
  { id: 3, name: "Drs. M. Syukron, M.Pd.I.", title: "Lektor", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Agama Islam", img: DosenImg1, riwayat: [], publikasi: [] },
  { id: 4, name: "Hj. Siti Rohmah, M.Ag.", title: "Dosen", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Agama Islam", img: DosenImg2, riwayat: [], publikasi: [] },
  { id: 5, name: "Zubair, M.Pd.", title: "Dosen", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Agama Islam", img: DosenImg3, riwayat: [], publikasi: [] },
  { id: 6, name: "Dr. Ridwan Malik, M.Th.I.", title: "Lektor Kepala", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Agama Islam", img: DosenImg1, riwayat: [], publikasi: [] },
  { id: 7, name: "Aisyah Putri, M.Pd.", title: "Dosen", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Agama Islam", img: DosenImg2, riwayat: [], publikasi: [] },
  { id: 8, name: "Fahmi Idris, M.Pd.I.", title: "Dosen", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Agama Islam", img: DosenImg3, riwayat: [], publikasi: [] },
  { id: 9, name: "Dr. Umar Bakri, M.Ag.", title: "Dosen", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Agama Islam", img: DosenImg1, riwayat: [], publikasi: [] },
  { id: 10, name: "Hasan Basri, M.Ag.", title: "Dosen", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Agama Islam", img: DosenImg3, riwayat: [], publikasi: [] },

  // --- S1 Pendidikan Bahasa Arab ---
  { id: 11, name: "Dr. Siti Aminah Zahra, M.Pd.", title: "Lektor Kepala", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Bahasa Arab", img: DosenImg2, 
    riwayat: [{ d: "S3", m: "Pendidikan Bahasa Arab, UM", t: "2021" }], publikasi: ["Metode Pembelajaran Bahasa Arab"] },
  { id: 12, name: "Ustadz Mansyur, M.Pd.", title: "Dosen", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Bahasa Arab", img: DosenImg3, riwayat: [], publikasi: [] },
  { id: 13, name: "Laila Maghfiroh, M.A.", title: "Dosen", unit: "Fakultas Tarbiyah", prodi: "S1 Pendidikan Bahasa Arab", img: DosenImg2, riwayat: [], publikasi: [] },
];

const Dosen = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedDosen, setSelectedDosen] = useState(null);
  
  const itemsPerPage = 9;
  const categories = ['Semua', 'S1 Pendidikan Agama Islam', 'S1 Pendidikan Bahasa Arab'];

  const filteredData = useMemo(() => {
    return activeCategory === 'Semua' 
      ? allDosen 
      : allDosen.filter(d => d.prodi === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (dosen) => {
    setSelectedDosen(dosen);
    setShowModal(true);
  };

  return (
    <div className="Dosen-Page bg-white">
      <div className="header-nav-wrapper">
        <Header />
        <MyNavbar />
      </div>

      <main className="main-content-dosen">
        <Container className="custom-container-1440">
          <nav className="custom-breadcrumb mb-4">
            <Link to="/" className="text-decoration-none text-muted">Home</Link> / 
            <span className="active mx-1 text-dark fw-bold">Dosen dan Tenaga Pendidik</span>
          </nav>
          <h1 className="page-title mb-4">Dosen dan Tenaga Pendidik</h1>

          {/* Filter Wrapper Tanpa Tombol Samping */}
          <div className="filter-container mb-5">
            <div className="filter-scrollable">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`filter-item ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Dosen */}
          <Row className="g-4 mb-5">
            {currentItems.map((dosen) => (
              <Col key={dosen.id} lg={4} md={6} xs={12}>
                <div className="dosen-card-wrapper" onClick={() => handleOpenModal(dosen)}>
                  <div className="img-container">
                    <img src={dosen.img} alt={dosen.name} className="img-dosen" />
                  </div>
                  <div className="info-text text-center mt-3">
                    <h6 className="dosen-name">{dosen.name}</h6>
                    <p className="dosen-prodi-label">{dosen.prodi}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center">
              <Pagination className="custom-pagination-stai">
                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                {[...Array(totalPages)].map((_, i) => (
                  <Pagination.Item 
                    key={i + 1} 
                    active={i + 1 === currentPage}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
              </Pagination>
            </div>
          )}
        </Container>
      </main>

      <Banner />
      <Footer />

      {/* Modal Detail Dosen */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered 
        size="lg" 
        className="dosen-modal"
        backdrop="static" // Agar modal tidak tertutup tidak sengaja saat scroll
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body className="px-4 pb-5 pt-0">
          {selectedDosen && (
            <Row>
              <Col md={5} className="mb-4">
                <div className="img-container-modal shadow-sm">
                  <img src={selectedDosen.img} alt={selectedDosen.name} className="w-100 h-100 object-fit-cover" />
                </div>
              </Col>
              <Col md={7}>
                <h4 className="fw-bold mb-1" style={{color: '#1a1a1a'}}>{selectedDosen.name}</h4>
                <p className="text-muted small mb-4">{selectedDosen.title}</p>
                
                <div className="detail-info mb-4">
                  <div className="mb-3">
                    <label className="fw-bold d-block small text-dark">Unit Kerja</label>
                    <span className="text-secondary small">{selectedDosen.unit}</span>
                  </div>
                  <div className="mb-3">
                    <label className="fw-bold d-block small text-dark">Program Studi</label>
                    <span className="text-secondary small">{selectedDosen.prodi}</span>
                  </div>
                </div>

                <Tab.Container defaultActiveKey="riwayat">
                  <Nav variant="tabs" className="modal-tabs mb-4">
                    <Nav.Item><Nav.Link eventKey="riwayat">Riwayat Pendidikan</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="publikasi">Publikasi</Nav.Link></Nav.Item>
                  </Nav>
                  <Tab.Content className="small text-secondary">
                    <Tab.Pane eventKey="riwayat">
                      {selectedDosen.riwayat.length > 0 ? selectedDosen.riwayat.map((r, idx) => (
                        <div key={idx} className="mb-3">
                          <div className="fw-bold text-dark">{r.d} - {r.m}</div>
                          <div>Tahun Lulus: {r.t}</div>
                        </div>
                      )) : <p>Data belum tersedia.</p>}
                    </Tab.Pane>
                    <Tab.Pane eventKey="publikasi">
                      <ul className="ps-3">
                        {selectedDosen.publikasi.length > 0 ? selectedDosen.publikasi.map((p, idx) => (
                          <li key={idx} className="mb-2">{p}</li>
                        )) : <p>Belum ada publikasi.</p>}
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Col>
            </Row>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Dosen;