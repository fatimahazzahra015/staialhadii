import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profil from '../../assets/profil.png'; 
import './homepage.css';

const AgendaKampus = () => {
  const agendaData = [
    {
      id: 1,
      title: "Workshop: Digital Marketing Syariah",
      date: "22 Maret 2026",
      time: "09:00 – 12:00",
      image: Profil
    },
    {
      id: 2,
      title: "Workshop: Digital Marketing Syariah",
      date: "22 Maret 2026",
      time: "09:00 – 12:00",
      image: Profil
    },
    {
      id: 3,
      title: "Workshop: Digital Marketing Syariah",
      date: "22 Maret 2026",
      time: "09:00 – 12:00",
      image: Profil
    }
  ];

  return (
    <section className="agenda-section py-5">
      <div className="container px-container-custom ">
        {/* Judul Section */}
        <h2 className="section-title-agenda mb-5">
          Agenda Kegiatan Kampus
        </h2>

        {/* Grid Kartu Agenda */}
        <div className="row g-2">
          {agendaData.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className="agenda-card">
                <div className="agenda-img-wrapper mb-3">
                  <img src={item.image} alt={item.title} className="img-fluid agenda-img" />
                </div>
                <div className="agenda-content">
                  <h5 className="agenda-card-title">{item.title}</h5>
                  <p className="agenda-date-time text-muted">
                    {item.date} {item.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="text-center mt-5">
          <button className="btn-lihat-semua d-inline-flex align-items-center">
            Lihat Semua 
            <svg className="ms-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgendaKampus;