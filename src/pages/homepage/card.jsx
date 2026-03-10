import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';

const FounderCard = () => {
  return (
    <section className="founder-section">
      <div className="container px-container-custom py-5">
        <div className="card bg-black-custom border-0 p-4 p-md-5 d-flex">
          <div className="row g-0 flex-grow-1">
            
            {/* Sisi Jkaa duasmz iid JCudul (Tetap di Atas/Kiri) */}
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="founder-title text-white">
                Pesan Para Pendiri<br className="d-none d-lg-block" />
                untuk Generasi Masa<br className="d-none d-lg-block" />
                Depan
              </h1>
            </div>

            {/* Sisi Konten Quote (Didorong ke Bawah) */}
            <div className="col-lg-5 d-flex flex-column text-center text-lg-start mt-lg-0">
              {/* mt-auto adalah kunci untuk mendorong konten ini ke pojok bawah pada desktop */}
              <div className="quote-wrapper mt-auto ps-lg-6">
                <blockquote className="quote-text text-white mb-4">
                  "STAI Al Hadi lahir dari semangat pesantren untuk mencetak 
                  generasi Qur'ani yang berilmu, berakhlak, dan memberi 
                  manfaat luas bagi umat dan bangsa."
                </blockquote>

                <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-5">
                  <div className="profile-img me-3"></div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold text-white profile-name">K.H. M. Ghufron, MM.</h6>
                    <small className="profile-desc">
                      Kepala Yayasan Ponpes Al Hadi <br />
                      & Pendiri STAI Al Hadi
                    </small>
                  </div>
                </div>

                {/* Navigasi Panah */}
                <div className="d-flex gap-4 justify-content-center justify-content-lg-start">
                  <button className="btn-nav">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  </button>
                  <button className="btn-nav">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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