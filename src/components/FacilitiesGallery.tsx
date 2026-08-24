import React, { useState } from 'react';
import { Maximize2, Sparkles, CheckCircle2, Eye, Layers } from 'lucide-react';
import { FACILITIES_LIST } from '../data/gymData';
import { FacilityZone } from '../types';

interface FacilitiesGalleryProps {
  onOpenLightbox: (zone: FacilityZone) => void;
}

export const FacilitiesGallery: React.FC<FacilitiesGalleryProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Heavy Lifting', 'Endurance', 'Hypertrophy', 'Athletics', 'Classes', 'Wellness', 'Amenities'];

  const filteredFacilities =
    selectedCategory === 'ALL'
      ? FACILITIES_LIST
      : FACILITIES_LIST.filter((f) => f.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="facilities" className="py-16 sm:py-24 lg:py-28 bg-[#09090b] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5 flex-shrink-0" />
            <span>18,000+ SQ. FT. FACILITY SHOWCASE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight uppercase leading-tight break-words">
            WORLD-CLASS TRAINING ZONES & <br />
            <span className="text-gradient-amber">PREMIUM AMENITIES</span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Every square foot of APEXFORGE is intentionally organized into dedicated zones with acoustic dampening, hospital-grade air filtration, and professional flooring.
          </p>

          {/* Category Filter Tabs */}
          <div className="pt-3 sm:pt-4 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`facility-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer min-h-[36px] ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredFacilities.map((zone) => (
            <div
              key={zone.id}
              id={`facility-card-${zone.id}`}
              onClick={() => onOpenLightbox(zone)}
              className="group relative rounded-2xl overflow-hidden bg-[#121216] border border-zinc-800 hover:border-amber-500/60 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900 w-full">
                <img
                  src={zone.image}
                  alt={`${zone.name} at APEXFORGE FITNESS`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent opacity-90"></div>

                {/* View Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="px-3 sm:px-4 py-2 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs tracking-wider flex items-center gap-1.5 shadow-lg shadow-amber-500/40">
                    <Eye className="w-4 h-4" /> VIEW SPECS
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-zinc-950/85 backdrop-blur-md border border-zinc-800 text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                  {zone.category}
                </div>
              </div>

              {/* Info Area */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide uppercase group-hover:text-amber-400 transition-colors">
                    {zone.name}
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                    {zone.description}
                  </p>
                </div>

                {/* Specs List Preview */}
                <div className="pt-2 border-t border-zinc-800/80 space-y-1">
                  {zone.specs.slice(0, 2).map((spec, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-300 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick facility metrics */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 lg:bg-transparent lg:border-0">
            <p className="font-display text-2xl sm:text-3xl text-amber-400 font-bold">18,000+</p>
            <p className="text-zinc-400 text-xs mt-0.5">Total Square Feet</p>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 lg:bg-transparent lg:border-0">
            <p className="font-display text-2xl sm:text-3xl text-amber-400 font-bold">8 ZONES</p>
            <p className="text-zinc-400 text-xs mt-0.5">Dedicated Specialized Areas</p>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 lg:bg-transparent lg:border-0">
            <p className="font-display text-2xl sm:text-3xl text-amber-400 font-bold">HEPA 13</p>
            <p className="text-zinc-400 text-xs mt-0.5">Continuous Clean Air Flow</p>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 lg:bg-transparent lg:border-0">
            <p className="font-display text-2xl sm:text-3xl text-amber-400 font-bold">KEYLESS</p>
            <p className="text-zinc-400 text-xs mt-0.5">Smart Lockers & RFID Entry</p>
          </div>
        </div>
      </div>
    </section>
  );
};
