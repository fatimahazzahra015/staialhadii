import React from 'react';
import { Envelope } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap'; // Tambahkan Container

const Header = () => {
  const primaryDark = '#031C15';

  return (
    <>
      <style>
        {`
          .custom-header {
            background-color: var(--secondary-color, ${primaryDark});
            color: var(--white-color, #ffffff);
            font-size: 13px;
            position: relative;
            z-index: 1001;
            transition: all 0.3s ease;
          }

          /* Container Max Width 1440px */
          .header-container {
            max-width: 1440px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin: 0 auto;
          }

          /* Desktop View */
          @media (min-width: 1200px) {
            .custom-header {
              padding: 12px 15px; /* Padding vertikal saja, horizontal diatur container */
            }
          }

          /* Tablet View */
          @media (min-width: 768px) and (max-width: 1199px) {
            .custom-header {
              padding: 10px 15px;
              font-size: 12px;
            }
          }
        `}
      </style>

      {/* d-md-flex pada wrapper utama */}
      <div className="custom-header d-none d-md-flex">
        {/* Container membungkus isi agar tidak melebihi 1440px */}
        <Container className="header-container">
          
          {/* Sisi Kiri */}
          <div style={{ letterSpacing: '0.5px', fontWeight: '400' }}>
            Welcome to STAI Al-Hadi
          </div>

          {/* Sisi Kanan */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div 
              className="d-flex align-items-center" 
              style={{ cursor: 'pointer' }}
              onClick={() => window.location.href = 'mailto:campus@staialhadi.ac.id'}
            >
              <Envelope style={{ marginRight: '8px', fontSize: '14px' }} />
              <span style={{ fontWeight: '300', opacity: '0.9' }}>
                campus@staialhadi.ac.id
              </span>
            </div>
          </div>
          
        </Container>
      </div>
    </>
  );
};

export default Header;