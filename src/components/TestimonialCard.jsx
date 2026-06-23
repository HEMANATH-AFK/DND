import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialCard({ review }) {
  return (
    <div className="bg-cardBg border border-borderColor p-6 rounded-2xl flex flex-col justify-between h-full hover:border-neutral-700 transition-all duration-300">
      <div>
        {/* Rating Stars */}
        <div className="flex items-center space-x-0.5 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primaryAccent text-primaryAccent" />
          ))}
        </div>

        {/* Comment */}
        <p className="text-sm text-textPrimary leading-relaxed italic mb-6">
          "{review.comment}"
        </p>
      </div>

      {/* Author Details */}
      <div className="flex items-center justify-between border-t border-borderColor/50 pt-4 mt-auto">
        <div>
          <h4 className="text-sm font-bold text-textPrimary">{review.name}</h4>
          <p className="text-xs text-textSecondary">{review.location}</p>
        </div>
        <div className="text-right">
          <span className="inline-block px-2 py-0.5 bg-secondaryBg text-[10px] font-medium text-primaryAccent rounded-md border border-borderColor">
            {review.appliance}
          </span>
          <p className="text-[10px] text-textSecondary/70 mt-1">{review.date}</p>
        </div>
      </div>
    </div>
  );
}
