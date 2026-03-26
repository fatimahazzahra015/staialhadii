import React, { useMemo, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import Footer from '../../components/footer';
import { allNews } from './warta'; 
import './warta.css';

const WartaDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const news = useMemo(() => {
    return allNews.find(item => item.id === parseInt(id));
  }, [id]);

  const otherNews = useMemo(() => {
    return allNews.filter(item => item.id !== parseInt(id)).slice(0, 3);
  }, [id]);

  // Ambil list tahun yang unik untuk arsip
  const archives = useMemo(() => {
    return [...new Set(allNews.map(item => item.year))].sort().reverse();
  }, []);

  if (!news) {
    return <div className="text-center py-5">Berita tidak ditemukan</div>;
  }

  return (
    <div className="Warta-Page">
      <Header />
      <MyNavbar />
      <main className="warta-main-content py-5">
        <Container className="custom-container-1440">
          <nav className="custom-breadcrumb mb-4">
            <Link to="/" className="text-decoration-none text-muted">Home</Link> / 
            <Link to="/warta" className="mx-1 text-decoration-none text-muted">Warta Akademik</Link> / 
            <span className="active mx-1 text-dark fw-bold">Detail</span>
          </nav>

          <Row className="gx-lg-5">
            <Col lg={8}>
              <h1 className="main-page-title mb-4" style={{ fontSize: 'calc(1.5rem + 1.5vw)', lineHeight: '1.2' }}>
                {news.title}
              </h1>
              
              <div className="d-flex gap-2 mb-4 align-items-center text-muted" style={{ fontSize: '13px' }}>
                <span className="news-item-category">{news.category}</span>
                <span>•</span>
                <span>{news.date}</span>
              </div>

              <div className="detail-img-wrapper mb-4">
                <img src={news.img} alt={news.title} className="img-fluid rounded-1 w-100 shadow-sm" />
              </div>

              <div 
                className="news-content-text" 
                style={{ lineHeight: '1.8', color: '#333', textAlign: 'justify' }}
                dangerouslySetInnerHTML={{ __html: news.content }}
              />

              {/* Ganti bagian <div className="d-flex gap-2 mt-5 mb-5"> lama dengan ini */}

                <div className="d-flex gap-3 mt-5 mb-5 align-items-center">
                {/* WhatsApp */}
                <a 
                    href={`https://wa.me/?text=${encodeURIComponent(news.title + " " + window.location.href)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="d-flex align-items-center justify-content-center text-white text-decoration-none shadow-sm"
                    style={{ width: '45px', height: '45px', backgroundColor: '#58d83d', borderRadius: '4px' }}
                >
                    <i className="bi bi-whatsapp fs-4"></i>
                </a>

                {/* Facebook */}
                <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="d-flex align-items-center justify-content-center text-white text-decoration-none shadow-sm"
                    style={{ width: '45px', height: '45px', backgroundColor: '#1849d6', borderRadius: '4px' }}
                >
                    <i className="bi bi-facebook fs-4"></i>
                </a>

                {/* Instagram */}
                <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="d-flex align-items-center justify-content-center text-white text-decoration-none shadow-sm"
                    style={{ 
                        width: '45px', 
                        height: '45px', 
                        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', 
                        borderRadius: '4px' 
                    }}
                >
                    <i className="bi bi-instagram fs-4"></i>
                </a>

                {/* Copy Link */}
                <button 
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    className="border-0 d-flex align-items-center justify-content-center text-white shadow-sm"
                    style={{ width: '45px', height: '45px', backgroundColor: '#666666', borderRadius: '4px' }}
                    title="Salin Link"
                >
                    <i className="bi bi-link-45deg fs-3"></i>
                </button>
                </div>
            </Col>

            <Col lg={4}>
                <div className="sidebar-section mb-5">
                    <h5 className="sidebar-title">Arsip</h5>
                    <div className="archive-list">
                    {archives.map((year) => (
                        <Link to="/warta" key={year} className="text-decoration-none">
                            <div className="archive-item d-flex justify-content-between py-2 border-bottom">
                                <span className="year text-dark">Tahun {year}</span>
                                <span className="count text-muted">
                                    {allNews.filter(n => n.year === year).length} Artikel
                                </span>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>

                <div className="sidebar-cta-box">
                    <h3 className="cta-title">Lorem ipsum dolor sit amet</h3>
                    <p className="cta-desc">
                    “STAI Al Hadi hadir dari semangat pesantren untuk mencetak generasi Qur'ani yang berilmu, berakhlak, dan memberi manfaat luas bagi umat dan bangsa.”
                    </p>
                    <button className="cta-btn">Daftar Sekarang</button>
                </div>
            </Col>
          </Row>

          <hr className="my-5" />

          <section className="other-news-section mb-5">
            <h4 className="fw-bold mb-4">Berita Lainnya</h4>
            <Row>
              {otherNews.map((item) => (
                <Col md={4} key={item.id} className="mb-4">
                  <Link to={`/warta/${item.id}`} className="text-decoration-none text-dark">
                    <Card className="border-0 shadow-none h-100 hov-card">
                      <Card.Img src={item.img} className="rounded-1 mb-3" style={{objectFit: 'cover' }} />
                      <Card.Body className="p-0">
                        <h6 className="fw-bold mb-1">{item.title}</h6>
                        <small className="text-muted">{item.date}</small>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default WartaDetail;