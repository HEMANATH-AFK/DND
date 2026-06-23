import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-borderColor rounded-xl overflow-hidden bg-cardBg transition-all duration-300"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between p-5 text-left text-textPrimary hover:text-primaryAccent focus:outline-none transition-colors"
            >
              <span className="font-semibold text-sm md:text-base leading-snug">{item.question}</span>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-primaryAccent shrink-0 ml-4" />
              ) : (
                <ChevronDown className="w-5 h-5 text-textSecondary shrink-0 ml-4" />
              )}
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[300px] border-t border-borderColor/50' : 'max-h-0'
              }`}
            >
              <div className="p-5 text-sm text-textSecondary leading-relaxed bg-secondaryBg/30">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
