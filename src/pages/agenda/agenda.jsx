import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Pagination, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import AgendaImg from '../../assets/warta.png';
import './agenda.css';

// Data Dummy Agenda Lengkap
export const allAgendas = [
  {
    id: 1,
    title: "Workshop: Digital Marketing Syariah",
    date: "22 Maret 2026",
    time: "09:00 - 12:00",
    location: "Aula Utama STAI Al-Hadi",
    category: "Workshop",
    img: AgendaImg,
    desc: "Menakar peran mahasiswa di era ekonomi digital dengan strategi marketing yang sesuai syariah."
  },
  {
    id: 2,
    title: "Al-Hadi Creative Fest: Lomba Orasi & Konten Kreatif",
    date: "23 Maret 2026",
    time: "08:00 - Selesai",
    location: "Halaman Kampus",
    category: "Event",
    img: AgendaImg,
    desc: "Wadahi kreativitas santri dan mahasiswa dalam menyampaikan aspirasi melalui seni orasi."
  },
  {
    id: 3,
    title: "Al-Hadi Mengajar: Literasi Qur'an Untuk Pelosok",
    date: "24 Maret 2026",
    time: "09:00 - 12:00",
    location: "Aula Mini",
    category: "Workshop",
    img: AgendaImg,
    desc: "Program pengabdian masyarakat untuk meningkatkan kemampuan literasi Al-Qur'an."
  },
  {
    id: 4,
    title: "Seminar Kebangsaan: Peran Pemuda di Era 5.0",
    date: "25 Maret 2026",
    time: "10:00 - 13:00",
    location: "Auditorium",
    category: "Seminar",
    img: AgendaImg,
    desc: "Diskusi panel mengenai tantangan pemuda menghadapi teknologi masa depan."
  },
  {
    id: 5,
    title: "Event Karya Tulis Ilmiah Nasional",
    date: "26 Maret 2026",
    time: "08:00 - 16:00",
    location: "Online/Zoom",
    category: "Event",
    img: AgendaImg,
    desc: "Kompetisi ide kreatif mahasiswa tingkat nasional."
  },
  {
    id: 6,
    title: "Pelatihan Public Speaking & Leadership",
    date: "27 Maret 2026",
    time: "09:00 - 12:00",
    location: "Ruang Kelas A1",
    category: "Workshop",
    img: AgendaImg,
    desc: "Mengasah kemampuan bicara di depan umum bagi pengurus organisasi."
  },
  {
    id: 7,
    title: "Workshop: UI/UX Design with Figma",
    date: "28 Maret 2026",
    time: "13:00 - 16:00",
    location: "Lab Komputer",
    category: "Workshop",
    img: AgendaImg,
    desc: "Slicing desain dan dasar-dasar pengalaman pengguna."
  }
];

const Agenda = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ['Semua', 'Workshop', 'Seminar', 'Event', 'Lomba'];

  // 1. Logika Filter
  const filteredData = useMemo(() => {
    const result = activeCategory === 'Semua' 
      ? allAgendas 
      : allAgendas.filter(item => item.category === activeCategory);
    
    return result;
  }, [activeCategory]);

  // 2. Logika Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  
  const currentAgendas = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredData.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredData, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1); // Reset ke halaman 1 saat ganti kategori
  };

  return (
    <div className="Agenda-Page">
      <div className="fixed-top-nav">
        <Header />
        <MyNavbar />
      </div>

      <main className="agenda-main-content">
        <Container className="custom-container-1440">
          {/* Breadcrumb */}
          <nav className="custom-breadcrumb mb-4">
            <Link to="/" className="text-decoration-none text-muted">Home</Link>
            <span className="mx-2">/</span>
            <span className="active text-dark fw-bold">Agenda Kampus</span>
          </nav>

          <h1 className="main-page-title mb-4">Agenda Kampus</h1>

          {/* Filter Kategori */}
          <div className="category-filter-wrapper mb-5 d-flex gap-4 overflow-auto pb-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`btn-category-custom ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Agenda */}
          <Row>
            {currentAgendas.length > 0 ? (
              currentAgendas.map((item) => (
                <Col lg={4} md={6} key={item.id} className="mb-5">
                  <Link to={`/agenda/${item.id}`} className="text-decoration-none">
                    <Card className="agenda-card border-0 shadow-sm h-100 overflow-hidden">
                      <div className="agenda-img-container">
                        <Card.Img variant="top" src={item.img} alt={item.title} className="hov-scale" />
                      </div>
                      <Card.Body className="card-body">
                        <span className="agenda-badge mb-2 d-inline-block">{item.category}</span>
                        <h3 className="agenda-title-card mb-3">{item.title}</h3>
                        <div className="agenda-info-short mt-auto">
                          <p className="text-muted small mb-0">
                            {item.date} | {item.time}
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))
            ) : (
              <Col className="text-center py-5">
                <p className="text-muted">Uups, belum ada data agenda untuk kategori ini.</p>
              </Col>
            )}
          </Row>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <Pagination className="custom-pagination gap-2">
                <Pagination.Prev 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          )}
        </Container>
      </main>

      <Banner />
      <Footer />
    </div>
  );
};

export default Agenda;