import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function StickyCTA() {
  const phoneNumber = "+919999999999";
  const whatsappNumber = "919999999999";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20DMD%20Service%2C%20I%20need%20doorstep%20appliance%20repair%20service.`;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-secondaryBg/90 backdrop-blur-md border-t border-borderColor px-4 py-3 md:hidden flex gap-3">
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex-1 flex items-center justify-center space-x-2 py-3 bg-cardBg hover:bg-neutral-800 border border-borderColor text-textPrimary text-sm font-bold rounded-xl active:scale-95 transition-all"
      >
        <Phone className="w-4 h-4 text-primaryAccent fill-primaryAccent" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.5] flex items-center justify-center space-x-2 py-3 bg-successColor hover:bg-emerald-600 text-white text-sm font-extrabold rounded-xl active:scale-95 transition-all shadow-md shadow-successColor/10"
      >
        <MessageSquare className="w-4 h-4 fill-white stroke-none" />
        <span>WhatsApp Book</span>
      </a>
    </div>
  );
}
