import React from 'react';
import { useNavigate } from 'react-router-dom';
import { allAgendas } from '../agenda/agenda'; 
import './homepage.css';

const AgendaKampus = () => {
  const navigate = useNavigate();

  // 2. Ambil hanya 3 data teratas untuk ditampilkan di Homepage
  const displayAgendas = allAgendas.slice(0, 3);

  const handleLihatSemua = () => {
    navigate('/agenda');
  };

  const handleDetailAgenda = (id) => {
    navigate(`/agenda/${id}`);
  };

  return (
    <section className="agenda-section py-5 px-2">
      <div className="container px-container-custom">
        <h2 className="section-title-agenda mb-5">
          Agenda Kegiatan Kampus
        </h2>

        <div className="row g-4">
          {displayAgendas.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              {/* 3. Tambahkan onClick untuk masuk ke Detail */}
              <div 
                className="agenda-card h-100" 
                style={{ cursor: 'pointer' }}
                onClick={() => handleDetailAgenda(item.id)}
              >
                <div className="agenda-img-wrapper mb-3">
                  {/* Gunakan item.img sesuai struktur data di Agenda.jsx */}
                  <img src={item.img} alt={item.title} className="img-fluid agenda-img" />
                </div>
                <div className="agenda-content">
                  <h5 className="agenda-card-title">{item.title}</h5>
                  <p className="agenda-date-time text-muted">
                    {item.date} | {item.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Tombol Lihat Semua ke Halaman Agenda */}
        <div className="text-center mt-5">
          <button 
            className="btn-lihat-semua d-inline-flex align-items-center"
            onClick={handleLihatSemua}
          >
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