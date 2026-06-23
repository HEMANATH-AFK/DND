import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Send, Loader2 } from 'lucide-react';
import { chennaiAreas } from '../data/chennaiAreas';

export default function ServiceRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    area: '',
    date: '',
    description: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
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
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        serviceType: '',
        area: '',
        date: '',
        description: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-cardBg border border-borderColor p-6 md:p-8 rounded-2xl max-w-lg mx-auto">
      {status === 'success' ? (
        <div className="text-center py-8 space-y-4">
          <div className="inline-flex p-3 bg-successColor/10 rounded-full text-successColor">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-bold text-textPrimary">Booking Request Submitted!</h3>
          <p className="text-sm text-textSecondary max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out. A DMD Service coordinator will call you back on your mobile number within 15 minutes to confirm your technician visit.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 px-5 py-2 bg-neutral-800 text-textPrimary text-xs font-semibold rounded-lg border border-borderColor hover:bg-neutral-700 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-textPrimary mb-1">Request Doorstep Repair</h3>
            <p className="text-xs text-textSecondary">Can't reach us on WhatsApp? Fill in your details below and we will call you back instantly.</p>
          </div>

          {status === 'error' && (
            <div className="p-3.5 bg-red-900/20 border border-red-500/30 text-red-200 text-xs rounded-lg flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-textSecondary mb-1">
              Full Name <span className="text-primaryAccent">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className="w-full bg-secondaryBg border border-borderColor rounded-lg px-4 py-2.5 text-sm text-textPrimary placeholder:text-textSecondary/40 focus:outline-none focus:border-primaryAccent transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-textSecondary mb-1">
              Mobile Number <span className="text-primaryAccent">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              className="w-full bg-secondaryBg border border-borderColor rounded-lg px-4 py-2.5 text-sm text-textPrimary placeholder:text-textSecondary/40 focus:outline-none focus:border-primaryAccent transition-colors"
            />
          </div>

          {/* Service Select */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-textSecondary mb-1">
                Select Service <span className="text-primaryAccent">*</span>
              </label>
              <select
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full bg-secondaryBg border border-borderColor rounded-lg px-4 py-2.5 text-sm text-textPrimary focus:outline-none focus:border-primaryAccent transition-colors"
              >
                <option value="" disabled>Choose Appliance</option>
                <option value="AC Service">Air Conditioner (AC)</option>
                <option value="Refrigerator Service">Refrigerator</option>
                <option value="Washing Machine Service">Washing Machine</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-textSecondary mb-1">
                Chennai Locality <span className="text-primaryAccent">*</span>
              </label>
              <select
                name="area"
                required
                value={formData.area}
                onChange={handleChange}
                className="w-full bg-secondaryBg border border-borderColor rounded-lg px-4 py-2.5 text-sm text-textPrimary focus:outline-none focus:border-primaryAccent transition-colors"
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
            <label className="block text-xs font-bold uppercase tracking-wider text-textSecondary mb-1">
              Preferred Service Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-secondaryBg border border-borderColor rounded-lg px-4 py-2.5 text-sm text-textPrimary focus:outline-none focus:border-primaryAccent transition-colors"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-textSecondary mb-1">
              Describe the Issue
            </label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="e.g. AC is not cooling and water is leaking from the indoor unit."
              className="w-full bg-secondaryBg border border-borderColor rounded-lg px-4 py-2.5 text-sm text-textPrimary placeholder:text-textSecondary/40 focus:outline-none focus:border-primaryAccent transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center space-x-2 py-3.5 bg-primaryAccent hover:bg-amber-600 disabled:bg-neutral-700 text-background text-sm font-extrabold rounded-lg transition-all duration-300 active:scale-98 shadow-md"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-background" />
                <span>Scheduling...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 fill-current stroke-none" />
                <span>Request Call Back</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
