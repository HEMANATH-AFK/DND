import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldCheck, 
  Clock3, 
  MapPin, 
  PhoneCall, 
  Wrench, 
  ThumbsUp, 
  Star, 
  CheckCircle,
  Home as HomeIcon
} from 'lucide-react';

import { servicesData } from '../data/servicesData';
import { reviewsData } from '../data/reviewsData';
import { faqData } from '../data/faqData';
import { chennaiAreas } from '../data/chennaiAreas';

import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQAccordion from '../components/FAQAccordion';
import ServiceRequestForm from '../components/ServiceRequestForm';

// Import assets
import technicianAcRepair from '../assets/technician_ac_repair.png';

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`${className} fill-current`} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Home({ onViewDetails }) {
  const whatsappNumber = "919999999999";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20DMD%20Services%2C%20I%20would%20like%20to%20book%20a%20technician%20visit.`;
  const phoneUrl = "tel:+919999999999";

  // Brands list
  const brands = ["Samsung", "LG", "IFB", "Bosch", "Whirlpool", "Godrej", "Haier", "Panasonic"];

  // Local Business Schema JSON-LD
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DMD Services",
    "image": "https://dmdservice.in/logo.png",
    "@id": "https://dmdservice.in",
    "url": "https://dmdservice.in",
    "telephone": "+919999999999",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chennai City Center",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Chennai"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>DMD Services Chennai | AC, Refrigerator & Washing Machine Repair Within 3 Hours</title>
        <meta name="description" content="AC, Refrigerator & Washing Machine Repair at your doorstep in 3 hours. Genuine parts, professional Chennai technicians. Book now!" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-12 overflow-hidden bg-background">
        {/* Subtle background gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primaryBlue/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-primaryBlue/10 border border-primaryBlue/25 rounded-full text-iceBlue text-xs font-bold uppercase tracking-wider">
                <Clock3 className="w-3.5 h-3.5" />
                <span>Doorstep Visit Within 3 Hours</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] font-heading">
                AC, Refrigerator &<br />
                Washing Machine Repair<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondaryBlue via-iceBlue to-white">
                  At Your Home
                </span> <br />
                Within 3 Hours.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-mutedText max-w-xl leading-relaxed">
                Professional doorstep appliance repair across Chennai. Fast diagnosis, genuine spare parts and experienced technicians.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-8 py-4 bg-primaryBlue hover:bg-secondaryBlue text-white text-base font-extrabold rounded-xl transition-all duration-300 active:scale-95 shadow-lg shadow-primaryBlue/20"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Book on WhatsApp</span>
                </a>
                
                <a
                  href={phoneUrl}
                  className="flex items-center justify-center space-x-2 px-8 py-4 bg-secondaryBg border border-borderColor hover:bg-borderColor text-white text-base font-bold rounded-xl transition-all duration-300 active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-secondaryBlue" />
                  <span>Call +91 99999 99999</span>
                </a>
              </div>

              {/* Trust Indicators / Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-borderColor/60">
                {[
                  "✓ Within 3 Hours",
                  "✓ Doorstep Service",
                  "✓ Genuine Spare Parts",
                  "✓ 100% Chennai Coverage"
                ].map((indicator, idx) => (
                  <div key={idx} className="flex items-center space-x-1.5 text-xs text-mutedText">
                    <CheckCircle className="w-3.5 h-3.5 text-secondaryBlue shrink-0" />
                    <span className="font-semibold">{indicator.replace('✓ ', '')}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Side Photo */}
            <div className="lg:col-span-5 relative w-full h-80 sm:h-[450px] rounded-3xl overflow-hidden border border-borderColor shadow-2xl">
              <img
                src={technicianAcRepair}
                alt="Expert technician repairing AC indoor unit"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Blue Overlay and Gradient */}
              <div className="absolute inset-0 bg-primaryBlue/10 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/35" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#131A22]/90 backdrop-blur-md border border-borderColor p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primaryBlue/15 text-secondaryBlue rounded-lg">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider font-heading">Certified Technicians</p>
                    <p className="text-[10px] text-mutedText">Background checked & experienced</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 bg-secondaryBg px-2.5 py-1 rounded-md border border-borderColor">
                  <Star className="w-3.5 h-3.5 text-secondaryBlue fill-secondaryBlue" />
                  <span className="text-xs font-bold text-white">4.9</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="bg-gradient-to-r from-primaryBlue/20 via-background to-background border-y border-borderColor py-5 relative overflow-hidden">
        {/* Blue glow decoration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-secondaryBlue/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4 text-center md:text-left">
            <div className="p-2.5 bg-primaryBlue/15 text-secondaryBlue rounded-xl border border-primaryBlue/20 animate-pulse">
              <Clock3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">Need Service Today?</h3>
              <p className="text-xs text-mutedText mt-0.5">Our technician can reach your location within 3 hours anywhere in Chennai.</p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primaryBlue hover:bg-secondaryBlue text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(45,140,255,0.35)] hover:shadow-[0_0_22px_rgba(45,140,255,0.55)] border border-white/10 flex items-center space-x-2"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-secondaryBg/30 border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-secondaryBlue uppercase tracking-widest">Unmatched Service standards</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Why Choose DMD Services?</h2>
            <p className="text-sm text-mutedText">We design our appliance repair around speed, convenience, and transparency.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock3 className="w-5 h-5 text-secondaryBlue" />,
                title: "Quick Response",
                desc: "Technician dispatched and arriving at your doorstep within 3 hours."
              },
              {
                icon: <HomeIcon className="w-5 h-5 text-secondaryBlue" />,
                title: "Doorstep Service",
                desc: "Complete testing & repair done at your home. No transport needed."
              },
              {
                icon: <Wrench className="w-5 h-5 text-secondaryBlue" />,
                title: "Certified Experts",
                desc: "Highly experienced and certified repairmen for each brand."
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-secondaryBlue" />,
                title: "Trusted Service",
                desc: "Backed by 5000+ local Chennai users with 5-star feedback."
              }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-cardBg border border-borderColor p-6 rounded-2xl hover:border-neutral-700 transition-colors duration-300"
              >
                <div className="p-3 bg-secondaryBg inline-block rounded-xl border border-borderColor mb-4">
                  {card.icon}
                </div>
                <h3 className="font-bold text-base text-white mb-2">{card.title}</h3>
                <p className="text-xs text-mutedText leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-secondaryBlue uppercase tracking-widest">Our Professional Offerings</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Appliance Repair Services</h2>
            <p className="text-sm text-mutedText">Certified diagnostics and professional servicing for three core home appliances.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onViewDetails={onViewDetails}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-secondaryBg/30 border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-secondaryBlue uppercase tracking-widest">4 Simple Steps</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">How It Works</h2>
            <p className="text-sm text-mutedText">Get your appliance fixed quickly from the comfort of your home.</p>
          </div>

          <div className="relative">
            {/* Process Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-borderColor -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "1", title: "Contact Us", desc: "Share details on WhatsApp or phone. Book a convenient slot." },
                { step: "2", title: "Schedule Visit", desc: "Receive immediate scheduling confirmation and tech details." },
                { step: "3", title: "Technician Arrives", desc: "Technician reaches within 3 hours. Diagnoses the error." },
                { step: "4", title: "Repair Completed", desc: "Appliance fixed with genuine parts. Pay post-satisfaction." }
              ].map((item, idx) => (
                <div key={idx} className="bg-cardBg border border-borderColor p-6 rounded-2xl relative text-center">
                  <div className="w-10 h-10 bg-primaryBlue text-white font-extrabold text-base rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-background shadow-md">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-base text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-mutedText leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-secondaryBg/40 border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "5000+", label: "Happy Customers" },
              { val: "3000+", label: "Repairs Completed" },
              { val: "3 Hours", label: "Average Arrival Time" },
              { val: "4.9★", label: "Customer Rating" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-cardBg border border-borderColor p-6 rounded-2xl flex flex-col justify-between items-center text-center shadow-lg relative overflow-hidden group"
              >
                {/* Blue top border highlight */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-secondaryBlue opacity-70 group-hover:opacity-100 transition-opacity" />
                <p className="text-2xl sm:text-3xl font-black text-secondaryBlue">{stat.val}</p>
                <p className="text-xs text-mutedText font-semibold mt-2 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-16 bg-background border-b border-borderColor/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-mutedText uppercase tracking-widest mb-8">Brands We Repair & Service</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="px-4 py-4 bg-cardBg border border-borderColor rounded-xl text-sm font-extrabold text-mutedText/50 tracking-wider uppercase text-center select-none hover:text-secondaryBlue hover:border-secondaryBlue/30 hover:bg-secondaryBg/40 transition-all duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Customer Reviews Section */}
      <section id="reviews" className="py-20 bg-secondaryBg/30 border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-secondaryBlue uppercase tracking-widest">Verified Customer Feedback</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Reviews from Chennai Homeowners</h2>
              <p className="text-sm text-mutedText max-w-lg">Don't take our word for it. Here is what local customers say about our 3-hour doorstep service.</p>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-cardBg border border-borderColor rounded-xl">
              <span className="text-xs text-mutedText font-medium">Google Rating:</span>
              <div className="flex items-center space-x-1 text-secondaryBlue">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-bold text-white">4.9 / 5</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsData.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>

        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-20 bg-background border-b border-borderColor relative overflow-hidden">
        {/* Map Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2A2A2A_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-secondaryBlue uppercase tracking-widest">Location Coverage</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Serving All Major Areas of Chennai</h2>
            <p className="text-sm text-mutedText">Our technicians are stationed locally in multiple hubs to reach you within 3 hours.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {chennaiAreas.map((area, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-cardBg border border-borderColor rounded-xl text-xs font-medium text-mutedText hover:text-secondaryBlue hover:border-secondaryBlue/40 transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
            <span className="px-4 py-2 bg-primaryBlue/10 border border-primaryBlue/20 rounded-xl text-xs font-bold text-secondaryBlue cursor-default">
              Fully Covering Chennai City & Suburbs
            </span>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-secondaryBg/30 border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-secondaryBlue uppercase tracking-widest">Have Questions?</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm text-mutedText">Everything you need to know about our repair warranty, costs, and timeline.</p>
          </div>

          <FAQAccordion items={faqData} />

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-secondaryBlue uppercase tracking-widest">Quick Booking</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                Technician At Your Doorstep Within 3 Hours
              </h2>
              <p className="text-sm text-mutedText leading-relaxed max-w-md">
                Chat directly with our dispatch team on WhatsApp and schedule a technician visit instantly.
              </p>

              {/* Big WhatsApp CTA Button */}
              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-8 py-5 bg-primaryBlue hover:bg-secondaryBlue text-white text-lg font-extrabold rounded-2xl transition-all duration-300 active:scale-95 shadow-[0_4px_20px_rgba(14,95,184,0.3)] border border-borderColor"
                >
                  <WhatsAppIcon className="w-6 h-6 fill-white" />
                  <span>Book Service on WhatsApp</span>
                </a>
              </div>

              {/* Quick Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-borderColor max-w-md">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1.5">Direct Call</h4>
                  <a href={phoneUrl} className="text-base font-bold text-secondaryBlue hover:underline flex items-center space-x-2">
                    <PhoneCall className="w-4 h-4" />
                    <span>+91 99999 99999</span>
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1.5">Service Hours</h4>
                  <p className="text-sm text-mutedText font-medium">8:00 AM - 9:00 PM (Daily)</p>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-6">
              <ServiceRequestForm />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
