'use client';

import { useState } from 'react';
import { FeatureItem } from '@/data/features-content';

interface Props { features: FeatureItem[]; }

export default function FeaturesTabs({ features }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const current = features[activeTab];

  return (
    <div>
      <div className="border-b border-gray-200 mb-10 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {features.map((feature, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-4 text-base font-semibold whitespace-nowrap transition-all border-b-2 -mb-px cursor-pointer ${activeTab === i ? 'text-emerald-rich border-emerald-rich' : 'text-gray-600 border-transparent hover:text-near-black'}`}
            >
              {feature.title}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
        <div className="flex items-start gap-6 mb-10">
          <div className="w-16 h-16 rounded-2xl bg-emerald-rich text-white flex items-center justify-center font-bold text-2xl flex-shrink-0">{activeTab + 1}</div>
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-near-black mb-3">{current.title}</h2>
            <p className="text-lg text-[#5A6970] leading-relaxed">{current.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {current.capabilities.map((cap, j) => (
            <div key={j} className="flex items-start gap-3 p-4 bg-mint-pale rounded-xl">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5"><circle cx="10" cy="10" r="9" fill="#046A38" /><polyline points="6 10 9 13 14 7" stroke="white" strokeWidth="2" fill="none" /></svg>
              <span className="text-base text-near-black font-medium">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
