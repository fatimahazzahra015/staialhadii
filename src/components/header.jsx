import React from 'react';
import { Envelope } from 'react-bootstrap-icons';

const Header = () => {
  // Style menggunakan variabel CSS dari App.css
  const fullWidthStyle = {
    backgroundColor: 'var(--secondary-color)', // Menggunakan #031C15 dari CSS
    color: 'var(--white-color)',            // Menggunakan putih (#ffffff)
    fontSize: '13px',
    padding: '12px 60px',                  // Padding disesuaikan agar proporsional
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative', 
    zIndex: 1001                           // Lebih tinggi dari Navbar agar tidak tertutup
  };

  return (
    <div style={fullWidthStyle} className="d-none d-lg-flex">
      {/* Sisi Kiri */}
      <div style={{ letterSpacing: '0.5px', fontWeight: '400' }}>
        Welcome to STAI Al-Hadi
      </div>

      {/* Sisi Kanan */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
          <Envelope style={{ marginRight: '8px', fontSize: '14px' }} />
          <span style={{ fontWeight: '300', opacity: '0.9' }}>campus@staialhadi.ac.id</span>
        </div>
      </div>
    </div>
  );
};

export default Header;