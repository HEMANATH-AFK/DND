import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import Home from './pages/Home';
import { PrivacyPolicy, TermsAndConditions } from './pages/LegalDocs';
import { X, Phone, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`${className} fill-current`} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function App() {
  const [activeService, setActiveService] = useState(null);
  const [activeLegal, setActiveLegal] = useState(null); // 'privacy', 'terms', or null

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (activeService || activeLegal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeService, activeLegal]);

  const handleCloseAll = () => {
    setActiveService(null);
    setActiveLegal(null);
  };

  const whatsappNumber = "919999999999";
  const phoneUrl = "tel:+919999999999";

  return (
    <div className="flex flex-col min-h-screen bg-background text-textPrimary relative">
      {/* Navbar with smooth scroll targets */}
      <Navbar />

      {/* Main Single Page */}
      <main className="flex-grow">
        <Home onViewDetails={setActiveService} />
      </main>

      {/* Footer triggering legal modals */}
      <Footer onOpenLegal={setActiveLegal} />

      {/* Sticky Call & WhatsApp CTA */}
      <StickyCTA />

      {/* 1. Service Detail Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md transition-opacity">
          {/* Backdrop click close */}
          <div className="absolute inset-0 cursor-pointer" onClick={handleCloseAll} />

          {/* Modal Container */}
          <div className="relative bg-cardBg border border-borderColor rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto z-10 shadow-2xl transition-transform animate-in fade-in zoom-in-95 duration-200">
            {/* Header banner */}
            <div className="relative h-44 bg-neutral-900 border-b border-borderColor">
              <img
                src={activeService.image}
                alt={activeService.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cardBg via-black/40 to-black/60" />
              
              {/* Close Button */}
              <button
                onClick={handleCloseAll}
                className="absolute top-4 right-4 p-2 bg-background/85 hover:bg-neutral-800 text-textSecondary hover:text-textPrimary rounded-full border border-borderColor transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-primaryAccent">Service Rate Card</span>
                <h3 className="text-2xl font-black text-textPrimary mt-0.5">{activeService.name}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6">
              <p className="text-sm text-textSecondary leading-relaxed">{activeService.longDesc}</p>

              {/* Rate Card Table */}
              <div className="border border-borderColor rounded-2xl overflow-hidden">
                <div className="px-5 py-3.5 bg-secondaryBg border-b border-borderColor flex justify-between">
                  <span className="text-xs font-bold text-textPrimary uppercase tracking-wider">Service Type</span>
                  <span className="text-xs font-bold text-textPrimary uppercase tracking-wider">Starting Price</span>
                </div>
                <div className="divide-y divide-borderColor">
                  {activeService.subServices.map((sub, i) => (
                    <div key={i} className="px-5 py-3 flex justify-between items-center text-xs hover:bg-secondaryBg/20 transition-colors">
                      <span className="font-semibold text-textPrimary">{sub.name}</span>
                      <span className="font-bold text-primaryAccent">{sub.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid: What we fix & Guarantee */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-borderColor/60">
                {/* Issues list */}
                <div>
                  <h4 className="text-xs font-bold text-textPrimary uppercase tracking-widest mb-3 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-primaryAccent" />
                    <span>Symptoms We Fix</span>
                  </h4>
                  <ul className="space-y-2">
                    {activeService.commonIssues.map((issue, idx) => (
                      <li key={idx} className="flex items-start text-xs text-textSecondary">
                        <CheckCircle className="w-3.5 h-3.5 text-successColor mr-2 mt-0.5 shrink-0" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Warranties */}
                <div className="p-4 bg-secondaryBg/60 border border-borderColor rounded-2xl space-y-2">
                  <h4 className="text-xs font-bold text-textPrimary uppercase tracking-widest flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-successColor" />
                    <span>DMD Shield Guarantee</span>
                  </h4>
                  <p className="text-[11px] text-textSecondary leading-relaxed">
                    We use 100% original manufacturer spare parts. All repairs are backed by a standard 30-day re-visit warranty. No hidden inspection surcharges.
                  </p>
                </div>
              </div>

              {/* Modal CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-borderColor/60">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20DMD%20Services%2C%20I%20would%20like%20to%20book%20a%20technician%20visit%20for%20${encodeURIComponent(activeService.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 bg-primaryBlue hover:bg-secondaryBlue text-white text-sm font-extrabold rounded-xl transition-all duration-300 shadow-md shadow-primaryBlue/10 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href={phoneUrl}
                  className="flex-1 flex items-center justify-center space-x-2 py-3 bg-secondaryBg hover:bg-borderColor text-white text-sm font-extrabold rounded-xl border border-borderColor transition-all duration-300 shadow-md shadow-background/25 cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Legal Policy Modal (Privacy/Terms) */}
      {activeLegal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md transition-opacity">
          {/* Backdrop click close */}
          <div className="absolute inset-0 cursor-pointer" onClick={handleCloseAll} />

          {/* Modal Container */}
          <div className="relative bg-cardBg border border-borderColor rounded-3xl w-full max-w-3xl max-h-[80vh] overflow-y-auto z-10 shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={handleCloseAll}
              className="absolute top-6 right-6 p-2 bg-secondaryBg hover:bg-neutral-800 text-textSecondary hover:text-textPrimary rounded-full border border-borderColor transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Render component inside modal view */}
            <div className="mt-4">
              {activeLegal === 'privacy' ? <PrivacyPolicy /> : <TermsAndConditions />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
