import React, { useState, useEffect } from 'react';
import { SubpageHeader } from '../components/SubpageHeader';
import { BLOG_ARTICLES, BlogArticle } from '../data/blogData';
import { navigateTo } from '../utils/navigation';
import { ArrowRight, ArrowUpRight, BookOpen, Check, Clock, Filter, Sparkles } from 'lucide-react';

export const BlogIndexPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSuccess, setNewsletterSuccess] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Cinecore Journal — Architecture, Stone & Spatial Choreography';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = ['All', 'Architecture', 'Materials & Stone', 'Spatial Planning', 'Lighting Design'];

  const filteredArticles =
    selectedCat === 'All'
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((a) => a.category === selectedCat);

  const featured = BLOG_ARTICLES[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#171B18] text-[#F5F4EE]">
      <SubpageHeader
        breadcrumbs={[{ label: 'Cinecore Journal' }]}
        eyebrow="EDITORIAL ARCHIVE &middot; QUARTERLY ESSAYS"
        title="The Cinecore Architectural Journal"
        subtitle="Quarterly reflections from our London and Paris ateliers on European spatial proportions, stone quarry selection, acoustic zoning, and daylight choreography."
        metrics={[
          { label: 'Essays Published', value: `${BLOG_ARTICLES.length} Architectural Monologues` },
          { label: 'Circulation', value: 'Over 12,000 Architects & Collectors' },
          { label: 'Atelier Contributor', value: 'Laurent Mercier & Partners' },
        ]}
      />

      {/* Featured Cover Essay */}
      {selectedCat === 'All' && featured && (
        <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722]">
          <div className="max-w-7xl mx-auto">
            <div
              onClick={() => navigateTo(`/blog/${featured.slug}/`)}
              className="group rounded-3xl bg-[#1C201D] border border-white/5 hover:border-[#9DB79A]/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-pointer transition-all duration-300 shadow-2xl"
            >
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto relative overflow-hidden bg-[#171B18]">
                <img
                  src={featured.heroImage}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#171B18]/85 backdrop-blur-md border border-white/10 text-xs font-mono text-[#9DB79A]">
                  COVER EDITORIAL &middot; {featured.category}
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#B7B9AF] mb-3 font-mono">
                    <span>{featured.publishDate}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#9DB79A]" />
                      <span>{featured.readTime}</span>
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading group-hover:text-[#9DB79A] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-[#B7B9AF] leading-relaxed font-body mb-6">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#222722] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-[#222722] border border-white/10">
                      <img src={featured.author.avatar} alt={featured.author.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white font-heading">{featured.author.name}</p>
                      <p className="text-[10px] text-[#B7B9AF] font-mono">{featured.author.role}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#9DB79A] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>Read Essay</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter Bar */}
      <section className="py-8 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722] bg-[#141815]">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          <Filter className="w-4 h-4 text-[#9DB79A] mr-2 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                selectedCat === cat
                  ? 'bg-[#9DB79A] text-[#171B18] shadow-md font-bold'
                  : 'bg-[#222722] text-[#B7B9AF] hover:text-white hover:bg-[#2C322C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.slug}
                onClick={() => navigateTo(`/blog/${article.slug}/`)}
                className="group rounded-3xl bg-[#1C201D] border border-white/5 hover:border-[#9DB79A]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#171B18]">
                    <img
                      src={article.heroImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#171B18]/85 backdrop-blur-md border border-white/10 text-xs font-mono text-[#9DB79A]">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#B7B9AF] mb-2 font-mono">
                      <span>{article.publishDate}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-[#9DB79A] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B7B9AF] leading-relaxed line-clamp-3 font-body">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#222722] flex items-center justify-between text-xs">
                    <span className="text-[#B7B9AF] font-mono">{article.author.name}</span>
                    <span className="text-[#9DB79A] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#141815] text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <BookOpen className="w-8 h-8 text-[#9DB79A] mx-auto" />
          <h2 className="text-3xl font-bold text-white font-heading">
            Subscribe to the Cinecore Monograph
          </h2>
          <p className="text-sm text-[#B7B9AF] font-body leading-relaxed">
            Delivered quarterly. In-depth architectural case studies, stone quarry reports from Italy, and spatial planning blueprints. No promotions.
          </p>

          {newsletterSuccess ? (
            <div className="p-4 rounded-2xl bg-[#222722] border border-[#9DB79A] text-xs text-[#9DB79A] font-mono inline-flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>You have been subscribed to the Cinecore Journal dispatch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="atelier@domain.com"
                className="flex-1 bg-[#171B18] border border-[#222722] rounded-full px-5 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#9DB79A]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer font-heading shadow-md"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
