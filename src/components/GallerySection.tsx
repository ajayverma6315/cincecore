import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  aspect: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Olive Botanical Salon & Moulding',
    tag: 'Living Space',
    image: '/src/assets/images/hero_olive_living_room_1792337181639.webp',
    aspect: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'g2',
    title: 'Tribeca Fluted Pedestal & Skylight',
    tag: 'Dining Salon',
    image: '/src/assets/images/project_penthouse_dining_1792337182747.webp',
    aspect: 'col-span-1'
  },
  {
    id: 'g3',
    title: 'Honed Travertine Waterfall Island',
    tag: 'Culinary Architecture',
    image: '/src/assets/images/project_travertine_kitchen_1792337183640.webp',
    aspect: 'col-span-1'
  },
  {
    id: 'g4',
    title: 'Cotswolds Linen & Slatted Timber Headboard',
    tag: 'Master Sanctuary',
    image: '/src/assets/images/project_minimalist_bedroom_1792337182811.webp',
    aspect: 'col-span-1'
  },
  {
    id: 'g5',
    title: 'Lacquered Olive Library & Leather Recliner',
    tag: 'Private Study',
    image: '/src/assets/images/project_reading_lounge_1792337182414.webp',
    aspect: 'col-span-1 md:col-span-2'
  }
];

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const prevImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const nextImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_ITEMS.length);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            Visual Index
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Spatial Gallery
          </h2>
        </div>
        <p className="text-sm text-neutral-400 max-w-md">
          A study of light, texture, and quiet refinement across residential living environments.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className={`group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer ${item.aspect}`}
          >
            <div className="relative aspect-[4/3] md:aspect-auto h-full min-h-[300px] w-full">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Hover Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                    {item.tag}
                  </span>
                  <h4 className="text-base sm:text-lg font-medium leading-snug drop-shadow">
                    {item.title}
                  </h4>
                </div>
                <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-3">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev/Next Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image and Caption */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[activeLightboxIndex].image}
              alt={GALLERY_ITEMS[activeLightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs text-emerald-400 font-semibold tracking-wider uppercase block">
                {GALLERY_ITEMS[activeLightboxIndex].tag}
              </span>
              <h3 className="text-lg md:text-xl font-medium text-white mt-1">
                {GALLERY_ITEMS[activeLightboxIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
