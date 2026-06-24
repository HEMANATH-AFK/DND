import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`${className} fill-current`} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ServiceCard({ service, onViewDetails }) {
  const whatsappUrl = `https://wa.me/919999999999?text=Hello%20DMD%20Services%2C%20I%20would%20like%20to%20book%20a%20technician%20visit%20for%20${encodeURIComponent(service.name)}.%20Starting%20price%20is%20%E2%82%B9${service.price}.`;

  return (
    <div 
      className="border border-borderColor rounded-2xl overflow-hidden group transition-transform duration-300 hover:-translate-y-[3px] flex flex-col h-full"
      style={{ background: 'linear-gradient(180deg, #131A22, #0F141B)' }}
    >
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden bg-neutral-900">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F141B]/95 via-transparent to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">
          {service.name}
        </h3>
        <p className="text-sm text-mutedText mb-5 flex-grow leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Pricing indicator */}
        <div className="mb-6 flex items-baseline space-x-1">
          <span className="text-xs text-mutedText/70">Starting</span>
          <span className="text-xl font-black text-secondaryBlue">₹{service.price}</span>
        </div>

        {/* Links & CTA */}
        <div className="space-y-3 mt-auto">
          <button
            onClick={() => onViewDetails(service)}
            className="flex items-center justify-center space-x-1.5 w-full py-2.5 bg-secondaryBg hover:bg-borderColor text-xs font-bold text-white rounded-lg border border-borderColor transition-colors cursor-pointer"
          >
            <span>View Details & Pricing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full py-3 bg-primaryBlue hover:bg-secondaryBlue text-white text-sm font-extrabold rounded-lg transition-all duration-300 shadow-[0_4px_12px_rgba(14,95,184,0.2)]"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Book Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
