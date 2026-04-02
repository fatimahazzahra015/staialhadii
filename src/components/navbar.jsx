import React, { useState, useEffect, useRef } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Accordion, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Profil from '../assets/profil.png';

// --- ICONS ---
const SearchIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 22L20 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = ({ color = "black", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ChevronIcon = ({ isOpen, activeColor }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? activeColor : "#333"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s', marginLeft: '8px' }}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeKey, setActiveKey] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  
  // Warna Brand Utama
  const primaryGreen = "#052B1F"; 
  const overlayGreen = "rgba(5, 43, 31, 0.85)";

  // Data Halaman untuk Fitur Pencarian
  const pages = [
    { title: "Profil Kami", path: "/profil" },
    { title: "Visi dan Misi", path: "/visi-misi" },
    { title: "Dosen dan Tenaga Pendidik", path: "/dosen" },
    { title: "Logo dan Brand", path: "/logo" },
    { title: "Seleksi Masuk", path: "/seleksi-masuk" },
    { title: "Akreditasi", path: "/akreditasi" },
    { title: "Kalender Akademik", path: "/kalender-akademik" },
    { title: "S1 Pendidikan Agama Islam", path: "/prodi/pendidikan-agama-islam" },
    { title: "S1 Pendidikan Bahasa Arab", path: "/prodi/pendidikan-bahasa-arab" },
    { title: "Agenda Kampus", path: "/agenda" },
    { title: "Warta Akademik", path: "/warta" },
    { title: "Pendaftaran Mahasiswa Baru", path: "/pendaftaran" },
  ];

  // Auto-focus input saat search dibuka
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Logika Live Search (Filtering)
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults([]);
    } else {
      const results = pages.filter(page => 
        page.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [searchQuery]);

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const handleResultClick = (path) => {
    navigate(path);
    closeSearch();
    if (expanded) setExpanded(false);
  };

  const menuData = [
    { title: "Tentang Kami", items: ["Profil Kami", "Visi dan Misi", "Dosen dan Tenaga Pendidik", "Logo dan Brand"] },
    { title: "Program", items: ["S1 Pendidikan Agama Islam", "S1 Pendidikan Bahasa Arab"] },
    { title: "Akademik", items: ["Seleksi Masuk", "Akreditasi", "Kalender Akademik"] },
    { title: "Info", items: ["Agenda Kampus", "Warta Akademik"] }
  ];

  const getPath = (item) => {
    const found = pages.find(p => p.title === item);
    return found ? found.path : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <>
      <style>
        {`
          .custom-sticky-nav { width: 100% !important; background-color: #fff; border-bottom: 1px solid #eee; padding: 10px; z-index: 1100; }
          
          @media (min-width: 768px) {
            .nav-item.dropdown { position: static !important; }
            .nav-item.dropdown .dropdown-menu {
              width: 70%; max-width: 1440px; left: 50% !important; transform: translateX(-50%) !important;
              top: 100% !important; margin-top: 0 !important; border: none; box-shadow: 0 15px 30px rgba(0,0,0,0.08); padding: 25px;
            }
            .dropdown-toggle::after { display: none !important; }
            .mega-link:hover { color: ${primaryGreen} !important; padding-left: 5px !important; transition: 0.2s; }
          }

          /* --- SEARCH OVERLAY STYLE --- */
          .search-fullscreen {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100vh;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
            z-index: 3000;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 15vh;
            opacity: ${isSearchOpen ? '1' : '0'};
            visibility: ${isSearchOpen ? 'visible' : 'hidden'};
            transition: all 0.3s ease;
          }

          .search-card {
            background: white;
            width: 90%;
            max-width: 600px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 25px 50px rgba(0,0,0,0.4);
          }

          .search-header {
            display: flex;
            align-items: center;
            padding: 20px;
            border-bottom: ${filteredResults.length > 0 ? '1px solid #eee' : 'none'};
          }

          .search-header input {
            flex: 1;
            border: none;
            outline: none;
            font-size: 1.2rem;
            margin-left: 15px;
            color: #333;
          }

          .results-list {
            max-height: 50vh;
            overflow-y: auto;
          }

          .result-item {
            padding: 15px 25px;
            cursor: pointer;
            border-bottom: 1px solid #f9f9f9;
            display: flex;
            flex-direction: column;
            transition: 0.2s;
          }

          .result-item:hover { background-color: #f8f9fa; }
          .result-title { font-weight: 600; color: #222; font-size: 1rem; }
          .result-path { font-size: 0.8rem; color: #888; margin-top: 2px; }

          .close-overlay-btn {
            position: absolute;
            top: 30px;
            right: 40px;
            cursor: pointer;
            color: white;
            transition: 0.3s;
          }
          .close-overlay-btn:hover { transform: rotate(90deg); }
        `}
      </style>

      {/* --- SEARCH OVERLAY (Live Search) --- */}
      <div className="search-fullscreen" onClick={(e) => e.target === e.currentTarget && closeSearch()}>
        <div className="close-overlay-btn" onClick={closeSearch}>
          <CloseIcon color="white" size={32} />
        </div>

        <div className="search-card">
          <div className="search-header">
            <SearchIcon size={22} color="#888" />
            <input 
              ref={searchInputRef}
              placeholder="Apa yang ingin Anda cari?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
               <div style={{cursor: 'pointer'}} onClick={() => setSearchQuery("")}>
                  <CloseIcon size={18} color="#ccc" />
               </div>
            )}
          </div>

          {filteredResults.length > 0 && (
            <div className="results-list">
              {filteredResults.map((result, index) => (
                <div key={index} className="result-item" onClick={() => handleResultClick(result.path)}>
                  <span className="result-title">{result.title}</span>
                  <span className="result-path">{result.path}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <BootstrapNavbar expanded={expanded} onToggle={setExpanded} expand="md" className="custom-sticky-nav" sticky="top">
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
            <img src={Logo} style={{ height: '42px', width: 'auto' }} alt="Logo" />
          </BootstrapNavbar.Brand>

          <div className="d-flex align-items-center d-md-none">
            {!expanded && (
              <div className="me-3" onClick={() => setIsSearchOpen(true)}><SearchIcon size={22} /></div>
            )}
            <BootstrapNavbar.Toggle style={{ border: 'none', boxShadow: 'none' }}>
              {expanded ? <CloseIcon /> : <span className="navbar-toggler-icon"></span>}
            </BootstrapNavbar.Toggle>
          </div>

          <BootstrapNavbar.Collapse id="main-nav">
            <Nav className="ms-auto pt-3 pt-md-0 align-items-md-center">
              
              {/* --- DESKTOP VIEW --- */}
              <div className="d-none d-md-flex align-items-center">
                {menuData.map((menu, idx) => (
                  <NavDropdown 
                    key={idx} 
                    show={openDropdown === idx} 
                    onMouseEnter={() => setOpenDropdown(idx)} 
                    onMouseLeave={() => setOpenDropdown(null)} 
                    title={
                      <div style={{fontSize: '13px', fontWeight: '600', color: openDropdown === idx ? primaryGreen : '#333', transition: '0.3s'}}>
                        {menu.title}
                        <ChevronIcon isOpen={openDropdown === idx} activeColor={primaryGreen} />
                      </div>
                    }
                  >
                    <Container fluid>
                      <Row className="gx-4">
                        <Col md={5}>
                          <p style={{fontSize: '11px', fontWeight: '700', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px'}}>{menu.title}</p>
                          {menu.items.map((item, i) => (
                            <Link key={i} to={getPath(item)} className="d-block py-2 text-decoration-none text-dark mega-link" style={{fontSize: '14px', fontWeight: '500'}} onClick={() => setOpenDropdown(null)}>
                              {item}
                            </Link>
                          ))}
                        </Col>
                        {/* BANNER MEGAMENU */}
                        <Col md={7}>
                          <div 
                            style={{
                              width: '100%', height: '100%', minHeight: '200px', borderRadius: '12px',
                              backgroundImage: `linear-gradient(${overlayGreen}, ${overlayGreen}), url(${Profil})`,
                              backgroundSize: 'cover', backgroundPosition: 'center',
                              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                              padding: '25px', color: 'white', cursor: 'pointer', transition: '0.3s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.opacity = '0.95'}
                            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                            onClick={() => { navigate('/pendaftaran'); setOpenDropdown(null); }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <h5 style={{ fontWeight: '600', fontSize: '17px', margin: 0 }}>Daftar Untuk Program Sarjana Sekarang</h5>
                              <span style={{ fontSize: '22px' }}>&rarr;</span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown>
                ))}
                
                <div className="mx-3" style={{cursor: 'pointer'}} onClick={() => setIsSearchOpen(true)}>
                  <SearchIcon size={19} color="#333" />
                </div>
                
                <button 
                  style={{backgroundColor: '#000', color: '#fff', border: 'none', padding: '10px 20px', fontWeight: '600', fontSize: '12px', borderRadius: '4px'}}
                  onClick={() => navigate('/pendaftaran')}
                >
                  Pendaftaran &rarr;
                </button>
              </div>

              {/* --- MOBILE VIEW --- */}
              <div className="d-md-none w-100">
                <Accordion flush>
                  {menuData.map((menu, idx) => (
                    <Accordion.Item eventKey={idx.toString()} key={idx} className="border-0">
                      <Accordion.Header>{menu.title}</Accordion.Header>
                      <Accordion.Body>
                        {menu.items.map((item, i) => (
                          <Link key={i} to={getPath(item)} className="d-block py-2 text-decoration-none text-muted" style={{fontSize: '14px'}} onClick={() => setExpanded(false)}>
                            {item}
                          </Link>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
                <div className="p-3">
                  <button className="w-100 p-3" style={{backgroundColor: '#000', color: '#fff', border: 'none', fontWeight: '600'}} onClick={() => {navigate('/pendaftaran'); setExpanded(false);}}>
                    Pendaftaran &rarr;
                  </button>
                </div>
              </div>

            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default Navbar;