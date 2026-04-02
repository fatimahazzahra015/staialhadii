import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import Footer from '../../components/footer';
import Banner from '../../components/banner'; 
import VisiMisiImg from '../../assets/profil.png'; 
import './visimisi.css';

const VisiMisi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Teks untuk dibagikan ke media sosial
  const shareTitle = "Visi dan Misi STAI Al-Hadi Bojonegoro";

  return (
    <div className="VisiMisi-Page">
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
      <main className="visimisi-content py-5">
        <Container className="custom-container-1440">
          {/* Breadcrumb */}
          <nav className="custom-breadcrumb mb-4">
            <Link to="/" className="text-decoration-none text-muted">Home</Link> / 
            <span className="active mx-1 text-dark fw-bold">Visi dan Misi</span>
          </nav>

          <Row className="gx-lg-5">
            <Col lg={8}>
              <h1 className="page-main-title mb-4">Visi dan Misi</h1>
              
              <p className="intro-text mb-4">
                Program Studi S1 Pendidikan Agama Islam dirancang untuk mencetak tenaga pendidik yang kompeten dalam bidang keagamaan, pedagogik, dan pengembangan karakter. Mahasiswa dibekali dengan pemahaman mendalam tentang ilmu-ilmu keislaman serta keterampilan mengajar yang relevan dengan kebutuhan pendidikan masa kini.
              </p>

              <div className="main-img-wrapper mb-5">
                <img 
                    src={VisiMisiImg} 
                    alt="Profil STAI Al Hadi" 
                    className="img-fluid rounded-1 w-100 shadow-sm" 
                    style={{ objectFit: 'cover', maxHeight: '450px' }}
                />
              </div>

              {/* Section Visi */}
              <section className="content-section mb-5">
                <h2 className="section-subtitle">Visi</h2>
                <ul className="custom-list">
                  <li>Menjadi pusat unggulan pendidikan Islam yang integratif.</li>
                  <li>Menghasilkan lulusan yang berakhlakul karimah dan profesional.</li>
                  <li>Mewujudkan lingkungan akademik yang berbasis nilai-nilai Qur'ani.</li>
                  <li>Penerapan teknologi dalam metodologi pembelajaran agama.</li>
                </ul>
                <p className="noted-text">
                  Visi ini menjadi landasan utama bagi STAI Al Hadi dalam mencetak kader ulama dan intelektual muslim.
                </p>
              </section>

              {/* Section Misi */}
              <section className="content-section mb-5">
                <h2 className="section-subtitle">Misi</h2>
                <ul className="custom-list">
                  <li>Menyelenggarakan pendidikan dan pengajaran yang inovatif.</li>
                  <li>Melaksanakan penelitian berbasis pengembangan masyarakat Islami.</li>
                  <li>Mengabdi kepada umat melalui program pemberdayaan pendidikan.</li>
                  <li>Membangun kerjasama strategis dengan lembaga pendidikan nasional dan internasional.</li>
                </ul>
                <p className="noted-text">
                  Melalui misi ini, kami berkomitmen memberikan dampak nyata bagi pendidikan agama di Indonesia.
                </p>
              </section>
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <div className="sidebar-cta-box sticky-top" style={{ top: '100px', zIndex: '1' }}>
                <h3 className="cta-title">Lorem ipsum dolor sit amet</h3>
                <p className="cta-desc">
                  “STAI Al Hadi hadir dari semangat pesantren untuk mencetak generasi Qur'ani yang berilmu, berakhlak, dan memberi manfaat luas bagi umat dan bangsa.”
                </p>
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

export default VisiMisi;