import React from 'react';
import LogoWhite from '../assets/logo-white.png';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#052B1F', 
      color: '#FFFFFF',
      padding: '4rem 0',    // Pastikan padding kiri-kanan 0, biarkan container yang atur
      fontFamily: "'Poppins', sans-serif",
      marginTop: '0',       // Menghilangkan margin atas
      borderTop: 'none',    // Menghilangkan potensi border atas
      display: 'block',     // Mencegah whitespace inline
      position: 'relative', // Menjamin urutan rendering yang benar
      zIndex: 1,
    },
    heading: {
      fontWeight: '600',
      fontSize: '1.1rem',
      marginBottom: '1.5rem',
      color: '#FFFFFF',
      letterSpacing: '0.5px'
    },
    text: {
      fontSize: '0.95rem',
      fontWeight: '300',
      lineHeight: '1.8',
      opacity: '0.9',
      marginBottom: '1.5rem',
      maxWidth: '400px'
    },
    navLink: {
      color: '#FFFFFF',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: '300',
      opacity: '0.8',
      display: 'block',
      marginBottom: '1rem',
      transition: 'opacity 0.2s'
    },
    brandWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '4rem',
    },
    logoImg: {
      height: 'auto',
      maxWidth: '100%', // Agar logo responsif di mobile
      width: '450px', // Sesuaikan dengan ukuran logo besar di screenshot
      objectFit: 'contain'
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div className="row">
          
          {/* Kolom Kiri: Alamat & Contact */}
          <div className="col-lg-6 col-12 mb-5">
            <div className="row">
              <div className="col-12">
                <h6 style={styles.heading}>Alamat</h6>
                <p style={styles.text}>
                  Jl. Dr. Soetomo, Dusun Pengkok, Padangan, Kec.<br />
                  Padangan, Kabupaten Bojonegoro, Jawa Timur 62162
                </p>
              </div>
              <div className="col-12">
                <h6 style={styles.heading}>Contact</h6>
                <p style={{...styles.text, marginBottom: '0.2rem'}}>08888-8888-8888</p>
                <p style={{...styles.text, marginBottom: '0.2rem'}}>campus@staialhadi.ac.id</p>
              </div>
            </div>
          </div>

          {/* Kolom Tengah: Main Menu - Menggunakan col-12 agar menumpuk di mobile */}
          <div className="col-lg-3 col-12 mb-4">
            <h6 style={styles.heading}>Main Menu</h6>
            <nav>
              <a href="#beranda" style={styles.navLink}>Beranda</a>
              <a href="#warta" style={styles.navLink}>Warta Akademik</a>
              <a href="#profil" style={styles.navLink}>Profil Kami</a>
              <a href="#prodi" style={styles.navLink}>Program Studi</a>
              <a href="#agenda" style={styles.navLink}>Agenda Kampus</a>
            </nav>
          </div>

          {/* Kolom Kanan: Program - Menggunakan col-12 agar menumpuk di mobile */}
          <div className="col-lg-3 col-12 mb-4">
            <h6 style={styles.heading}>Program</h6>
            <nav>
              <a href="#pai" style={styles.navLink}>Pendidikan Agama Islam</a>
              <a href="#pba" style={styles.navLink}>Pendidikan Bahasa Arab</a>
            </nav>
          </div>

        </div>

        {/* Section Logo Besar Bawah */}
        <div className="row">
          <div className="col-12">
            <div style={styles.brandWrapper} className="justify-content-start">
              <img 
                src={LogoWhite} 
                alt="STAI AL-HADI BOJONEGORO" 
                style={styles.logoImg} 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;