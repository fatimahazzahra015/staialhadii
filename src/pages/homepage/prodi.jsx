import React, { useState } from 'react';
import { Container, Collapse } from 'react-bootstrap';
import Profil from '../../assets/profil.png'; 
import './homepage.css';

const ProgramStudi = () => {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleProgram = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 1. Menambahkan properti 'desc' yang berbeda untuk setiap program studi
  const programs = [
    { 
      title: "S1 Pendidikan Agama Islam", 
      img: Profil,
      desc: "Program Studi S1 Pendidikan Agama Islam menyiapkan pendidik profesional dengan kompetensi keislaman, pedagogik, dan pengembangan karakter sesuai kebutuhan pendidikan masa kini."
    },
    { 
      title: "S1 Pendidikan Bahasa Arab", 
      img: Profil,
      desc: "Program Studi S1 Pendidikan Bahasa Arab menyiapkan pendidik profesional dengan penguasaan bahasa Arab, metodologi pengajaran, serta wawasan budaya dan keislaman untuk menjawab kebutuhan pendidikan global."
    },
  ];

  return (
    <section className="program-studi-section mx-auto">
      <Container className="program-container">
        <div className="text-center mb-5 px-3">
          <h2 className="section-title-main">Program Studi</h2>
          <p className="section-subtitle" style={{ color: '#333', fontSize: '18px', fontWeight: '400' }}>
            Mulai langkah awal perjuanganmu. Pilih program studi unggulan yang memadukan kedalaman ilmu pesantren dengan kesiapan karier di era digital.
          </p>
        </div>

        <div className="program-list-wrapper">
          {programs.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="program-item-container">
                {!isOpen && (
                  <div 
                    className="closed-card d-flex justify-content-between align-items-center"
                    onClick={() => toggleProgram(index)}
                  >
                    <h3 className="program-title-closed">{item.title}</h3>
                    <div className="plus-icon">+</div>
                  </div>
                )}

                <Collapse in={isOpen}>
                  <div>
                    <div 
                      className="opened-bg" 
                      style={{ backgroundImage: `linear-gradient(rgba(0, 45, 30, 0.85), rgba(0, 45, 30, 0.85)), url(${item.img})` }}
                      onClick={() => toggleProgram(index)}
                    >
                      <div className="opened-content container-fluid d-flex flex-column flex-md-row justify-content-between align-items-md-center px-4 px-md-5">
                        <div className="text-white mb-4 mb-md-0 text-start">
                          <h3 className="program-title-opened">{item.title}</h3>
                          {/* 2. Mengubah teks Lorem Ipsum menjadi item.desc */}
                          <p className="program-desc-opened d-none d-md-block">
                            {item.desc}
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