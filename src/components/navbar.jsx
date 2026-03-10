import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Accordion, NavDropdown, Row, Col } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import Profil from '../assets/profil.png';

const SearchIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 22L20 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronIcon = ({ isOpen, activeColor }) => (
  <svg 
    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? activeColor : "#333"} 
    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s', marginLeft: '8px' }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeKey, setActiveKey] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const primaryGreen = "#008156"; 

  const styles = {
    navbar: {
      backgroundColor: '#fff',
      borderBottom: '1px solid #eee',
      padding: '15px',
      zIndex: 1100, // Z-index ditinggikan agar di atas konten
    },
    btnPendaftaran: {
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      padding: '12px 24px',
      fontWeight: '600',
      fontSize: '14px',
      transition: '0.3s'
    },
    megaMenuContent: {
      padding: '30px 40px',
      color: '#fff',
    },
    menuItemLink: {
      display: 'block',
      padding: '8px 0',
      color: '#333',
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: '500',
      transition: '0.2s'
    },
    bannerContainer: {
        position: 'relative',
        overflow: 'hidden',
        height: '200px',
    }
  };

  const menuData = [
    { title: "Tentang Kami", items: ["Profil Kami", "Visi dan Misi", "Dosen dan Tenaga Pendidik", "Logo dan Brand"] },
    { title: "Program", items: ["S1 Pendidikan Agama Islam", "S1 Pendidikan Bahasa Arab"] },
    { title: "Akademik", items: ["Seleksi Masuk", "Akreditasi", "Kalender Akademik"] },
    { title: "Info", items: ["Agenda Kampus", "Warta Akademik"] }
  ];

  return (
    <>
      <style>
        {`
          /* Perbaikan Paksa untuk Sticky */
          .custom-sticky-nav {
            width: 100% !important;
            margin-bottom: 0 !important;
          }

          @media (min-width: 992px) {
            .nav-item.dropdown { position: static !important; }
            .nav-item.dropdown .dropdown-menu {
              width: 100%;
              left: 0 !important;
              right: 0 !important;
              top: 100% !important; /* Memastikan menempel di bawah navbar */
              margin-top: 0 !important; /* Menghilangkan gap default bootstrap */
              border: none;
              padding: 0;
            }
            .dropdown-toggle::after { display: none !important; }
            .mega-link:hover { color: ${primaryGreen} !important; padding-left: 5px !important; }
            .nav-link { 
              padding: 20px 0 !important; /* Sesuaikan tinggi agar sejajar */
              display: flex;
              align-items: center;
            }
          }
        `}
      </style>

      {/* Menambahkan class custom-sticky-nav untuk memastikan sticky bekerja */}
      <BootstrapNavbar 
        expanded={expanded} 
        onToggle={setExpanded} 
        expand="lg" 
        className="custom-sticky-nav" 
        style={styles.navbar}
      >
        <Container>
          <BootstrapNavbar.Brand href="/">
            <img src={Logo} style={{ height: '50px' }} alt="Logo" />
          </BootstrapNavbar.Brand>

          <div className="d-flex align-items-center d-lg-none">
            {!expanded && <div className="me-3"><SearchIcon size={22} /></div>}
            <BootstrapNavbar.Toggle style={{ border: 'none', boxShadow: 'none' }}>
              {expanded ? <CloseIcon /> : <span className="navbar-toggler-icon"></span>}
            </BootstrapNavbar.Toggle>
          </div>

          <BootstrapNavbar.Collapse id="main-nav">
            <Nav className="ms-auto pt-3 pt-lg-0 align-items-lg-center">
              
              {/* MOBILE VIEW */}
              <div className="d-lg-none w-100">
                <div style={{backgroundColor: '#f1f1f1', borderRadius: '50px', padding: '10px 18px', display: 'flex', marginBottom: '25px'}}>
                  <SearchIcon size={18} color="#888" />
                  <input type="text" placeholder="Search" style={{border:'none', background:'transparent', marginLeft:'10px', outline:'none', width:'100%'}} />
                </div>
                <Accordion activeKey={activeKey} onSelect={setActiveKey} flush>
                  {menuData.map((menu, idx) => (
                    <div key={idx} className="border-0">
                      <div 
                        style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', cursor: 'pointer' }}
                        onClick={() => setActiveKey(activeKey === idx.toString() ? null : idx.toString())}
                      >
                        <span style={{fontSize: '15px', fontWeight: '600', color: activeKey === idx.toString() ? primaryGreen : '#333'}}>{menu.title}</span>
                        <ChevronIcon isOpen={activeKey === idx.toString()} activeColor={primaryGreen} />
                      </div>
                      <Accordion.Collapse eventKey={idx.toString()}>
                        <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
                          {menu.items.map((item, i) => (
                            <li key={i}><a href="#" style={{ display: 'block', padding: '8px 0', color: '#666', textDecoration: 'none', fontSize: '14px' }}>{item}</a></li>
                          ))}
                        </ul>
                      </Accordion.Collapse>
                    </div>
                  ))}
                </Accordion>
              </div>

              {/* DESKTOP VIEW */}
              <div className="d-none d-lg-flex align-items-center">
                {menuData.map((menu, idx) => {
                  const isThisOpen = openDropdown === idx;
                  return (
                    <NavDropdown 
                      key={idx}
                      onToggle={(isOpen) => setOpenDropdown(isOpen ? idx : null)}
                      title={
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            fontSize: '15px',
                            fontWeight: '600',
                            color: isThisOpen ? primaryGreen : '#333',
                            transition: '0.3s'
                        }}>
                          {menu.title}
                          <ChevronIcon isOpen={isThisOpen} activeColor={primaryGreen} />
                        </div>
                      }
                      id={`nav-dropdown-${idx}`}
                      className="px-3"
                    >
                      <Container style={styles.megaMenuContent}>
                        <Row className="align-items-start">
                          <Col lg={5}>
                            <Row>
                              {menu.items.map((item, i) => (
                                <Col lg={12} key={i}>
                                  <a href={`#${item}`} style={styles.menuItemLink} className="mega-link">
                                    {item}
                                  </a>
                                </Col>
                              ))}
                            </Row>
                          </Col>
                          <Col lg={7}>
                            <div style={styles.bannerContainer}>
                              <div style={{
                                  width: '100%', height: '100%', 
                                  backgroundImage: `linear-gradient(rgba(29, 84, 66, 0.8), rgba(13, 86, 62, 0.95)), url(${Profil})`,
                                  backgroundSize: 'cover', backgroundPosition: 'center',
                                  display: 'flex', 
                                  alignItems: 'flex-end', // Teks di posisi bawah
                                  justifyContent: 'center', // Teks di posisi tengah horizontal
                                  padding: '25px', 
                                  color: 'white',
                                  textAlign: 'center'
                              }}>
                                  <h5 className="mb-0" style={{fontWeight: '600', fontSize: '1.1rem'}}>
                                    Daftar Untuk Program Sarjana Sekarang &rarr;
                                  </h5>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </NavDropdown>
                  );
                })}
                
                <div className="mx-4" style={{ cursor: 'pointer' }}><SearchIcon size={22} /></div>
                
                <button 
                  style={styles.btnPendaftaran}
                  onMouseOver={(e) => e.target.style.opacity = '0.8'}
                  onMouseOut={(e) => e.target.style.opacity = '1'}
                >
                  Pendaftaran <span style={{ marginLeft: '10px' }}>&rarr;</span>
                </button>
              </div>

            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default Navbar;