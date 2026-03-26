import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Profil from '../../assets/profil.png'; 
import Warta from '../../assets/warta.png'; 

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './homepage.css';

const Hero = () => {
  const slides = [
    { id: "01", title: "Unggul dalam Ilmu, \n Kokoh dalam Akhlak", desc: "Pendidikan Islam adaptif dan unggul Berakar pada tradisi, melangkah menuju masa depan.", img: Profil },
    { id: "02", title: "Mencetak Generasi \n Qur'ani yang Berilmu", desc: "Kurikulum terpadu yang memadukan keilmuan kontemporer dengan nilai-nilai luhur pesantren.", img: Warta },
    { id: "03", title: "Lingkungan Belajar \n yang Inspiratif", desc: "Fasilitas lengkap dan tenaga pendidik profesional untuk mendukung potensi maksimal mahasiswa.", img: Profil }
  ];

  return (
    <div className="hero-wrapper animate__animated animate__fadeIn">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          renderBullet: (i, className) => `<span class="${className}">0${i + 1}</span>`,
        }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section 
              className="hero-section" 
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.img})` }}
            >
              <Container className="hero-container h-100">
                <Row className="h-100 align-items-center py-5">
                  <Col lg={7} xs={12} className="text-center text-lg-start">
                    <h1 className="hero-title">
                      {slide.title.split('\n').map((t, i) => <React.Fragment key={i}>{t}<br/></React.Fragment>)}
                    </h1>
                  </Col>

                  <Col lg={5} xs={12} className="text-center text-lg-start mt-4 mt-lg-0">
                    <div className="hero-content-box">
                      <p className="hero-subtitle-text">{slide.desc}</p>
                      <Button className="btn-hero-custom d-flex align-items-center mx-auto mx-lg-0">
                        Pendaftaran <span className="ms-3">&rarr;</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;