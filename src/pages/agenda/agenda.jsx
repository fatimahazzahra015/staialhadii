import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Pagination, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import AgendaImg from '../../assets/warta.png';
import './agenda.css';

export const allAgendas = [
  {
    id: 1,
    title: "Workshop: Dakwah Digital & Content Creation Syariah",
    date: "22 Maret 2026",
    time: "09:00 - 12:00",
    location: "Aula Utama STIT Al Hadi",
    category: "Workshop",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    desc: [
      "Perkembangan teknologi informasi telah mengubah lanskap komunikasi global secara drastis, tak terkecuali dalam dunia penyiaran agama. Mimbar-mimbar konvensional kini mulai bertransformasi ke ruang virtual, di mana generasi muda menghabiskan sebagian besar waktu mereka. Menjawab fenomena ini, STIT Al Hadi Bojonegoro merasa perlu membekali para mahasiswa dengan kecakapan digital agar mampu mengambil peran strategis sebagai produsen konten yang positif dan edukatif.",
      "Dalam workshop interaktif ini, para peserta akan diajak membedah metodologi dakwah kontemporer yang memadukan kedalaman ilmu syariat dengan estetika multimedia. Materi pelatihan mencakup teknik penulisan skrip dakwah yang inklusif, strategi optimalisasi algoritma media sosial, hingga etika berkomunikasi digital (fiqih bermedia sosial) agar konten yang dihasilkan tetap berada dalam koridor syariah dan tidak menimbulkan polarisasi di masyarakat.",
      "Melalui agenda ini, STIT Al Hadi berkomitmen melahirkan generasi Dai-Educator yang tidak hanya fasih membaca kitab klasik, tetapi juga mahir mengemasnya menjadi video pendek, infografis, maupun podcast yang menarik. Target akhirnya adalah lahirnya para kreator konten islami dari rahim pesantren yang siap mewarnai jagat digital dengan pesan-pesan Islam yang ramah, moderat, dan membawa kemaslahatan bagi umat."
    ]
  },
  {
    id: 2,
    title: "Al-Hadi Fest: Festival Seni Islami & Lomba Orasi Turats",
    date: "23 Maret 2026",
    time: "08:00 - Selesai",
    location: "Halaman Kampus STIT Al Hadi",
    category: "Event",
    img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&h=250&fit=crop",
    desc: [
      "Khazanah turats atau kitab-kitab klasik merupakan pilar intelektual yang menjaga kemurnian sanad keilmuan Islam selama berabad-abad. Namun, di tengah gempuran budaya modern, eksistensi literasi pesantren ini sering kali dianggap kaku oleh sebagian kalangan. Sebagai lembaga tinggi berbasis kultur pesantren, STIT Al Hadi Bojonegoro menyelenggarakan Al-Hadi Fest sebagai ruang ekspresi yang segar untuk menghidupkan kembali kecintaan terhadap warisan ulama terdahulu.",
      "Festival tahunan ini menyajikan serangkaian kompetisi estetika dan intelektual, dengan menu utama 'Lomba Orasi Ilmiah berbasis Kitab Turats'. Di panggung ini, para santri dan mahasiswa ditantang untuk mengeksplorasi teks-teks klasik—mulai dari bidang fiqih, ushul fiqih, hingga akhlak tasawuf—kemudian menyajikannya kembali dalam bentuk pidato retoris yang kontekstual dengan problem kemanusiaan masa kini.",
      "Selain sebagai ajang kompetisi, Al-Hadi Fest juga menjadi sarana silaturahmi akbar antarpesantren se-karesidenan. Kegiatan ini diharapkan mampu membuktikan kepada publik bahwa tradisi pesantren tidak pernah lekang oleh waktu. Sebaliknya, nilai-nilai luhur di dalamnya selalu siap menjadi kompas moral dan solusi bagi kompleksitas dinamika kehidupan masyarakat modern."
    ]
  },
  {
    id: 3,
    title: "Al-Hadi Mengajar: Pemberantasan Buta Aksara Al-Qur'an",
    date: "24 Maret 2026",
    time: "09:00 - 12:00",
    location: "Aula Mini Kampus",
    category: "Workshop",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=250&fit=crop",
    desc: [
      "Akses terhadap pendidikan keagamaan yang berkualitas di daerah pelosok sering kali terkendala oleh keterbatasan fasilitas dan minimnya tenaga pendidik yang kompeten. Banyak anak-anak di wilayah pinggiran yang belum mendapatkan bimbingan intensif dalam membaca Al-Qur'an secara tartil sesuai kaidah tajwid. Menyadari tanggung jawab sosial tersebut, STIT Al Hadi Bojonegoro menginisiasi gerakan 'Al-Hadi Mengajar' sebagai manifestasi dari pengabdian masyarakat.",
      "Sebelum diterjunkan ke lapangan, mahasiswa akan mengikuti pembekalan intensif di Aula Mini Kampus mengenai metodologi pengajaran Al-Qur'an yang cepat, menyenangkan, dan adaptif untuk anak-anak. Fokus materi tidak hanya terbatas pada kemampuan mengeja huruf hijaiyah, melainkan juga menanamkan nilai-nilai akhlak mulia dan dasar-dasar keislaman yang rahmatan lil 'alamin, sehingga proses transfer ilmu berjalan secara holistik.",
      "Melalui program pengabdian yang terstruktur ini, STIT Al Hadi berikhtiar memperluas akses masyarakat terhadap pendidikan Islam yang bermutu tinggi. Bagi para mahasiswa, agenda ini merupakan kawah candradimuka untuk mengasah empati sosial, melatih keterampilan pedagogik di dunia nyata, serta membuktikan komitmen mereka untuk berkhidmat secara nyata demi kemaslahatan dan mencetak generasi berkarakter Qur'ani."
    ]
  },
  {
    id: 4,
    title: "Seminar Kebangsaan: Integrasi Hukum Islam & Pendidikan Modern",
    date: "25 Maret 2026",
    time: "10:00 - 13:00",
    location: "Auditorium STIT Al Hadi",
    category: "Seminar",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    desc: [
      "Dunia pendidikan tinggi Islam saat ini dihadapkan pada tantangan dualisme yang cukup berat, di mana terkadang ada jarak antara sains modern dengan keilmuan syariat. Upaya untuk menjembatani kedua kutub ini menjadi hal krusial agar lulusan institusi keagamaan memiliki daya saing global tanpa kehilangan akar spiritualnya. Seminar Kebangsaan ini digelar untuk mengurai benang kusut tersebut secara akademis dan filosofis.",
      "Acara yang bertempat di Auditorium STIT Al Hadi ini menghadirkan tokoh-tokoh penting, mulai dari jajaran praktisi pendidikan nasional hingga pakar hukum Islam kontemporer. Diskusi panel ini akan membedah strategi mengintegrasikan kurikulum berbasis pesantren ke dalam sistem pendidikan formal, serta bagaimana hukum Islam memberikan fondasi etika yang kuat terhadap perkembangan teknologi, kecerdasan buatan, dan kebijakan publik.",
      "Seminar ini terbuka bagi para dosen, peneliti, mahasiswa, serta pengamat pendidikan yang ingin memperluas cakrawala berpikir. Output jangka panjang dari dialog interaktif ini adalah tersusunnya rekomendasi strategis bagi penguatan mutu lembaga pendidikan tinggi Islam, sekaligus menegaskan peran penting STIT Al Hadi sebagai mitra strategis pemerintah dalam mencetak kader bangsa yang berintegritas."
    ]
  },
  {
    id: 5,
    title: "Musabaqah Karya Tulis Ilmiah Pesantren Tingkat Nasional",
    date: "26 Maret 2026",
    time: "08:00 - 16:00",
    location: "Online (Zoom Meeting)",
    category: "Event",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    desc: [
      "Budaya literasi di lingkungan perguruan tinggi dan pesantren harus terus dirawat agar tidak padam digerus oleh budaya instan era digital. Salah satu cara paling efektif untuk memantik nalar kritis generasi muda adalah melalui tradisi riset dan penulisan ilmiah. STIT Al Hadi Bojonegoro memfasilitasi kebutuhan tersebut dengan menyelenggarakan kompetisi Karya Tulis Ilmiah (KTI) berskala nasional yang mempertemukan berbagai gagasan cemerlang.",
      "Kompetisi yang digelar secara daring via Zoom Meeting ini mengusung tema aktual seputar penyelesaian problematika sosial kontemporer menggunakan perspektif khazanah turats. Peserta dituntut mampu melakukan kontekstualisasi teks kitab kuning untuk menjawab isu-isu global seperti perubahan iklim, moderasi beragama, krisis moral, hingga keadilan ekonomi, dengan metodologi penelitian yang sahih dan dapat dipertanggungjawabkan.",
      "Melalui ajang musabaqah ilmiah ini, diharapkan tumbuh iklim akademik yang sehat, kompetitif, dan penuh inovasi di kalangan santri dan mahasiswa seluruh Indonesia. Karya-karya tulis terbaik yang masuk tidak hanya akan mendapatkan apresiasi berupa penghargaan, tetapi juga akan diprioritaskan untuk diterbitkan dalam jurnal ilmiah nasional terakreditasi sebagai kontribusi riil bagi dunia pengetahuan."
    ]
  },
  {
    id: 6,
    title: "Pelatihan Kepemimpinan & Retorika Dakwah (Khitobah)",
    date: "27 Maret 2026",
    time: "09:00 - 12:00",
    location: "Ruang Kelas A1",
    category: "Workshop",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop",
    desc: [
      "Menjadi seorang sarjana pendidikan Islam tidak hanya dituntut menguasai teori di dalam kelas, melainkan juga harus memiliki kapasitas memimpin di tengah masyarakat. Keberanian menyuarakan kebenaran dan kemampuan mengorganisir massa adalah modal utama bagi seorang penggerak perubahan. Pelatihan ini hadir untuk menjembatani kebutuhan taktis tersebut bagi para pengurus organisasi kemahasiswaan internal kampus.",
      "Bertempat di Ruang Kelas A1, pelatihan ini memfokuskan pada dua materi utama: manajemen kepemimpinan transformatif berbasis nilai pesantren dan teknik khitobah (retorika dakwah) tingkat lanjut. Peserta akan dilatih mengolah vokal, menyusun struktur pidato yang persuasif, membaca bahasa tubuh audiens, hingga mengelola konflik organisasi secara bijaksana dengan pendekatan yang humanis.",
      "Melalui simulasi dan praktik langsung (role-play) di depan forum, mentalitas kepemimpinan para peserta akan ditempa secara intensif. STIT Al Hadi meyakini bahwa dengan bekal retorika yang santun namun tegas, serta kapabilitas kepemimpinan yang matang, lulusannya kelak akan bertransformasi menjadi figur pemimpin formal maupun informal yang mampu membawa kemaslahatan bagi umat luas."
    ]
  },
  {
    id: 7,
    title: "Workshop: Digitalisasi Pembelajaran PAI & Bahasa Arab",
    date: "28 Maret 2026",
    time: "13:00 - 16:00",
    location: "Laboratorium Komputer",
    category: "Workshop",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop",
    desc: [
      "Metode pembelajaran konvensional yang monoton sering kali membuat siswa di sekolah maupun madrasah merasa bosan, terutama saat mempelajari materi keagamaan yang sarat teks dan kaidah. Di era milenial dan Alfa ini, seorang guru dituntut kreatif memanfaatkan teknologi agar kelas menjadi lebih hidup. Workshop ini dirancang secara khusus untuk menjawab kegelisahan para praktisi pendidikan tersebut.",
      "Bertempat di Laboratorium Komputer STIT Al Hadi, agenda praktis ini akan mengupas tuntas pembuatan media pembelajaran interaktif berbasis IT. Para peserta yang terdiri dari guru PAI, pengajar Bahasa Arab, serta mahasiswa tingkat akhir akan dibimbing langsung untuk mendesain e-learning, memanfaatkan platform gamifikasi pendidikan, hingga merancang video animasi edukatif guna mempermudah pemahaman gramatika Arab (Nahwu-Sharaf).",
      "Langkah digitalisasi ini merupakan komitmen nyata STIT Al Hadi Bojonegoro dalam mendukung modernisasi mutu pendidikan Islam di Indonesia. Dengan menguasai kecakapan digital ini, para calon pendidik dan guru profesional diharapkan mampu menghadirkan suasana belajar yang menyenangkan, adaptif, serta interaktif tanpa sedikit pun mengurangi esensi dan bobot nilai-nilai spiritual yang diajarkan."
    ]
  }
];

const Agenda = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ['Semua', 'Workshop', 'Seminar', 'Event', 'Lomba'];

  const filteredData = useMemo(() => {
    const result = activeCategory === 'Semua' 
      ? allAgendas 
      : allAgendas.filter(item => item.category === activeCategory);
    
    return result;
  }, [activeCategory]);

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
    setCurrentPage(1); 
  };

  return (
    <div className="Agenda-Page">
      <div className="fixed-top-nav">
        <Header />
        <MyNavbar />
      </div>

      <main className="agenda-main-content">
        <Container className="custom-container-1440">
          <nav className="custom-breadcrumb mb-4">
            <Link to="/" className="text-decoration-none text-muted">Home</Link>
            <span className="mx-2">/</span>
            <span className="active text-dark fw-bold">Agenda Kampus</span>
          </nav>

          <h1 className="main-page-title mb-4">Agenda Kampus</h1>

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