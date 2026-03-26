import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import warta from '../../assets/warta.png';
import WartaDetail from './wartadetail';
import './warta.css';

// Export data agar bisa diakses WartaDetail
export const allNews = [
  { 
    id: 1, 
    title: "Inovasi Mahasiswa dalam Pengembangan AI di Era Digital", 
    date: "23 Maret 2026", 
    year: "2026", 
    category: "Akademik", 
    desc: "Mahasiswa Informatika berhasil menciptakan solusi AI untuk efisiensi energi...", 
    img: warta,
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Bagian ini menunjukkan betapa pentingnya teknologi dalam mendukung kurikulum akademik yang modern dan responsif terhadap kebutuhan industri saat ini.</p>
    `
  },
  { 
    id: 2, 
    title: "Juara 1 Lomba Coding Nasional 2026", 
    date: "22 Maret 2026", 
    year: "2026", 
    category: "Prestasi", 
    desc: "Tim STAI Al Hadi berhasil menyabet gelar juara pertama dalam kompetisi...", 
    img: warta,
    content: "<p>Kemenangan ini diraih setelah melalui proses seleksi ketat selama 3 bulan...</p><p>Prestasi ini membuktikan bahwa dedikasi dan latihan keras membuahkan hasil yang maksimal bagi seluruh tim dan institusi.</p>"
  },
  { id: 3, title: "Workshop UI/UX Design Bersama Praktisi", date: "21 Maret 2026", year: "2026", category: "Akademik", desc: "Meningkatkan skill desain antarmuka mahasiswa melalui workshop intensif...", img: warta, content: "<p>Isi lengkap workshop...</p>" },
  { id: 4, title: "Penerimaan Mahasiswa Baru Gelombang 2", date: "20 Maret 2026", year: "2026", category: "Lainnya", desc: "Pendaftaran telah dibuka untuk calon mahasiswa berbakat...", img: warta, content: "<p>Informasi pendaftaran...</p>" },
  { id: 5, title: "Seminar Nasional Teknologi Informasi", date: "19 Maret 2026", year: "2026", category: "Akademik", desc: "Menghadirkan pembicara dari perusahaan teknologi ternama...", img: warta, content: "<p>Isi seminar...</p>" },
  { id: 6, title: "Lulusan Terbaik Tahun Akademik 2025", date: "15 Desember 2025", year: "2025", category: "Prestasi", desc: "Penghargaan diberikan kepada lulusan dengan IPK tertinggi...", img: warta, content: "<p>Detail kelulusan...</p>" },
];

const Warta = () => {

  // Daftar tahun tetap muncul di sidebar meskipun data kosong
  const defaultYears = ["2026", "2025"];

  const [activeCategory, setActiveCategory] = useState('Semua');
  const [activeYear, setActiveYear] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    return allNews.filter(item => {
      const matchCat = activeCategory === 'Semua' || item.category === activeCategory;
      const matchYear = activeYear === 'Semua' || item.year === activeYear;
      return matchCat && matchYear;
    });
  }, [activeCategory, activeYear, allNews]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Kategori hanya dihitung jika ada berita
  const categories = allNews.length > 0 ? ['Semua', ...new Set(allNews.map(item => item.category))] : [];
  
  // Gunakan data tahun dari berita, jika kosong gunakan defaultYears
  const archives = allNews.length > 0 
    ? [...new Set(allNews.map(item => item.year))].sort().reverse() 
    : defaultYears;

  return (
    <div className="Warta-Page">
      <Header />
      <MyNavbar />
      
      <main className="warta-main-content py-5">
        <Container className="custom-container-1440">
          {/* Breadcrumb */}
          <nav className="custom-breadcrumb mb-4">
            <span>Home</span> / <span className="active">Warta Akademik</span>
          </nav>

          <h1 className="main-page-title mb-4">Warta Akademik</h1>

          {/* Category Filter - Hanya muncul jika ada berita */}
          {allNews.length > 0 && (
            <div className="category-filter-wrapper mb-5 d-flex gap-4">
              {categories.map((cat, i) => (
                <button 
                  key={i} 
                  className={`btn-category-custom ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <Row className="gx-5">
                  <Col lg={8}>
                    {allNews.length > 0 ? (
                    <>
                      {currentItems.map((item) => (
                      <div key={item.id} className="news-card-horizontal mb-5">
                        <Row className="align-items-start">
                        <Col md={5} xs={12}>
                          <div className="img-frame">
                           <img src={item.img} alt="news" className="img-fluid" />
                          </div>
                        </Col>
                        <Col md={7} xs={12} className="mt-3 mt-md-0">
                          <h3 className="news-item-title"> <Link to={`/warta/${item.id}`} className="text-decoration-none text-dark">{item.title}</Link> </h3>
                          <p className="news-item-date d-flex align-items-center mb-0" style={{ whiteSpace: 'nowrap' }}>
                            <span className="news-item-category me-1">{item.category}</span>
                            <span className="me-1">• {item.date}</span>
                          </p>
                          <p className="news-item-desc">{item.desc}</p>
                        </Col>
                        </Row>
                      </div>
                      ))}

                      {/* Pagination di Center */}
                  {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-5">
                      <Pagination className="custom-pagination">
                        <Pagination.Prev onClick={() => setCurrentPage(p => Math.max(1, p-1))} />
                        {[...Array(totalPages)].map((_, i) => (
                          <Pagination.Item 
                            key={i+1} 
                            active={i+1 === currentPage}
                            onClick={() => setCurrentPage(i+1)}
                          >
                            {i+1}
                          </Pagination.Item>
                        ))}
                        <Pagination.Next onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))} />
                      </Pagination>
                    </div>
                  )}
                </>
              ) : (
                /* Empty State View */
                <div className="empty-state-container">
                   <div className="empty-icon-wrapper mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#D1D5DB" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v3.75A.25.25 0 0 0 9.75 5h3.75zM3 2a1 1 0 0 1 1-1h5v2a2 2 0 0 0 2 2h2v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>
                      </svg>
                   </div>
                   <p className="empty-text">Uups belum ada data berita</p>
                </div>
              )}
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <div className="sidebar-section mb-5">
                <h5 className="sidebar-title">Arsip</h5>
                <div className="archive-list">
                  {archives.map((year) => (
                    <div 
                      key={year} 
                      className={`archive-item ${activeYear === year ? 'active' : ''}`}
                      onClick={() => { setActiveYear(year); setCurrentPage(1); }}
                    >
                      <span className="year">Tahun {year}</span>
                      <span className="count">
                        {allNews.filter(n => n.year === year).length} Artikel
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar CTA Box */}
              <div className="sidebar-cta-box">
                <h3 className="cta-title">Lorem ipsum dolor sit amet</h3>
                <p className="cta-desc">
                  “STAI Al Hadi hadir dari semangat pesantren untuk mencetak generasi Qur'ani yang berilmu, berakhlak, dan memberi manfaat luas bagi umat dan bangsa.”
                </p>
                <button className="cta-btn">Daftar Sekarang</button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      <Banner />
      <Footer />
    </div>
  );
}

export default Warta;