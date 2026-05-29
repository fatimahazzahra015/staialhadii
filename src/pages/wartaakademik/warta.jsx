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

export const allNews = [
  { 
    id: 1, 
    title: "Inovasi Pembelajaran: STIT Al Hadi Luncurkan Aplikasi Digitalisasi Kitab Turats", 
    date: "23 Maret 2026", 
    year: "2026", 
    category: "Akademik", 
    desc: "Melalui integrasi kultur pesantren dan teknologi modern, STIT Al Hadi sukses merilis platform digital untuk mempermudah kajian kitab klasik...", 
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    content: `
      <p><strong>Bojonegoro</strong> – Sebagai wujud komitmen nyata dalam mengintegrasikan khazanah turats dengan sistem pendidikan modern, STIT Al Hadi Bojonegoro secara resmi meluncurkan inovasi terbaru berupa aplikasi digitalisasi kitab klasik. Langkah strategis ini diambil guna merespons tantangan zaman di era disrupsi informasi, sekaligus mempermudah para mahasiswa dan santri dalam mendalami literasi keislaman secara efektif, fleksibel, dan adaptif tanpa kehilangan sanad keilmuan yang otoritatif.</p>
      <p>Aplikasi yang dikembangkan secara mandiri ini mengemas teks-teks kajian hukum Islam (fiqih), gramatika bahasa Arab (Nahwu-Sharaf), hingga teologi klasik (akidah) ke dalam antarmuka digital yang interaktif. Tidak hanya menyediakan dokumen teks mentah, platform ini juga dilengkapi dengan berbagai fitur unggulan seperti analisis sintaksis otomatis, kamus istilah kontemporer, penanda metodologi, serta ruang diskusi virtual yang menghubungkan mahasiswa langsung dengan para masyaikh senior dari berbagai pesantren mitra di Bojonegoro.</p>
      <p>Inovasi ini membuktikan betapa pentingnya akselerasi teknologi dalam mendukung kurikulum akademik yang modern dan responsif. Rektor STIT Al Hadi menegaskan bahwa peluncuran aplikasi ini merupakan tonggak awal transformasi kampus menuju pusat keunggulan siber Islam berbasis pesantren. Dengan adanya platform ini, institusi berharap dapat mencetak generasi Dai-Educator masa depan yang tidak hanya kokoh secara spiritual, tetapi juga responsif, adaptif, dan cakap digital dalam menyebarkan kemaslahatan di tengah masyarakat luas.</p>
    `
  },
  { 
    id: 2, 
    title: "Bangga! Mahasiswa STIT Al Hadi Raih Juara 1 Musabaqah Qira'atil Kutub Nasional 2026", 
    date: "22 Maret 2026", 
    year: "2026", 
    category: "Prestasi", 
    desc: "Delegasi STIT Al Hadi Bojonegoro berhasil menyabet gelar juara pertama dalam kompetisi membaca kitab kuning tingkat nasional...", 
    img: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=400&h=250&fit=crop",
    content: `
      <p><strong>Bojonegoro</strong> – Kemenangan gemilang berskala nasional berhasil ditorehkan oleh tim delegasi mahasiswa STIT Al Hadi Bojonegoro dalam ajang Musabaqah Qira'atil Kutub (MQK) Perguruan Tinggi Islam Tingkat Nasional 2026. Kompetisi bergengsi yang diikuti oleh ratusan institusi tinggi dari berbagai penjuru tanah air ini menjadi pembuktian atas ketajaman nalar kritis dan kedalaman pemahaman literasi klasik mahasiswa STIT Al Hadi.</p>
      <p>Kemenangan ini diraih setelah melalui proses seleksi kompetitif yang sangat ketat selama tiga bulan penuh, mulai dari tahap eliminasi berkas berkala hingga babak presentasi kontekstualisasi hukum. Dalam babak final yang berlangsung menegangkan, perwakilan kafilah STIT Al Hadi mampu mempertahankan argumen rekonstruksi fiqih muamalah kontemporer yang diadopsi dari kitab Fathul Mu'in di hadapan dewan juri ahli dan guru besar, dengan artikulasi bahasa Arab yang fasih serta argumentasi yang komprehensif.</p>
      <p>Prestasi prestisius ini membuktikan secara nyata bahwa dedikasi tinggi, latihan intensif, serta kultur akademik berbasis pesantren yang diterapkan di lingkungan kampus mampu membuahkan hasil yang maksimal. Otoritas kampus menyatakan bahwa penghargaan ini akan menjadi pemantik semangat bagi seluruh sivitas akademika untuk terus merawat tradisi intelektual Islam. Selain itu, pencapaian ini menegaskan posisi STIT Al Hadi sebagai lembaga tinggi yang kredibel dalam melahirkan santri-cendekiawan berkarakter Qur'ani di kancah nasional.</p>
    `
  },
  { 
    id: 3, 
    title: "Workshop Metodologi Khitobah Kontemporer Bersama Dai Nasional", 
    date: "21 Maret 2026", 
    year: "2026", 
    category: "Akademik", 
    desc: "Meningkatkan kemampuan public speaking dan retorika dakwah mahasiswa melalui workshop intensif berbasis karakter Qur'ani...", 
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop", 
    content: `
      <p><strong>Bojonegoro</strong> – Guna membekali mahasiswa dengan keterampilan komunikasi yang transformatif, STIT Al Hadi Bojonegoro sukses menyelenggarakan Workshop Metodologi Khitobah Kontemporer. Kegiatan intensif yang berlangsung di aula utama kampus ini dirancang khusus untuk mengasah kompetensi 'public speaking' para mahasiswa dari Program Studi Pendidikan Agama Islam (PAI) dan Pendidikan Bahasa Arab (PBA) agar siap menghadapi dinamika retorika dakwah di era modern.</p>
      <p>Workshop ini menghadirkan praktisi dakwah berskala nasional yang membedah secara mendalam taktik komunikasi persuasif, psikologi massa, serta seni penyusunan naskah dakwah yang inklusif dan solutif. Peserta tidak hanya dicekoki oleh teori akademis, melainkan diwajibkan mengikuti sesi simulasi langsung ('role-play') di atas panggung. Mereka dilatih untuk merespons berbagai isu kemanusiaan dan sosial kontemporer secara spontan dengan menggunakan pendekatan dalil yang santun, moderat, dan menyejukkan.</p>
      <p>Melalui penyelenggaraan workshop ini, STIT Al Hadi berkomitmen penuh untuk menggeser paradigma dakwah konvensional menuju dakwah yang mencerahkan dan berbasis solusi lokal. Kemampuan khitobah yang matang diharapkan mampu mengubah mahasiswa menjadi penggerak perubahan yang efektif di masyarakat. Dengan menguasai seni retorika yang berkarakter Qur'ani, lulusan kelak tidak hanya bertindak sebagai pengajar formal di dalam kelas, melainkan juga sebagai pemimpin opini yang membawa kedamaian dan kemaslahatan publik.</p>
    `
  },
  { 
    id: 4, 
    title: "Penerimaan Mahasiswa Baru Gelombang 2 STIT Al Hadi Bojonegoro Dibuka", 
    date: "20 Maret 2026", 
    year: "2026", 
    category: "Lainnya", 
    desc: "Pendaftaran telah resmi dibuka bagi calon mahasiswa dan santri yang ingin mencetak diri menjadi pendidik profesional berkarakter Qur'ani...", 
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop", 
    content: `
      <p><strong>Bojonegoro</strong> – STIT Al Hadi Bojonegoro secara resmi mengumumkan pembukaan pendaftaran Penerimaan Mahasiswa Baru (PMB) untuk Gelombang ke-2 pada Tahun Akademik 2026/2027. Kesempatan ini dibuka secara luas bagi lulusan MA/SMA/SMK/Pesantren sederajat yang memiliki cita-cita luhur untuk mengembangkan potensi akademik dan spiritualnya, guna bertransformasi menjadi tenaga pendidik profesional yang berintegritas tinggi.</p>
      <p>Pada gelombang ini, program studi unggulan S1 Pendidikan Agama Islam (PAI) dan S1 Pendidikan Bahasa Arab (PBA) kembali menawarkan berbagai fasilitas penunjang pembelajaran yang berbasis teknologi mutakhir dan kultur pesantren. Selain itu, pihak birokrasi kampus juga menyediakan skema beasiswa eksklusif, termasuk Beasiswa Tahfiz Al-Qur'an, Beasiswa Kitab Turats bagi santri berprestasi, serta subsidi UKT bagi calon mahasiswa yang berasal dari keluarga kurang mampu namun memiliki semangat belajar yang tinggi.</p>
      <p>Sebagai mitra strategis pemerintah dalam memajukan mutu pendidikan tinggi Islam di Indonesia, STIT Al Hadi terus berupaya memperluas keterjangkauan akses pendidikan bagi seluruh lapisan masyarakat. Proses pendaftaran dapat dilakukan dengan sangat mudah melalui sistem 'one-day service' di sekretariat PMB kampus atau secara daring melalui portal resmi. Langkah ini menjadi gerbang awal bagi generasi muda untuk dipersiapkan menjadi pendidik kompeten dan berkarakter Qur'ani yang siap berkhidmat untuk umat.</p>
    `
  },
  { 
    id: 5, 
    title: "Seminar Nasional: Peran Dai-Educator dalam Menangkal Radikalisme di Media Sosial", 
    date: "19 Maret 2026", 
    year: "2026", 
    category: "Akademik", 
    desc: "Menghadirkan pembicara dari Kemenag dan praktisi media untuk membedah strategi dakwah digital yang moderat...", 
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    content: `
      <p><strong>Bojonegoro</strong> – Guna membentengi generasi muda dari paparan pemahaman keagamaan yang ekstrem dan menyimpang, STIT Al Hadi Bojonegoro menggelar Seminar Nasional Keagamaan yang bertajuk penguatan moderasi beragama di ruang siber. Acara ini diselenggarakan secara hibrida dan sukses menyedot perhatian ratusan akademisi, peneliti, guru madrasah, serta aktivis mahasiswa dari berbagai daerah.</p>
      <p>Seminar ini menghadirkan jajaran narasumber kompeten dari Kementerian Agama RI dan praktisi media sosial nasional. Dalam sesi diskusi panel, para pembicara mengupas tuntas formulasi gerakan dakwah digital yang mengedepankan prinsip 'tawasuth' (moderat), 'tawazun' (seimbang), dan 'i'tidal' (adil) sesuai dengan haluan Ahlussunnah wal Jama'ah. Para pakar menegaskan bahwa teks-teks luhur di dalam khazanah kitab turats memiliki metodologi yang sangat kaya dan kontekstual untuk mematahkan narasi hoaks, ujaran kebencian, serta radikalisme secara ilmiah di media sosial.</p>
      <p>Melalui seminar nasional ini, STIT Al Hadi mengukuhkan perannya sebagai benteng intelektual yang aktif mempromosikan perdamaian. Output dari seminar ini diharapkan dapat memicu lahirnya gerakan literasi digital yang masif di lingkungan pesantren. Dengan demikian, para calon lulusan dapat mengoptimalkan kecakapan digital mereka untuk memproduksi narasi keagamaan yang inklusif, toleran, dan membawa kemaslahatan yang nyata bagi keutuhan Negara Kesatuan Republik Indonesia.</p>
    `
  },
  { 
    id: 6, 
    title: "Wisuda ke-V: Penghargaan Lulusan Terbaik Berkhidmat untuk Kemaslahatan", 
    date: "15 Desember 2025", 
    year: "2025", 
    category: "Prestasi", 
    desc: "Penghargaan santri-cendekiawan diberikan kepada lulusan yang sukses mengintegrasikan IPK tinggi dengan pengabdian masyarakat...", 
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
    content: `
      <p><strong>Bojonegoro</strong> – Sidang Terbuka Senat STIT Al Hadi Bojonegoro dalam rangka Wisuda ke-V Sarjana Strata Satu (S1) berlangsung dengan penuh khidmat dan haru. Momentum sakral tahunan ini menandai keberhasilan kampus dalam melahirkan kembali puluhan intelektual muslim baru yang siap diterjunkan untuk mengabdi secara profesional di berbagai lembaga pendidikan Islam formal maupun non-formal.</p>
      <p>Pada prosesi wisuda kali ini, institusi memberikan penghargaan tertinggi kategori 'Santri-Cendekiawan Berkhidmat' kepada lulusan terbaik yang berhasil memadukan capaian IPK cumlaude dengan kontribusi nyata di masyarakat. Lulusan yang bersangkutan dinilai sukses menjalankan program pemberantasan buta aksara Al-Qur'an dan menginisiasi metode pembelajaran bahasa Arab interaktif gratis untuk anak-anak di daerah pelosok Bojonegoro selama masa studinya.</p>
      <p>Rektor STIT Al Hadi dalam pidato pengukuhannya menyampaikan pesan mendalam agar seluruh wisudawan tidak pernah melupakan akar tradisi pesantren and nilai luhur Al-Qur'an di mana pun mereka berkarier. Gelar sarjana yang diraih bukanlah akhir, melainkan awal perjuangan untuk menjadi mitra strategis dalam memajukan mutu pendidikan Islam. Kampus meyakini bahwa alumni STIT Al Hadi akan mampu berdiri tegak di garda terdepan sebagai pendidik yang berintegritas dan senantiasa membawa kemaslahatan umat.</p>
    `
  },
];

