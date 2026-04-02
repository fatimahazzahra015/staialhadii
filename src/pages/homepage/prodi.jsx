import React, { useState } from 'react';
import { Container, Collapse } from 'react-bootstrap';
import Profil from '../../assets/profil.png'; 
import './homepage.css';

const ProgramStudi = () => {
  // Menggunakan null agar semua tertutup di awal, dan hanya simpan 1 index
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleProgram = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const programs = [
    { title: "S1 Pendidikan Agama Islam", img: Profil },
    { title: "S1 Pendidikan Bahasa Arab", img: Profil },
  ];

  return (
    <section className="program-studi-section mx-auto">
      <Container className="program-container">
        <div className="text-center mb-5 px-3">
          <h2 className="section-title-main">Program Studi</h2>
          <p className="section-subtitle">
            Pilih program studi yang sesuai dengan minat dan bakat Anda untuk membangun masa depan yang cerah.
          </p>
        </div>

        <div className="program-list-wrapper">
          {programs.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="program-item-container">
                {/* Header saat Tertutup */}
                {!isOpen && (
                  <div 
                    className="closed-card d-flex justify-content-between align-items-center"
                    onClick={() => toggleProgram(index)}
                  >
                    <h3 className="program-title-closed">{item.title}</h3>
                    <div className="plus-icon">+</div>
                  </div>
                )}

                {/* Konten saat Terbuka */}
                <Collapse in={isOpen}>
                  <div> {/* Wrapper div untuk animasi Collapse yang smooth */}
                    <div 
                      className="opened-bg" 
                      style={{ backgroundImage: `linear-gradient(rgba(0, 45, 30, 0.85), rgba(0, 45, 30, 0.85)), url(${item.img})` }}
                      onClick={() => toggleProgram(index)}
                    >
                      <div className="opened-content container-fluid d-flex flex-column flex-md-row justify-content-between align-items-md-center px-4 px-md-5">
                        <div className="text-white mb-4 mb-md-0 text-start">
                          <h3 className="program-title-opened">{item.title}</h3>
                          <p className="program-desc-opened d-none d-md-block">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                        </div>
                        <button className="btn-daftar-studi">
                          Daftar Sekarang <span className="ms-2">&rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ProgramStudi;