import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export default function BeforeAfterGallery() {
  const cases = [
    {
      id: 1,
      title: "Split AC Cooling Coil Restoration",
      description: "Customer complained of weak airflow and zero cooling. Our technician performed a deep jet-pump wet wash and cleared the clogged blower wheel.",
      beforeImg: "https://images.openai.com/static-rsc-4/VFwtstsPTx05JhlXnJP2AFdR5ZqOHDB_7Zdz0rmP9qPYj704Er8hTz0OqNWGftCi6MobXy21VzBjLFAa-w3RdheVlUReVUesyFMTXXFvVPlFKjYkexHFcQBkoj0MQFBypOrxA7BOttc2diRFDGpG5WHo9UvpEcfJbgMQwTWtmF7TJ_MrsBCHzjGW47Q3WBJK?purpose=fullsize",
      afterImg: "https://images.openai.com/static-rsc-4/rKY60zSDi89vDLWAwdSkNhwvygz292f-oB3BgI3o-8JO8uz4OY0BshR89OWBLAgXMKChQvHxVEd9TkoIH3qp79jorwo2ZicwUQ7P3nrKeH8Ugf4nNx5uAnCHKu4V5iJZbmX3r0lK3KfsCelLU2X89wonmR1Xcvya1AqhLJR9BWSDi92wPItcdZLo3riKsT6S?purpose=fullsize",
      beforeMetrics: {
        label: "Blocked Airflow & Dust",
        status: "Poor Cooling"
      },
      afterMetrics: {
        label: "Clean Jet-Washed Fins",
        status: "Ice Cold Cooling"
      }
    },
    {
      id: 2,
      title: "Washing Machine Tub & Bearing Replacement",
      description: "Front-load washer was making violent shaking noises during the spin cycle. We replaced the worn bearing with a genuine OE part.",
      beforeImg: "https://images.openai.com/static-rsc-4/oH4CReDeaZZoOjaXWvR9wwT1JJEwDXueeqlvIXz4gkBalWFhpcAT0-9Vkgx0GxyaTvZhlrxuXBJ3M5-7IJuAoweFU-YRgZ-0Lj6FZGWnbo1YZwOuAkNxV7XtaC1Zd2sJ_kytrCaoemDsBenNxbb9gYHPynCmbn-89EYaYlhoRarkubEtahA-c3VZJZ7ydhkf?purpose=fullsize",
      afterImg: "https://images.openai.com/static-rsc-4/wAigEY76IetnXHxWGXxAikbqSW19b1OIU91LA7a-Q4wivUPjpkwfApJ2H7qcdOuoPGqoUN5t2x8Dv-JeB32PKEJJCNlwiDLmb0FIEmQAJKWfcki5DoggyjFX6psG0W5eXkf84ttyBE-LbQM8fJSS_J4bhoChZR6GMBUWrrEtAPT0Ek1X6twE4r7VQcdtQVM4?purpose=fullsize",
      beforeMetrics: {
        label: "Loud Shaking 85dB",
        status: "Damaged Drum Bearing"
      },
      afterMetrics: {
        label: "Silent Spin 38dB",
        status: "New OEM Bearing Installed"
      }
    }
  ];

  const [activeCase, setActiveCase] = useState(cases[0]);

  return (
    <div className="bg-cardBg border border-borderColor rounded-2xl p-6 md:p-8">
      {/* Navigation tabs */}
      <div className="flex border-b border-borderColor pb-4 mb-6 space-x-4">
        {cases.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCase(c)}
            className={`text-xs md:text-sm font-bold uppercase tracking-wider pb-2 border-b-2 transition-all ${
              activeCase.id === c.id
                ? 'border-primaryAccent text-primaryAccent'
                : 'border-transparent text-textSecondary hover:text-textPrimary'
            }`}
          >
            {c.id === 1 ? "Case 1: AC Repair" : "Case 2: Washing Machine"}
          </button>
        ))}
      </div>

      {/* active case panel */}
      <div>
        <h4 className="text-lg md:text-xl font-bold text-textPrimary mb-2">
          {activeCase.title}
        </h4>
        <p className="text-xs md:text-sm text-textSecondary mb-6 leading-relaxed">
          {activeCase.description}
        </p>

        {/* Side-by-side / Grid showing images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before view */}
          <div className="space-y-3">
            <div className="relative h-60 rounded-xl overflow-hidden bg-neutral-900 border border-borderColor">
              <img
                src={activeCase.beforeImg}
                alt="Before repair work"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/30" />
              <span className="absolute top-3 left-3 px-3 py-1 bg-red-950/90 border border-red-500/30 text-red-200 text-[10px] font-bold uppercase tracking-widest rounded-md">
                Before Service
              </span>
            </div>
            
            <div className="p-4 bg-secondaryBg border border-borderColor rounded-xl flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-textPrimary uppercase tracking-wider">Reported Condition</p>
                <p className="text-xs text-textSecondary mt-0.5">{activeCase.beforeMetrics.label} • <span className="text-red-400 font-semibold">{activeCase.beforeMetrics.status}</span></p>
              </div>
            </div>
          </div>

          {/* After view */}
          <div className="space-y-3">
            <div className="relative h-60 rounded-xl overflow-hidden bg-neutral-900 border border-borderColor">
              <img
                src={activeCase.afterImg}
                alt="After repair work"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/10" />
              <span className="absolute top-3 left-3 px-3 py-1 bg-successColor/90 border border-successColor/30 text-white text-[10px] font-bold uppercase tracking-widest rounded-md">
                After Service
              </span>
            </div>

            <div className="p-4 bg-secondaryBg border border-borderColor rounded-xl flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-successColor shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-textPrimary uppercase tracking-wider">Restored Condition</p>
                <p className="text-xs text-textSecondary mt-0.5">{activeCase.afterMetrics.label} • <span className="text-successColor font-semibold">{activeCase.afterMetrics.status}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
