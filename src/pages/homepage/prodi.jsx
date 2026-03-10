import React, { useState } from 'react';
import { Container, Collapse } from 'react-bootstrap';
import Profil from '../../assets/profil.png'; 
import './homepage.css';

const ProgramStudi = () => {
  // 1. Set ke [] agar semua tertutup saat pertama kali load
  const [openIndices, setOpenIndices] = useState([]); 

  const toggleProgram = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const programs = [
    { title: "S1 Pendidikan Agama Islam", img: Profil },
    { title: "S1 Pendidikan Bahasa Arab", img: Profil },
  ];

  return (
    <section className="program-studi-section py-5 mx-auto">
      <Container fluid className="px-container-custom">
        <div className="text-center mb-5">
          <h2 className="section-title-main">Program Studi</h2>
          <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="program-list-wrapper">
          {programs.map((item, index) => {
            const isOpen = openIndices.includes(index);
            
            return (
              <div 
                key={index} 
                className={`program-item-container ${isOpen ? 'is-open' : 'is-closed'}`}
              >
                {/* 2. Gunakan Conditional Rendering sederhana agar elemen 'closed' hilang total saat 'open' */}
                {!isOpen && (
                  <div 
                    className="closed-card d-flex justify-content-between align-items-center"
                    onClick={() => toggleProgram(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3 className="program-title-closed">{item.title}</h3>
                    <div className="plus-icon">+</div>
                  </div>
                )}

                {/* Tampilan Konten Terbuka */}
                <Collapse in={isOpen}>
                  <div className="opened-card" onClick={() => toggleProgram(index)}>
                    <div 
                      className="opened-bg" 
                      style={{ 
                        backgroundImage: `linear-gradient(rgba(0, 45, 30, 0.85), rgba(0, 45, 30, 0.85)), url(${item.img})`,
                        cursor: 'pointer' 
                      }}
                    >
                      <div className="opened-content d-flex flex-column flex-md-row justify-content-between align-items-md-center w-100 px-4 px-md-5">
                        <div className="text-white mb-4 mb-md-0">
                          <h3 className="program-title-opened">{item.title}</h3>
                          <p className="program-desc-opened d-none d-md-block">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                        </div>
                        <button className="btn-daftar-studi align-self-start align-self-md-center">
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