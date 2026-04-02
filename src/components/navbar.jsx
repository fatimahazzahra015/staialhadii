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
  const primaryGreen = "#008156";

  // Data Halaman untuk Pencarian
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

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle Live Search
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
          .custom-sticky-nav { width: 100% !important; }
          
          @media (min-width: 768px) {
            .nav-item.dropdown { position: static !important; }
            .nav-item.dropdown .dropdown-menu {
              width: 70%; max-width: 1440px; left: 50% !important; transform: translateX(-50%) !important;
              top: 100% !important; margin-top: 0 !important; border: none; box-shadow: 0 15px 30px rgba(0,0,0,0.08); padding: 20px;
            }
            .dropdown-toggle::after { display: none !important; }
          }

          /* --- FULLSCREEN SEARCH OVERLAY (Sesuai Gambar 1 & 2) --- */
          .search-fullscreen {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100vh;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
            z-index: 3000;
            display: flex;
            justify-content: center;
            align-items: flex-start; /* Input muncul agak ke atas */
            padding-top: 20vh;
            opacity: ${isSearchOpen ? '1' : '0'};
            visibility: ${isSearchOpen ? 'visible' : 'hidden'};
            transition: all 0.3s ease;
          }

          .search-card {
            background: white;
            width: 90%;
            max-width: 600px;
            border-radius: 16px; /* Melengkung halus seperti di gambar */
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          }

          .search-header {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            border-bottom: ${filteredResults.length > 0 ? '1px solid #f0f0f0' : 'none'};
          }

          .search-header input {
            flex: 1;
            border: none;
            outline: none;
            font-size: 1.1rem;
            margin-left: 12px;
          }

          .results-list {
            max-height: 60vh;
            overflow-y: auto;
            padding: 10px 0;
          }

          .result-item {
            padding: 12px 25px;
            cursor: pointer;
            transition: 0.2s;
            display: flex;
            flex-direction: column;
          }

          .result-item:hover {
            background-color: #f8f9fa;
          }

          .result-title {
            font-weight: 600;
            color: #333;
            font-size: 0.95rem;
            margin-bottom: 2px;
          }

          .result-path {
            font-size: 0.75rem;
            color: #999;
          }

          .close-search-overlay {
            position: absolute;
            top: 25px;
            right: 30px;
            cursor: pointer;
            color: white;
          }
        `}
      </style>

      {/* --- SEARCH OVERLAY --- */}
      <div className="search-fullscreen" onClick={(e) => e.target === e.currentTarget && closeSearch()}>
        <div className="close-search-overlay" onClick={closeSearch}>
          <CloseIcon color="white" size={30} />
        </div>

        <div className="search-card">
          <div className="search-header">
            <SearchIcon size={20} color="#999" />
            <input 
              ref={searchInputRef}
              placeholder="Cari halaman..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
               <div style={{cursor: 'pointer'}} onClick={() => setSearchQuery("")}>
                  <CloseIcon size={16} color="#ccc" />
               </div>
            )}
          </div>

          {/* List Hasil Pencarian */}
          {filteredResults.length > 0 && (
            <div className="results-list">
              {filteredResults.map((result, index) => (
                <div 
                  key={index} 
                  className="result-item"
                  onClick={() => handleResultClick(result.path)}
                >
                  <span className="result-title">{result.title}</span>
                  <span className="result-path">{result.path}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <BootstrapNavbar expanded={expanded} onToggle={setExpanded} expand="md" className="custom-sticky-nav" style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', padding: '10px', zIndex: 1100 }} sticky="top">
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
            <img src={Logo} style={{ height: '40px', width: 'auto' }} alt="Logo" />
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
              {/* Menu Desktop */}
              <div className="d-none d-md-flex align-items-center">
                {menuData.map((menu, idx) => (
                  <NavDropdown 
                    key={idx} 
                    show={openDropdown === idx} 
                    onMouseEnter={() => setOpenDropdown(idx)} 
                    onMouseLeave={() => setOpenDropdown(null)} 
                    title={<div style={{fontSize: '13px', fontWeight: '600', color: openDropdown === idx ? primaryGreen : '#333'}}>{menu.title}<ChevronIcon isOpen={openDropdown === idx} activeColor={primaryGreen} /></div>}
                  >
                    <Container fluid className="py-2">
                      <Row>
                        <Col md={5}>
                          <p style={{fontSize: '11px', fontWeight: '700', color: '#999', textTransform: 'uppercase'}}>{menu.title}</p>
                          {menu.items.map((item, i) => (
                            <Link key={i} to={getPath(item)} className="d-block py-2 text-decoration-none text-dark" style={{fontSize: '14px'}} onClick={() => setOpenDropdown(null)}>{item}</Link>
                          ))}
                        </Col>
                        <Col md={7}>
                          <div style={{width: '100%', height: '150px', borderRadius: '8px', backgroundImage: `linear-gradient(rgba(0,0,0,0.1), ${primaryGreen}CC), url(${Profil})`, backgroundSize: 'cover', display: 'flex', alignItems: 'flex-end', padding: '15px', color: 'white'}}>
                             <small>Daftar Sekarang &rarr;</small>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown>
                ))}
                <div className="mx-3" style={{cursor: 'pointer'}} onClick={() => setIsSearchOpen(true)}><SearchIcon size={18} /></div>
                <button style={{backgroundColor: '#000', color: '#fff', border: 'none', padding: '8px 15px', fontWeight: '600', fontSize: '12px'}} onClick={() => navigate('/pendaftaran')}>Pendaftaran &rarr;</button>
              </div>

              {/* Accordion Mobile */}
              <div className="d-md-none w-100">
                <Accordion flush>
                  {menuData.map((menu, idx) => (
                    <Accordion.Item eventKey={idx.toString()} key={idx} className="border-0">
                      <Accordion.Header>{menu.title}</Accordion.Header>
                      <Accordion.Body>
                        {menu.items.map((item, i) => (
                          <Link key={i} to={getPath(item)} className="d-block py-2 text-decoration-none text-muted" onClick={() => setExpanded(false)}>{item}</Link>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default Navbar;