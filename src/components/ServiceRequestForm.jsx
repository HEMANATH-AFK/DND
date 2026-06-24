import React, { useState } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import { chennaiAreas } from '../data/chennaiAreas';
import { getWhatsAppUrl } from '../config/contact';

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`${className} fill-current`} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ServiceRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    area: '',
    date: '',
    description: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.serviceType || !formData.area) {
      setErrorMsg('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    
    // Format date from YYYY-MM-DD to DD/MM/YYYY
    let formattedDate = 'Not specified';
    if (formData.date) {
      const [year, month, day] = formData.date.split('-');
      formattedDate = `${day}/${month}/${year}`;
    }

    const message = `Hello DMD Services,

I would like to book a repair service.

Name: ${formData.name}
Phone: ${formData.phone}
Appliance: ${formData.serviceType}
Area: ${formData.area}
Preferred Date: ${formattedDate}
Issue: ${formData.description || 'Not specified'}

Please arrange a technician visit.`;

    setTimeout(() => {
      window.open(
        getWhatsAppUrl(message),
        "_blank",
        "noopener,noreferrer"
      );
      setStatus('idle');
      setFormData({
        name: '',
        phone: '',
        serviceType: '',
        area: '',
        date: '',
        description: ''
      });
    }, 800);
  };

  return (
    <div className="bg-cardBg border border-borderColor p-6 md:p-8 rounded-2xl max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Request Doorstep Repair</h3>
          <p className="text-xs text-mutedText">Fill in your details below to book via WhatsApp instantly.</p>
        </div>

        {status === 'error' && (
          <div className="p-3.5 bg-red-950/40 border border-red-500/30 text-red-200 text-xs rounded-lg flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-mutedText mb-1">
            Full Name <span className="text-secondaryBlue">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Kumar"
            className="w-full bg-secondaryBg border border-borderColor rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-mutedText/30 focus:outline-none focus:border-secondaryBlue transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-mutedText mb-1">
            Mobile Number <span className="text-secondaryBlue">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            className="w-full bg-secondaryBg border border-borderColor rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-mutedText/30 focus:outline-none focus:border-secondaryBlue transition-colors"
          />
        </div>

        {/* Service Select */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-mutedText mb-1">
              Select Service <span className="text-secondaryBlue">*</span>
            </label>
            <select
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full bg-secondaryBg border border-borderColor rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondaryBlue transition-colors"
            >
              <option value="" disabled>Choose Appliance</option>
              <option value="Air Conditioner">Air Conditioner (AC)</option>
              <option value="Refrigerator">Refrigerator</option>
              <option value="Washing Machine">Washing Machine</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-mutedText mb-1">
              Chennai Locality <span className="text-secondaryBlue">*</span>
            </label>
            <select
              name="area"
              required
              value={formData.area}
              onChange={handleChange}
              className="w-full bg-secondaryBg border border-borderColor rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondaryBlue transition-colors"
            >
              <option value="" disabled>Choose Area</option>
              {chennaiAreas.map((area) => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Date picker */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-mutedText mb-1">
            Preferred Service Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full bg-secondaryBg border border-borderColor rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondaryBlue transition-colors"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-mutedText mb-1">
            Describe the Issue
          </label>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="e.g. AC is not cooling and water is leaking from the indoor unit."
            className="w-full bg-secondaryBg border border-borderColor rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-mutedText/30 focus:outline-none focus:border-secondaryBlue transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center space-x-2 py-3.5 bg-primaryBlue hover:bg-secondaryBlue disabled:bg-neutral-800 text-white text-sm font-extrabold rounded-lg transition-all duration-300 active:scale-98 shadow-[0_4px_12px_rgba(14,95,184,0.25)] border border-borderColor cursor-pointer"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Opening WhatsApp...</span>
            </>
          ) : (
            <>
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Book on WhatsApp</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
