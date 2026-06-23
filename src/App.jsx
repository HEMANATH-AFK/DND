import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import Home from './pages/Home';
import { PrivacyPolicy, TermsAndConditions } from './pages/LegalDocs';
import { X, MessageSquare, Phone, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

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
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20DMD%20Service%2C%20I%20want%20to%20book%20a%20technician%20visit%20for%20${encodeURIComponent(activeService.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 bg-successColor hover:bg-emerald-600 text-white text-sm font-extrabold rounded-xl transition-all duration-300 shadow-md shadow-successColor/10"
                >
                  <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href={phoneUrl}
                  className="flex-1 flex items-center justify-center space-x-2 py-3 bg-primaryAccent hover:bg-amber-600 text-background text-sm font-extrabold rounded-xl transition-all duration-300 shadow-md shadow-primaryAccent/10"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call support</span>
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
