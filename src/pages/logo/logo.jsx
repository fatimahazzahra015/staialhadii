import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import MyNavbar from '../../components/navbar';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import MainLogo from '../../assets/logo main.png';
import LogoKubah from '../../assets/logo kubah.png';
import LogoKaligrafi from '../../assets/logo kaligrafi.png';
import LogoAlquran from '../../assets/logo alquran.png';
import LogoBintang from '../../assets/logo bintang.png';
import LogoTipografi from '../../assets/logo tipografi.png';
import './logo.css';

const Logo = () => {
        const filosofiData = [
        {
            title: "Bentuk Kubah Masjid",
            desc: "Bentuk lengkungan hijau tua yang menyerupai kubah masjid atau gerbang islami merupakan representasi visual yang paling dominan. Kubah Masjid: Melambangkan identitas keisiaman yang kuat dan menjadi wadah bagi pengembangan ilmu-ilmu agama. Ini menunjukkan STAI Al-Hadi Bojonegoro adalah lembaga pendidikan Islam yang berlandaskan ajaran Al-Qur'an dan Sunnah.",
            icon: LogoKubah // Ganti dengan ikon spesifik jika ada
        },
        {
            title: "Kaligrafi Arab 'Al-Hadi'",
            desc: "Di bagian tengah logo, terdapat kaligrafi Arab yang membentuk tulisan \"Al-Hadi\". Dalam Asmaul Husna, \"Al-Hadi\" berarti Yang Maha Pemberi Petunjuk. Ini merepresentasikan STAI Al-Hadi Bojonegoro sebagai institusi yang memberikan petunjuk, bimbingan, dan arah yang benar bagi mahasiswanya, baik dalam aspek keilmuan maupun moral. Dengan menggunakan gaya kaligrafi yang modern namun tetap mudah dikenali menunjukkan penghargaan terhadap tradisi islam sekaligus keterbukaan terhadap inovasi, Ini mencerminkan bahwa STAI Al-Hadi Bojonegoro mengajarkan ilmu agama dengan metode yang relevan di era kontemporer.",
            icon: LogoKaligrafi
        },
        {
            title: "Stilasi Bentuk Al-Qur'an & Rekal",
            desc: "Di bagian atas kaligrafi, terdapat stilasi bentuk Al-Qur'an dan rekal adalah representasi dari ilmu pengetahuan (dunia akhirat) sesuai dengan semangat akademis di Institut yang berlandaskan konsep scientific. Bentuk terbuka mengisyaratkan keterbukaan terhadap ilmu dan semangat untuk terus belajar.",
            icon: LogoAlquran
        },
        {
            title: "Bintang Emas",
            desc: "Tepat di atas ikon Al-Qur'an terbuka, terdapat sebuah bintang berwarna emas. Simbol Prestasi dan Harapan: Bintang sering diartikan sebagai simbol prestasi, tujuan, dan cita-cita yang tinggi. Ini merefleksikan harapan STAI Al-Hadi Bojonegoro untuk melahirkan lulusan yang berprestasi, mampu bersaing, dan menjadi pemimpin yang cemerlang.",
            icon: LogoBintang
        },
        {
            title: "Tipografi 'STAI AL-HADI BOJONEGORO'",
            desc: "Tipografi yang digunakan dalam logo mencerminkan kekayaan budaya dan tradisi Islam. Huruf-huruf yang dirancang dengan hati-hati menunjukkan komitmen terhadap kualitas dan estetika dalam menyampaikan pesan.",
            icon: LogoTipografi
        }

    ];

    // Data Warna Lengkap dengan Filosofi
    const colors = [
        { 
            name: "Emas", 
            hex: "#CAA945", 
            bg: "#cAA945",
            desc: "Melambangkan kehormatan dan kemuliaan."
        },
        { 
            name: "Hijau Muda", 
            hex: "#72BB338", 
            bg: "#72BB38",
            desc: "Melambangkan kebaruan dan ide segar."
        },
        { 
            name: "Hijau Tua", 
            hex: "#006051", 
            bg: "#006051",
            desc: "Melambangkan kesejahteraan."
        },
        { 
            name: "Hitam", 
            hex: "#000000", 
            bg: "#000000",
            desc: "Melambangkan ketangguhan iman, amal kebajikan, dan keadilan."
        }
    ];

    // Daftar File Logo untuk Diunduh
    const downloadLogos = [
        { name: "Logo Primary Color (PNG)", file: MainLogo, type: "Logo Primary" },
        { name: "Logo Mono Black (PNG)", file: MainLogo, type: "Logo Mono" }, // Ganti file aslinya
        { name: "Logo Mono White (PNG)", file: MainLogo, type: "Logo Mono White" }  // Ganti file aslinya
    ];

    // Fungsi untuk mengunduh file secara nyata
    const handleDownload = (fileUrl, fileName) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName; // Tentukan nama file saat didownload
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="Logo-Page">
            <div className="header-nav-wrapper">
                <Header />
                <MyNavbar />
            </div>
            <main className='logo-content'>
                <Container className="custom-container-1440 py-5">
                    <nav className="custom-breadcrumb mb-4">
                        <Link to="/" className="text-decoration-none text-muted">Home</Link> / 
                        <span className="active mx-1 text-dark fw-bold">Logo dan Brand</span>
                    </nav>

                    <div className="mb-5">
                        <h1 className="brand-section-title">Logo dan Brand</h1>
                        <div className="text-center mt-4">
                            <img src={MainLogo} alt="Logo Utama" style={{ maxWidth: '280px' }} />
                        </div>
                    </div>

                    <div className="philosophy-section mt-5">
                        <h3 className="text-center fw-bold mb-4">Filosofi Logo</h3>
                        <p className="text-center text-muted mb-5 px-md-5">
                            Logo STAI Al-Hadi mencerminkan nilai-nilai luhur Islam, ilmu pengetahuan, dan pengabdian masyarakat yang terintegrasi dalam satu kesatuan visi dan misi.
                        </p>

                        {filosofiData.map((item, index) => (
                            <div key={index} className="philosophy-card shadow-sm">
                                <div className="philosophy-icon-wrapper">
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <div className="philosophy-text">
                                    <h5 className="fw-bold text-dark">{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* --- Palet Warna INTERAKTIF --- */}
                    <div className="color-palette-section">
                        <div className="color-grid shadow">
                            {colors.map((color, index) => (
                                <div key={index} className="color-item" style={{ backgroundColor: color.bg }}>
                                    <span className="color-name">{color.name}</span>
                                    <p className="color-desc">{color.desc}</p>
                                    <span className="color-code">{color.hex}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- Download Section BERFUNGSI --- */}
                    <div className="download-section mt-5 pt-4">
                        {downloadLogos.map((item, index) => (
                            <div key={index} className="download-logo-card  ">
                                <div className="logo-preview-box text-center">
                                    <img src={MainLogo} alt="Preview Logo" className="img-fluid" style={{maxHeight: '60px'}} />
                                </div>
                                <div className="text-muted small d-none d-md-block">{item.type}</div>
                                <Button 
                                    variant="outline-dark" 
                                    size="sm" 
                                    className="px-4 fw-medium"
                                    onClick={() => handleDownload(item.file, item.name)}
                                >
                                    Unduh File
                                </Button>
                            </div>
                        ))}
                    </div>
                </Container>
            </main>
            <Banner />
            <Footer />
        </div>
    );
};

export default Logo;