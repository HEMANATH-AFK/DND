import React from 'react';
import { Check, MessageSquare, ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, onViewDetails }) {
  const whatsappUrl = `https://wa.me/919999999999?text=Hi%20DMD%20Service%2C%20I%20want%20to%20book%20${encodeURIComponent(service.name)}.%20Starting%20price%20is%20%E2%82%B9${service.price}.`;

  return (
    <div className="bg-cardBg border border-borderColor rounded-2xl overflow-hidden group hover:border-primaryAccent/50 transition-all duration-300 flex flex-col h-full">
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden bg-neutral-900">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm border border-borderColor rounded-full">
          <span className="text-xs text-textSecondary">Starts from</span>
          <span className="text-sm font-bold text-primaryAccent ml-1">₹{service.price}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-textPrimary mb-2 group-hover:text-primaryAccent transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-textSecondary mb-5 flex-grow leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Feature Checkmarks */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-xs text-textSecondary">
              <div className="p-0.5 bg-successColor/10 rounded-full mr-2 text-successColor">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Links & CTA */}
        <div className="space-y-3 mt-auto">
          <button
            onClick={() => onViewDetails(service)}
            className="flex items-center justify-center space-x-1.5 w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-textPrimary rounded-lg border border-borderColor transition-colors cursor-pointer"
          >
            <span>View Details & Pricing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full py-3 bg-primaryAccent hover:bg-amber-600 text-background text-sm font-extrabold rounded-lg transition-all duration-300 shadow-md shadow-primaryAccent/5"
          >
            <MessageSquare className="w-4 h-4 fill-current stroke-none" />
            <span>Book via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