const Warta = () => {

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
      
      <main className="warta-main-content">
        <Container className="custom-container-1440">
          <nav className="custom-breadcrumb mb-4">
            <Link to="/" className="text-decoration-none text-muted">Home</Link> 
            <span className="mx-2">/</span> 
            <span className="active text-dark fw-bold">Warta Akademik</span>
          </nav>

          <h1 className="main-page-title mb-4">Warta Akademik</h1>

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
                              {/* Tambahkan Link di sini untuk membungkus gambar */}
                              <Link to={`/warta/${item.id}`}>
                                <div className="img-frame">
                                  <img src={item.img} alt="news" className="img-fluid" />
                                </div>
                              </Link>
                            </Col>
                            <Col md={7} xs={12} className="mt-3 mt-md-0">
                              <h3 className="news-item-title"> 
                                <Link to={`/warta/${item.id}`} className="text-decoration-none text-dark">
                                  {item.title}
                                </Link> 
                              </h3>
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
                <h3 className="cta-title">Kuliah Berkah, Masa Depan Cerah!</h3>
                <p className="cta-desc">
                  “STIT Al Hadi hadir dari semangat pesantren untuk mencetak generasi Qur'ani yang berilmu, berakhlak, dan memberi manfaat luas bagi umat dan bangsa.”
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