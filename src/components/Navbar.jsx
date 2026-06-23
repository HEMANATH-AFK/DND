import React, { useState, useEffect } from 'react';
import { Wrench, MessageSquare } from 'lucide-react';
import { ShinyButton } from '@hemanath-afk/afk-motion';

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
    { name: 'Why Us', href: '#why-choose' },
    { name: 'How It Works', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappNumber = "919999999999";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20DMD%20Service%2C%20I%20would%20like%20to%20book%20a%20technician%20visit.`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'py-3 bg-secondaryBg/95 backdrop-blur-md border-borderColor shadow-lg shadow-background/20' 
        : 'py-5 bg-background border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2 group">
            <div className="p-2 bg-primaryAccent/10 rounded-lg text-primaryAccent group-hover:bg-primaryAccent group-hover:text-background transition-all duration-300">
              <Wrench className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="font-extrabold text-xl tracking-wider text-textPrimary uppercase">
              DMD <span className="text-primaryAccent">Service</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-textSecondary transition-colors hover:text-primaryAccent"
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
                background: 'var(--color-primaryAccent)',
                color: 'var(--color-background)',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontFamily: "var(--font-sans)",
                fontWeight: 'bold',
                fontSize: '14px',
                boxShadow: '0 4px 6px -1px rgba(245, 158, 11, 0.2)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <MessageSquare className="w-4 h-4 fill-current stroke-none" />
              <span>Book Service</span>
            </ShinyButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
