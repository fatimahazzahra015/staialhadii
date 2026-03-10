import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "../assets/profil.png"

const Banner = () => {
  const bannerSectionStyle = {
    position: 'relative',
    height: '40vh',
    minHeight: '500px',
    backgroundImage: `url(${Profile})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    overflow: 'hidden',
    display: 'block',
    margin: '0',        
    marginBottom: '-1px', // MEMAKSA menempel dengan elemen di bawahnya
    padding: '0',
    border: 'none',       // Menghilangkan potensi border sisa
  };

  const bannerOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%', // DIUBAH: Dari 110% ke 100% agar tidak "tumpah" ke bawah
    background: 'rgba(5, 43, 31, 0.65)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const bannerTitleStyle = {
    fontSize: '3rem',
    fontWeight: 600,
    lineHeight: 1.1,
    letterSpacing: '-1px',
  };

  const bannerSubtitleStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    fontWeight: 300,
    maxWidth: '800px',
    lineHeight: 1.6,
    opacity: 0.9,
  };

  const btnDaftarSekarangStyle = {
    backgroundColor: 'var(--white-color)',
    color: 'var(--black-color)',
    border: 'none',
    padding: '15px 40px',
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    cursor: 'pointer',
  };

  return (
    <section style={bannerSectionStyle}>
      {/* Menambahkan h-100 dan w-100 pada overlay */}
      <div className="banner-overlay" style={bannerOverlayStyle}>
        <div className="container text-center text-white">
          {/* Menambahkan g-0 untuk menghilangkan margin negatif row bootstrap */}
          <div className="row justify-content-center g-0">
            <div className="col-lg-10">
              <h1 className="mb-4" style={bannerTitleStyle}>
                Lorem ipsum dolor sit amet
              </h1>
              
              <p className="mb-5 mx-auto" style={bannerSubtitleStyle}>
                "STAI Al Hadi lahir dari semangat pesantren untuk mencetak generasi Qur'ani yang berilmu, 
                berakhlak, dan memberi manfaat luas bagi umat dan bangsa."
              </p>

              <button style={btnDaftarSekarangStyle}>
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;