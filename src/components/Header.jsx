import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin, Mail } from 'lucide-react';
import '../index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: isScrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        transition: 'all 0.3s ease',
        height: 'var(--nav-height)'
      }}
    >
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Code className="text-accent" style={{ color: 'var(--accent-primary)' }} />
          <span>Alla<span className="text-gradient">Pranay</span></span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{ fontWeight: '500', fontSize: '0.95rem', opacity: 0.9 }}
              className="hover-accent"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Socials */}
        <div style={{ display: 'none', gap: '1rem' }} className="desktop-socials">
          <a href="https://github.com/pranayalla" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/pranayalla" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="mailto:pranayalla2@gmail.com">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: 'var(--text-primary)' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--nav-height)',
          left: 0,
          right: 0,
          background: 'var(--bg-secondary)',
          padding: '2rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: '500' }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
            <a href="https://github.com/pranayalla" target="_blank" rel="noopener noreferrer"><Github /></a>
            <a href="https://linkedin.com/in/pranayalla" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            <a href="mailto:pranayalla2@gmail.com"><Mail /></a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-socials { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        .hover-accent:hover { color: var(--accent-primary); }
      `}</style>
    </header>
  );
};

export default Header;
