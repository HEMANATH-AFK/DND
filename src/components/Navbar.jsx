import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { ShinyButton } from '@hemanath-afk/afk-motion';
import dmdLogo from '../assets/logo.jpg';

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`${className} fill-current`} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Coverage', href: '#service-areas' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappNumber = "919999999999";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20DMD%20Services%2C%20I%20would%20like%20to%20book%20a%20repair%20service.`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'py-4 bg-secondaryBg/80 backdrop-blur-md border-borderColor shadow-lg shadow-background/30' 
        : 'py-6 bg-background/60 backdrop-blur-sm border-borderColor/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <img 
              src={dmdLogo} 
              alt="DMD Services Logo" 
              className="h-10 md:h-12 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-102"
            />
            <span className="font-black text-lg md:text-xl tracking-wider text-white uppercase font-heading">
              DMD
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-textSecondary transition-colors hover:text-secondaryBlue"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Shiny Button */}
          <div>
            <ShinyButton
              onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
              style={{
                background: 'var(--color-primaryBlue)',
                color: 'var(--color-white)',
                border: 'none',
                padding: '11px 22px',
                borderRadius: '10px',
                fontFamily: "var(--font-heading)",
                fontWeight: '800',
                fontSize: '14px',
                boxShadow: '0 4px 14px rgba(14, 95, 184, 0.3)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp Book</span>
            </ShinyButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
