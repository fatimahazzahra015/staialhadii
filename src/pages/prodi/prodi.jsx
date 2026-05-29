import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner from '../../components/banner'; 
import ProdiImg from '../../assets/profil.png'; 
import './prodi.css';

const Prodi = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const contentData = {
    'pendidikan-agama-islam': {
      title: "S1 Pendidikan Agama Islam",
      intro: "Program Studi S1 Pendidikan Agama Islam dirancang untuk mencetak Dai-Educator dan tenaga pendidik berkarakter Qur'ani yang kompeten dalam mengintegrasikan khazanah turats (kitab klasik) dengan sistem pendidikan modern.",
      overview: "Mempersiapkan mahasiswa menjadi pendidik PAI profesional, inovatif, dan berintegritas yang tidak hanya menguasai metodologi pembelajaran digital, tetapi juga memiliki kedalaman ilmu syariat berbasis kultur pesantren untuk kemaslahatan umat.",
      practical: [
        "Microteaching dan Praktik Mengajar berbasis Media Pembelajaran Digital",
        "Program Pengenalan Lapangan Persekolahan (PLP) di Sekolah/Madrasah & Pesantren",
        "Praktikum Metode Mudarasah/Kajian Kitab Turats Tematik",
        "Penelitian Lapangan dan Pengabdian Masyarakat Keagamaan (Dakwah Kontemporer)"
      ],
      careers: ["Guru PAI (Sekolah/Madrasah/Pesantren)", "Dai-Educator / Penyuluh Agama Islam", "Developer Konten Edukasi Islam Digital", "Peneliti & Konsultan Pendidikan Islam"]
    },
    'pendidikan-bahasa-arab': {
      title: "S1 Pendidikan Bahasa Arab",
      intro: "Program Studi S1 Pendidikan Bahasa Arab fokus pada penguasaan bahasa Arab integratif sebagai kunci mendalami khazanah turats sekaligus instrumen komunikasi internasional di era modern.",
      overview: "Menghasilkan lulusan yang ahli dalam bahasa Arab (Lughawiyyat), cakap digital, dan terampil mengajarkannya menggunakan metodologi modern tanpa kehilangan akar tradisi literasi kitab klasik pesantren.",
      practical: [
        "Laboratorium Bahasa dan Praktikum Muhadasah-Digital",
        "Praktik Mengajar Bahasa Arab (PPL) Terintegrasi",
        "Program Intensif I'dad Lughawi & Qira'atul Kutub (Membaca Kitab Kuning)",
        "Praktikum Penerjemahan Teks Turats dan Dokumen Kontemporer"
      ],
      careers: ["Guru Bahasa Arab (Sekolah/Madrasah/Pesantren)", "Penerjemah Kitab Turats & Teks Kontemporer", "Dai/Edukator Bahasa Arab Digital", "Staff Profesional Lembaga Islam & Tour Guide Haji/Umrah"]
    }
  };

  const currentContent = contentData[slug] || contentData['pendidikan-agama-islam'];

  return (
    <div className="Prodi-Page">
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

      <main className="Prodi-content">
        <Container className="custom-container-1440">
          <nav className="custom-breadcrumb mb-4">
            <Link to="/" className="text-decoration-none text-muted">Home</Link> / 
            <span className="active mx-1 text-dark fw-bold">{currentContent.title}</span>
          </nav>

          <Row className="gx-lg-5">
            <Col lg={8}>
              <h1 className="page-main-title mb-4">{currentContent.title}</h1>
              <p className="intro-text mb-4">{currentContent.intro}</p>

              <div className="main-img-wrapper mb-5">
                <img src={ProdiImg} alt={currentContent.title} className="img-fluid rounded-1 w-100 shadow-sm" />
              </div>

              <section className="content-section mb-5">
                <h2 className="section-subtitle">Program Overview</h2>
                <p className="intro-text mb-4">{currentContent.overview}</p>
                
                <Row className="mb-4">
                  <Col md={6} className="mb-3">
                    <div className="info-box-gray">
                      <h6>Program Overview</h6>
                      <p>4 Years (8 Semesters)</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="info-box-gray">
                      <h6>Program Type</h6>
                      <p>Full-time | On-Campus</p>
                    </div>
                  </Col>
                </Row>
              </section>

              <section className="content-section mb-5">
                <h2 className="section-subtitle">Pembelajaran Praktis</h2>
                <ul className="custom-list">
                  {currentContent.practical.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="content-section mb-5">
                <h2 className="section-subtitle">Prospek Karier</h2>
                <ul className="custom-list">
                  {currentContent.careers.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
              
            </Col>

            <Col lg={4}>
              <div className="sidebar-cta-box sticky-top" style={{ top: '100px' }}>
                <h3 className="cta-title">Gabung Bersama Kami</h3>
                <p className="cta-desc">Mulai langkahmu di prodi {currentContent.title} sekarang!</p>
                <button className="cta-btn w-100">Daftar Sekarang</button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Banner />
      <Footer />
    </div>
  );
};

export default Prodi;