import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-primaryAccent hover:bg-amber-600 text-background text-sm font-bold rounded-lg transition-all duration-300 active:scale-95 shadow-md shadow-primaryAccent/10"
            >
              <MessageSquare className="w-4 h-4 fill-current stroke-none" />
              <span>Book Service</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-textSecondary hover:text-textPrimary hover:bg-secondaryBg rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`fixed inset-0 top-[60px] w-full bg-background/98 backdrop-blur-lg border-t border-borderColor z-40 transition-transform duration-300 md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium py-2 border-b border-borderColor/50 transition-colors text-textSecondary hover:text-primaryAccent"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 py-4 bg-primaryAccent hover:bg-amber-600 text-background text-base font-extrabold rounded-xl transition-all duration-300 shadow-md shadow-primaryAccent/15"
          >
            <MessageSquare className="w-5 h-5 fill-current stroke-none" />
            <span>Book Service on WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
