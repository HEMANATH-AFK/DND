import React from 'react';
import { Wrench, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer({ onOpenLegal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondaryBg border-t border-borderColor pt-16 pb-28 md:pb-12 text-textSecondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <a href="#hero" className="flex items-center space-x-2">
              <div className="p-2 bg-primaryAccent/10 rounded-lg text-primaryAccent">
                <Wrench className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-xl tracking-wider text-textPrimary uppercase">
                DMD <span className="text-primaryAccent">Service</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed">
              Fast, reliable home appliance repair services across Chennai. Technician at your doorstep within 3 hours. Genuine spare parts and expert servicing.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-textPrimary font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-primaryAccent transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primaryAccent transition-colors">Services Overview</a>
              </li>
              <li>
                <a href="#why-choose" className="hover:text-primaryAccent transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-primaryAccent transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primaryAccent transition-colors">Book Service / Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-textPrimary font-bold text-sm uppercase tracking-widest mb-4">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-primaryAccent transition-colors">Air Conditioner Repair</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primaryAccent transition-colors">Refrigerator Repair</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primaryAccent transition-colors">Washing Machine Repair</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-textPrimary font-bold text-sm uppercase tracking-widest mb-4">Contact Details</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primaryAccent mt-0.5 shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primaryAccent shrink-0" />
                <a href="tel:+919999999999" className="hover:text-primaryAccent transition-colors">+91 99999 99999</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primaryAccent shrink-0" />
                <a href="mailto:info@dmdservice.in" className="hover:text-primaryAccent transition-colors">info@dmdservice.in</a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primaryAccent mt-0.5 shrink-0" />
                <span>Service Hours:<br />8:00 AM - 9:00 PM (Daily)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom border & disclaimer */}
        <div className="border-t border-borderColor mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0">
          <p>&copy; {currentYear} DMD Service. All rights reserved.</p>
          <div className="flex space-x-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-primaryAccent transition-colors cursor-pointer bg-transparent border-none"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-primaryAccent transition-colors cursor-pointer bg-transparent border-none"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
