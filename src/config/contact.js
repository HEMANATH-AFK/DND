export const whatsappNumber = import.meta.env.VITE_CONTACT_PHONE || "919999999999";

export const phoneUrl = `tel:+${whatsappNumber}`;

export const displayPhone = whatsappNumber.startsWith('91') && whatsappNumber.length === 12
  ? `+91 ${whatsappNumber.slice(2, 7)} ${whatsappNumber.slice(7)}`
  : `+${whatsappNumber}`;

export const getWhatsAppUrl = (text = "") => {
  return `https://wa.me/${whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
};
