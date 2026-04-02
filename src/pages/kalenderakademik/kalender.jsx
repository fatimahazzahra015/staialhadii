import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import './kalender.css';

const KalenderAkademik = () => {
  const [activeYear, setActiveYear] = useState('2025/2026');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dataKalender = [
    {
      id: "0",
      pelaksanaan: "01 April 2025 - 29 September 2025",
      kegiatan: [
        "Pendaftaran Mahasiswa Baru",
        "1. Pendaftaran",
        "2. Seleksi",
        "3. Pengumuman",
        "4. Herregistrasi"
      ],
      keterangan: "Program Diploma, Sarjana dan Pascasarjana Angkatan 2025"
    },
    {
      id: "1",
      pelaksanaan: "01 April 2025 - 29 September 2025",
      kegiatan: ["Persiapan Kegiatan Program Kampus Berdampak"],
      keterangan: "1. Sosialisasi pada Mahasiswa dan Dosen\n2. Perencanaan dan Konversi Program Kampus Berdampak di PS"
    }
  ];

  return (
    <div className="Kalender-Page">
      <div className="fixed-top-wrapper">
        <Header />
        <MyNavbar />
      </div>

      <main className="Kalender-content">
        <Container className="custom-container-1440">
          <nav className="custom-breadcrumb mb-4">
            <Link to="/" className="text-decoration-none text-muted">Home</Link> / 
            <span className="active mx-1 text-dark fw-bold">Kalender Akademik</span>
          </nav>

          <h1 className="page-main-title mb-4">Kalender Akademik</h1>

          {/* Tab Tahun Akademik */}
          <div className="year-tabs mb-5">
            <button 
              className={`btn-year ${activeYear === '2024/2025' ? 'active' : ''}`}
              onClick={() => setActiveYear('2024/2025')}
            >
              2024/2025
            </button>
            <button 
              className={`btn-year ${activeYear === '2025/2026' ? 'active' : ''}`}
              onClick={() => setActiveYear('2025/2026')}
            >
              2025/2026
            </button>
          </div>

          <h2 className="semester-title mb-2">KALENDER AKADEMIK</h2>
          <h2 className="semester-title mb-4">SEMESTER GANJIL {activeYear}</h2>
          
          <a href="#unduh" className="link-unduh-primary mb-5 d-inline-block">Unduh</a>

          {/* --- VIEW DESKTOP --- */}
          <section className="table-section d-none d-lg-block">
            <div className="table-responsive custom-table-wrapper">
              <Table hover className="align-middle mb-0">
                <thead>
                  <tr>
                    <th style={{ width: '20%' }}>Pelaksanaan</th>
                    <th style={{ width: '40%' }}>Kegiatan Akademik</th>
                    <th style={{ width: '40%' }}>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {dataKalender.map((item) => (
                    <tr key={item.id}>
                      <td className="text-muted">{item.pelaksanaan}</td>
                      <td>
                        <ul className="list-unstyled mb-0">
                          {item.kegiatan.map((k, i) => (
                            <li key={i} className={i === 0 ? "fw-bold" : "ps-2"}>{k}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="text-muted small" style={{ whiteSpace: 'pre-line' }}>
                        {item.keterangan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </section>

          {/* --- VIEW MOBILE --- */}
          <section className="accordion-section d-lg-none">
            <div className="accordion-header-custom p-3 text-center fw-bold">
              Kegiatan Akademik
            </div>
            
            <Accordion flush className="custom-akreditasi-accordion">
              {dataKalender.map((item) => (
                <Accordion.Item eventKey={item.id} key={item.id}>
                  <Accordion.Header>
                    <span className="text-dark small fw-medium">{item.kegiatan[0]}</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    {/* Baris Pelaksanaan */}
                    <div className="mobile-detail-row">
                      <span className="label">Pelaksanaan</span>
                      <span className="value text-end">{item.pelaksanaan}</span>
                    </div>
                    
                    {/* Baris Keterangan */}
                    <div className="mobile-detail-row border-0">
                      <span className="label">Keterangan</span>
                      <span className="value text-end" style={{ whiteSpace: 'pre-line' }}>
                        {item.keterangan}
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

export default KalenderAkademik;