import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Accordion, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const primaryGreen = "#008156"; 

  const styles = {
    navbar: {
      backgroundColor: '#fff',
      borderBottom: '1px solid #eee',
      padding: '10px',
      zIndex: 1100,
    },
    btnPendaftaran: {
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      padding: '10px 14px',
      fontWeight: '600',
      fontSize: '12px',
      transition: '0.3s',
      whiteSpace: 'nowrap'
    },
    menuItemLink: {
      display: 'block',
      padding: '8px 0',
      color: '#333',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      transition: '0.2s'
    },
    bannerContainer: {
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        minHeight: '200px',
        cursor: 'pointer',
        borderRadius: '8px'
    }
  };

  const menuData = [
    { title: "Tentang Kami", items: ["Profil Kami", "Visi dan Misi", "Dosen dan Tenaga Pendidik", "Logo dan Brand"] },
    { title: "Program", items: ["S1 Pendidikan Agama Islam", "S1 Pendidikan Bahasa Arab"] },
    { title: "Akademik", items: ["Seleksi Masuk", "Akreditasi", "Kalender Akademik"] },
    { title: "Info", items: ["Agenda Kampus", "Warta Akademik"] }
  ];

  const getPath = (item) => {
    if (item === "Warta Akademik") return "/warta";
    return `/${item.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <>
      <style>
        {`
          .custom-sticky-nav { width: 100% !important; }
          
          /* Megamenu Desktop/Tablet Settings */
          @media (min-width: 768px) {
            .nav-item.dropdown { position: static !important; }
            .nav-item.dropdown .dropdown-menu {
              width: 100vw;
              max-width: 1440px;
              left: 50% !important;
              transform: translateX(-50%) !important;
              top: 100% !important;
              margin-top: 0 !important;
              border: none;
              border-bottom: 2px solid #eee;
              box-shadow: 0 15px 30px rgba(0,0,0,0.08);
              padding: 20px;
            }
            .dropdown-toggle::after { display: none !important; }
            .mega-link:hover { color: ${primaryGreen} !important; padding-left: 5px !important; }
          }

          @media (max-width: 767.98px) {
            .navbar-collapse {
              max-height: 85vh;
              overflow-y: auto;
              padding: 10px 0 40px 0;
            }
            .mobile-search-container {
              margin-bottom: 25px; /* Jarak antara search dan menu */
            }
            .pendaftaran-wrapper {
              padding-top: 15px;
              padding-bottom: 5px;
            }
          }
        `}
      </style>

      <BootstrapNavbar 
        expanded={expanded} 
        onToggle={setExpanded} 
        expand="md" 
        className="custom-sticky-nav" 
        style={styles.navbar}
        sticky="top"
      >
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
            <img src={Logo} style={{ height: '40px', width: 'auto' }} alt="Logo" />
          </BootstrapNavbar.Brand>

          <div className="d-flex align-items-center d-md-none">
            {!expanded && <div className="me-3" style={{cursor: 'pointer'}}><SearchIcon size={22} /></div>}
            <BootstrapNavbar.Toggle style={{ border: 'none', boxShadow: 'none' }}>
              {expanded ? <CloseIcon /> : <span className="navbar-toggler-icon"></span>}
            </BootstrapNavbar.Toggle>
          </div>

          <BootstrapNavbar.Collapse id="main-nav">
            <Nav className="ms-auto pt-3 pt-md-0 align-items-md-center">
              
              {/* --- MOBILE VIEW --- */}
              <div className="d-md-none w-100">
                <div className="mobile-search-container" style={{backgroundColor: '#f5f5f5', borderRadius: '50px', padding: '10px 18px', display: 'flex', alignItems: 'center'}}>
                  <SearchIcon size={18} color="#888" />
                  <input type="text" placeholder="Cari informasi..." style={{border:'none', background:'transparent', marginLeft:'10px', outline:'none', width:'100%', fontSize:'14px'}} />
                </div>

                <Accordion activeKey={activeKey} onSelect={setActiveKey} flush>
                  {menuData.map((menu, idx) => (
                    <div key={idx} className="border-0">
                      <div 
                        style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 5px', cursor: 'pointer' }}
                        onClick={() => setActiveKey(activeKey === idx.toString() ? null : idx.toString())}
                      >
                        <span style={{fontSize: '15px', fontWeight: '600', color: activeKey === idx.toString() ? primaryGreen : '#333'}}>{menu.title}</span>
                        <ChevronIcon isOpen={activeKey === idx.toString()} activeColor={primaryGreen} />
                      </div>
                      <Accordion.Collapse eventKey={idx.toString()}>
                        <ul style={{ listStyle: 'none', paddingLeft: '15px', borderLeft: `2px solid #eee` }}>
                          {menu.items.map((item, i) => (
                            <li key={i}>
                              <Link 
                                to={getPath(item)} 
                                style={{ display: 'block', padding: '10px 0', color: '#666', textDecoration: 'none', fontSize: '14px' }}
                                onClick={() => setExpanded(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Collapse>
                    </div>
                  ))}
                </Accordion>

                <div className="pendaftaran-wrapper">
                    <button 
                        style={{...styles.btnPendaftaran, width: '100%'}}
                        onClick={() => { navigate('/pendaftaran'); setExpanded(false); }}
                    >
                        Pendaftaran  &rarr;
                    </button>
                </div>
              </div>

              {/* --- DESKTOP & TABLET VIEW --- */}
              <div className="d-none d-md-flex align-items-center">
                {menuData.map((menu, idx) => {
                  const isThisOpen = openDropdown === idx;
                  return (
                    <NavDropdown 
                      key={idx}
                      onMouseEnter={() => setOpenDropdown(idx)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      show={isThisOpen}
                      title={
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            fontSize: '13px',
                            fontWeight: '600',
                            color: isThisOpen ? primaryGreen : '#333',
                            transition: '0.3s'
                        }}>
                          {menu.title}
                          <ChevronIcon isOpen={isThisOpen} activeColor={primaryGreen} />
                        </div>
                      }
                      id={`nav-dropdown-${idx}`}
                      className="px-1 px-lg-2"
                    >
                      <Container fluid className="py-2">
                        <Row className="gx-4">
                          <Col md={5} lg={4}>
                            <p style={{fontSize: '11px', fontWeight: '700', color: '#999', letterSpacing: '1px', marginBottom: '15px', textTransform: 'uppercase'}}>{menu.title}</p>
                            <Row>
                              {menu.items.map((item, i) => (
                                <Col xs={12} key={i}>
                                  <Link 
                                    to={getPath(item)} 
                                    style={styles.menuItemLink} 
                                    className="mega-link"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {item}
                                  </Link>
                                </Col>
                              ))}
                            </Row>
                          </Col>
                          <Col md={7} lg={8}>
                            <div 
                              style={styles.bannerContainer}
                              onClick={() => { navigate('/pendaftaran'); setOpenDropdown(null); }}
                            >
                              <div style={{
                                  width: '100%', height: '100%', 
                                  backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0, 129, 86, 0.85)), url(${Profil})`,
                                  backgroundSize: 'cover', backgroundPosition: 'center',
                                  display: 'flex', 
                                  alignItems: 'flex-end',
                                  padding: '30px', 
                                  color: 'white'
                              }}>
                                  <div>
                                    <h5 className="mb-2" style={{fontWeight: '700'}}>Pendaftaran Mahasiswa Baru</h5>
                                    <p className="mb-0" style={{opacity: '0.9', fontSize: '13px'}}>Wujudkan masa depan gemilang bersama kami. Daftar sekarang!</p>
                                  </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </NavDropdown>
                  );
                })}
                
                <div className="me-3 ms-lg-2" style={{ cursor: 'pointer' }}><SearchIcon size={18} /></div>
                
                <button 
                  style={styles.btnPendaftaran}
                  onMouseOver={(e) => e.target.style.opacity = '0.8'}
                  onMouseOut={(e) => e.target.style.opacity = '1'}
                  onClick={() => navigate('/pendaftaran')}
                >
                  Pendaftaran <span style={{ marginLeft: '4px' }}>&rarr;</span>
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