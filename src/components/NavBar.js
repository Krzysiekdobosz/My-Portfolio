import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { SocialLinks } from './SocialLinks';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'hobby', label: 'Hobby' },
];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (id) => {
    setActiveLink(id);
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className={scrolled || expanded ? 'scrolled' : ''}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={() => handleNavigate('home')}>
          <span className="brand-logo">KD</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {NAV_LINKS.map(({ id, label }) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                className={activeLink === id ? 'active navbar-link' : 'navbar-link'}
                onClick={() => handleNavigate(id)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <SocialLinks />
            <a href="#connect" className="connect-btn" onClick={() => handleNavigate('connect')}>
              <span>Let's Connect</span>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
