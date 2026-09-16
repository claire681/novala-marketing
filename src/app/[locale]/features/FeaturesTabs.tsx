'use client';

import { useState } from 'react';
import { FeatureItem } from '@/data/features-content';

interface Props { features: FeatureItem[]; }

export default function FeaturesTabs({ features }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const current = features[activeTab];

  return (
    <div>
      <div className="border-b border-white/15 mb-8 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex gap-1 min-w-max">
          {features.map((feature, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-4 text-base font-semibold whitespace-nowrap transition-all border-b-2 -mb-px cursor-pointer ${activeTab === i ? 'text-emerald-bright border-emerald-bright' : 'text-white/60 border-transparent hover:text-white'}`}
            >
              {feature.title}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">{current.title}</h2>
        <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">{current.description}</p>

        <div className="text-base md:text-lg text-white leading-loose space-y-1">
          {current.capabilities.map((cap, j) => (
            <div key={j}>
              <span className="text-emerald-bright font-bold mr-3">✓</span>{cap}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
