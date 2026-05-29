import React, { useState, useEffect } from 'react';
import './profil.css';

const FounderCard = () => {
  const founders = [
    {
      id: 1,
      quote: "STIT Al Hadi lahir dari semangat pesantren untuk mencetak generasi Qur'ani yang berilmu, berakhlak, dan memberi manfaat luas bagi umat dan bangsa.",
      name: "K.H. M. Ghufron, MM.",
      role: "Kepala Yayasan Ponpes Al Hadi & Pendiri STIT Al Hadi"
    },
    {
      id: 2,
      quote: "Kami mengintegrasikan turats dan keilmuan modern agar mahasiswa siap menjadi pendidik dan pemimpin yang relevan dengan tantangan zaman.",
      name: "Dr. H. Ahmad Fauzi, M.Pd.",
      role: "Wakil Ketua Bidang Akademik STIT Al Hadi"
    },
    {
      id: 3,
      quote: "Pendidikan adalah kunci perubahan. Kami berkomitmen menyediakan akses pendidikan tinggi Islam yang berkualitas dan terjangkau bagi seluruh lapisan masyarakat.",
      name: "Hj. Siti Aminah, M.Ag.",
      role: "Kepala Senat Akademik STIT Al Hadi"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? founders.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="founder-section" style={{ backgroundColor: '#000', padding: '50px 0' }}>
      <div className="container px-container-custom">
        <div className="card bg-black-custom border-0 d-flex">
          <div className="row g-0 flex-grow-1">
            
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="founder-title text-white">
                Pesan Para Pendiri<br className="d-none d-lg-block" />
                untuk Generasi Masa<br className="d-none d-lg-block" />
                Depan
              </h1>
            </div>

            <div className="quote col-lg-5 d-flex flex-column text-center text-lg-start mt-lg-0" style={{ paddingTop: '150px' }}>
              <div className="quote-wrapper mt-auto ps-lg-6">

                <div key={currentIndex} className="slide-track">
                  <blockquote className="quote-text text-white mb-4">
                    "{founders[currentIndex].quote}"
                  </blockquote>

                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-5">
                    <div className="profile-img me-3"></div>
                    <div className="text-start">
                      <h6 className="mb-0 fw-bold text-white profile-name">
                        {founders[currentIndex].name}
                      </h6>
                      <small className="profile-desc">
                        {founders[currentIndex].role}
                      </small>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-4 justify-content-center justify-content-lg-start">
                  <button className="btn-nav" onClick={prevSlide} aria-label="Previous Slide">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </button>
                  <button className="btn-nav" onClick={nextSlide} aria-label="Next Slide">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderCard;