import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Clock, 
  MapPin, 
  Phone, 
  Wrench, 
  ThumbsUp, 
  Star, 
  MessageSquare, 
  Zap,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

import { servicesData } from '../data/servicesData';
import { reviewsData } from '../data/reviewsData';
import { faqData } from '../data/faqData';
import { chennaiAreas } from '../data/chennaiAreas';

import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQAccordion from '../components/FAQAccordion';
import ServiceRequestForm from '../components/ServiceRequestForm';
import BeforeAfterGallery from '../components/BeforeAfterGallery';

export default function Home({ onViewDetails }) {
  const whatsappUrl = "https://wa.me/919999999999?text=Hi%20DMD%20Service%2C%20I%20would%20like%20to%20book%20a%20technician%20visit%20immediately.";
  const phoneUrl = "tel:+919999999999";

  // Brands list
  const brands = ["Samsung", "LG", "Whirlpool", "IFB", "Bosch", "Haier", "Godrej", "Panasonic"];

  // Local Business Schema JSON-LD
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DMD Service",
    "image": "https://images.openai.com/static-rsc-4/BYdkhbMILcwwe9-jSVdBxZMgNIPGimu2c3cfmKgy3Pd4Rq0nVPsdfVNZ5YKmQltiXz4ov-ZwriOuqOopwzoG5cQ-MpY9t6kMCSwcx61jQTZjAPo1ANpYx4dJemnHUUac5uuhktVP3h_zY7y9-AOM1Ucn8EWpMXjSJPByVw71lcSFUGymbWFLiUwAqLBKL12B?purpose=fullsize",
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
        <title>DMD Service Chennai | AC, Refrigerator & Washing Machine Repair</title>
        <meta name="description" content="Fast home appliance repair service in Chennai. AC, refrigerator and washing machine repair with technician support within 3 hours. Genuine parts." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-primaryAccent/10 border border-primaryAccent/30 rounded-full text-primaryAccent text-xs font-bold uppercase tracking-wider animate-pulse">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>⚡ Service Within 3 Hours</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-textPrimary tracking-tight leading-[1.1]">
                Fast & Reliable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryAccent via-amber-400 to-amber-500">
                  Home Appliance Repair
                </span> <br />
                Across Chennai
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-textSecondary max-w-xl leading-relaxed">
                Expert technicians for Air Conditioners, Refrigerators, and Washing Machines. Same-day doorstep service anywhere in Chennai.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-8 py-4 bg-primaryAccent hover:bg-amber-600 text-background text-base font-extrabold rounded-xl transition-all duration-300 active:scale-95 shadow-lg shadow-primaryAccent/15"
                >
                  <MessageSquare className="w-5 h-5 fill-current stroke-none" />
                  <span>Book on WhatsApp</span>
                </a>
                
                <a
                  href={phoneUrl}
                  className="flex items-center justify-center space-x-2 px-8 py-4 bg-secondaryBg border border-borderColor hover:bg-neutral-800 text-textPrimary text-base font-bold rounded-xl transition-all duration-300 active:scale-95"
                >
                  <Phone className="w-4 h-4 text-primaryAccent fill-primaryAccent" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-borderColor/60">
                {[
                  "Same Day Service",
                  "Experienced Techs",
                  "Genuine Spare Parts",
                  "Doorstep Support"
                ].map((indicator, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-textSecondary">
                    <CheckCircle className="w-4 h-4 text-successColor shrink-0" />
                    <span className="font-medium">{indicator}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Side Photo */}
            <div className="lg:col-span-5 relative w-full h-80 sm:h-[450px] rounded-3xl overflow-hidden border border-borderColor/80 shadow-2xl">
              <img
                src="https://images.openai.com/static-rsc-4/BYdkhbMILcwwe9-jSVdBxZMgNIPGimu2c3cfmKgy3Pd4Rq0nVPsdfVNZ5YKmQltiXz4ov-ZwriOuqOopwzoG5cQ-MpY9t6kMCSwcx61jQTZjAPo1ANpYx4dJemnHUUac5uuhktVP3h_zY7y9-AOM1Ucn8EWpMXjSJPByVw71lcSFUGymbWFLiUwAqLBKL12B?purpose=fullsize"
                alt="Expert technician repairing appliance at doorstep"
                className="w-full h-full object-cover object-center"
              />
              {/* Dark overlay for consistent premium theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-background/85 backdrop-blur-md border border-borderColor p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-successColor/10 text-successColor rounded-lg">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-textPrimary uppercase tracking-wider">Certified Technicians</p>
                    <p className="text-[10px] text-textSecondary">Background checked & fully insured</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 bg-secondaryBg px-2.5 py-1 rounded-md border border-borderColor">
                  <Star className="w-3.5 h-3.5 text-primaryAccent fill-primaryAccent" />
                  <span className="text-xs font-bold text-textPrimary">4.9/5</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="bg-gradient-to-r from-red-950/40 via-background to-background border-y border-red-500/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="p-1.5 bg-red-900/30 text-red-400 rounded-md border border-red-500/30 animate-pulse">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-xs uppercase tracking-wider text-red-200">Need urgent repair today?</span>
              <p className="text-xs text-textSecondary">Book instantly on WhatsApp for emergency slots. No extra fee.</p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center space-x-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current stroke-none" />
            <span>Book Emergency Visit</span>
          </a>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-secondaryBg/40 border-b border-borderColor py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "5000+", label: "Happy Customers" },
              { val: "3000+", label: "Repairs Completed" },
              { val: "3 Hours", label: "Response Time" },
              { val: "4.9/5", label: "Customer Rating" }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-primaryAccent">{stat.val}</p>
                <p className="text-xs text-textSecondary uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-12 bg-background border-b border-borderColor/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-textSecondary uppercase tracking-widest mb-6">Brands We Repair & Service</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="px-5 py-2.5 bg-secondaryBg border border-borderColor rounded-xl text-sm font-semibold text-textPrimary tracking-wide select-none"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-secondaryBg/30 border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primaryAccent uppercase tracking-widest">Unmatched Service standards</span>
            <h2 className="text-3xl font-extrabold text-textPrimary tracking-tight">Why Choose DMD Service?</h2>
            <p className="text-sm text-textSecondary">We design our appliance repair around speed, convenience, and transparency.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock className="w-5 h-5 text-primaryAccent" />,
                title: "⚡ Quick Response",
                desc: "Technician dispatched and arriving within 3 hours."
              },
              {
                icon: <MapPin className="w-5 h-5 text-primaryAccent" />,
                title: "🏠 Doorstep Service",
                desc: "Complete testing & repair done at your home. No transport needed."
              },
              {
                icon: <Wrench className="w-5 h-5 text-primaryAccent" />,
                title: "🛠 Certified Experts",
                desc: "Highly experienced and certified repairmen for each brand."
              },
              {
                icon: <ThumbsUp className="w-5 h-5 text-primaryAccent" />,
                title: "⭐ Trusted Service",
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
                <h3 className="font-bold text-base text-textPrimary mb-2">{card.title}</h3>
                <p className="text-xs text-textSecondary leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primaryAccent uppercase tracking-widest">Our Professional Offerings</span>
            <h2 className="text-3xl font-extrabold text-textPrimary tracking-tight">Appliance Repair Services</h2>
            <p className="text-sm text-textSecondary">Certified diagnostics and professional servicing for three core home appliances.</p>
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
            <span className="text-xs font-bold text-primaryAccent uppercase tracking-widest">4 Simple Steps</span>
            <h2 className="text-3xl font-extrabold text-textPrimary tracking-tight">How It Works</h2>
            <p className="text-sm text-textSecondary">Get your appliance fixed quickly from the comfort of your home.</p>
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
                  <div className="w-10 h-10 bg-primaryAccent text-background font-extrabold text-base rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-background shadow-md">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-base text-textPrimary mb-2">{item.title}</h3>
                  <p className="text-xs text-textSecondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Before / After Gallery Section */}
      <section className="py-20 bg-background border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primaryAccent uppercase tracking-widest">Real Quality Results</span>
            <h2 className="text-3xl font-extrabold text-textPrimary tracking-tight">Repair & Service Showcase</h2>
            <p className="text-sm text-textSecondary">Take a look at the quality difference. We clean and fix back to factory performance.</p>
          </div>

          <BeforeAfterGallery />

        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-20 bg-secondaryBg/30 border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-primaryAccent uppercase tracking-widest">Verified Customer Feedback</span>
              <h2 className="text-3xl font-extrabold text-textPrimary tracking-tight">Reviews from Chennai Homeowners</h2>
              <p className="text-sm text-textSecondary max-w-lg">Don't take our word for it. Here is what local customers say about our 3-hour doorstep service.</p>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-cardBg border border-borderColor rounded-xl">
              <span className="text-xs text-textSecondary font-medium">Google Rating:</span>
              <div className="flex items-center space-x-1 text-primaryAccent">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-bold text-textPrimary">4.9 / 5</span>
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
            <span className="text-xs font-bold text-primaryAccent uppercase tracking-widest">Location Coverage</span>
            <h2 className="text-3xl font-extrabold text-textPrimary tracking-tight">Serving All Major Areas of Chennai</h2>
            <p className="text-sm text-textSecondary">Our technicians are stationed locally in multiple hubs to reach you within 3 hours.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {chennaiAreas.map((area, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-cardBg border border-borderColor rounded-xl text-xs font-medium text-textSecondary hover:text-primaryAccent hover:border-primaryAccent/40 transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
            <span className="px-4 py-2 bg-primaryAccent/10 border border-primaryAccent/20 rounded-xl text-xs font-bold text-primaryAccent cursor-default">
              Fully Covering Chennai City & Suburbs
            </span>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-secondaryBg/30 border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primaryAccent uppercase tracking-widest">Have Questions?</span>
            <h2 className="text-3xl font-extrabold text-textPrimary tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm text-textSecondary">Everything you need to know about our repair warranty, costs, and timeline.</p>
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
              <span className="text-xs font-bold text-primaryAccent uppercase tracking-widest">Quick Booking</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-textPrimary tracking-tight">Need Immediate Assistance?</h2>
              <p className="text-sm text-textSecondary leading-relaxed max-w-md">
                Chat directly with our dispatch team on WhatsApp and schedule a technician visit instantly.
              </p>

              {/* Big WhatsApp CTA Button */}
              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-8 py-5 bg-successColor hover:bg-emerald-600 text-white text-lg font-extrabold rounded-2xl transition-all duration-300 active:scale-95 shadow-lg shadow-successColor/15"
                >
                  <MessageSquare className="w-6 h-6 fill-white stroke-none" />
                  <span>Book Service on WhatsApp</span>
                </a>
              </div>

              {/* Quick Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-borderColor max-w-md">
                <div>
                  <h4 className="text-xs font-bold text-textPrimary uppercase tracking-widest mb-1.5">Direct Call</h4>
                  <a href={phoneUrl} className="text-base font-bold text-primaryAccent hover:underline flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 99999 99999</span>
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-textPrimary uppercase tracking-widest mb-1.5">Service Hours</h4>
                  <p className="text-sm text-textSecondary font-medium">8:00 AM - 9:00 PM (Daily)</p>
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
