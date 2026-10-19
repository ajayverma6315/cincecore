import React, { useEffect } from 'react';
import { SubpageHeader } from '../components/SubpageHeader';
import { getBlogArticleBySlug, BLOG_ARTICLES } from '../data/blogData';
import { navigateTo } from '../utils/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Clock, Share2, Sparkles } from 'lucide-react';

interface BlogArticlePageProps {
  articleSlug: string;
  onOpenConsultation: () => void;
}

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({
  articleSlug,
  onOpenConsultation,
}) => {
  const article = getBlogArticleBySlug(articleSlug) || BLOG_ARTICLES[0];
  const relatedArticles = BLOG_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} — Cinecore Journal`;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#171B18] text-[#F5F4EE] flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold font-heading mb-4">Article Not Found</h2>
        <button
          onClick={() => navigateTo('/blog/')}
          className="px-6 py-2.5 rounded-full bg-[#9DB79A] text-[#171B18] font-bold text-xs uppercase"
        >
          Return to Journal
        </button>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard.');
    }
  };

  return (
    <article className="min-h-screen bg-[#171B18] text-[#F5F4EE]">
      <SubpageHeader
        breadcrumbs={[
          { label: 'Cinecore Journal', path: '/blog/' },
          { label: article.category, path: '/blog/' },
          { label: article.title },
        ]}
        eyebrow={`ARCHITECTURAL MONOGRAPH &middot; ${article.category.toUpperCase()}`}
        title={article.title}
        subtitle={article.subtitle}
        metrics={[
          { label: 'Reading Duration', value: article.readTime },
          { label: 'Published Date', value: article.publishDate },
          { label: 'Lead Architect', value: article.author.name },
        ]}
      />

      {/* Hero Visual */}
      <section className="py-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#1C201D]">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171B18]/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-[#222722]">
                  <img src={article.author.avatar} alt={article.author.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white font-heading">{article.author.name}</p>
                  <p className="text-xs text-[#9DB79A] font-mono">{article.author.role}</p>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="px-4 py-2 rounded-full bg-[#171B18]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F5F4EE] hover:text-[#9DB79A] flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Introduction with drop-cap styling */}
          <div className="text-lg sm:text-xl text-[#F5F4EE] leading-relaxed font-body font-light">
            <span className="float-left text-5xl sm:text-6xl font-bold font-heading text-[#9DB79A] mr-3 leading-none mt-1">
              {article.content.intro.charAt(0)}
            </span>
            {article.content.intro.slice(1)}
          </div>

          {/* Sections */}
          {article.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 pt-6 border-t border-[#222722]">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight">
                {section.heading}
              </h2>
              {section.body.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-[#B7B9AF] leading-relaxed font-body">
                  {p}
                </p>
              ))}
              {section.keyTakeaway && (
                <div className="p-5 rounded-2xl bg-[#1C201D] border-l-4 border-[#9DB79A] mt-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#9DB79A] font-bold block mb-1">
                    ATELIER TAKEAWAY
                  </span>
                  <p className="text-sm text-white font-medium font-body leading-relaxed">
                    {section.keyTakeaway}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Pull Quote */}
          {article.content.quote && (
            <div className="my-12 py-8 px-8 rounded-3xl bg-[#222722]/80 border border-white/5 text-center space-y-4">
              <p className="text-xl sm:text-2xl md:text-3xl text-white font-editorial italic leading-relaxed">
                &ldquo;{article.content.quote.text}&rdquo;
              </p>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] block">
                &mdash; {article.content.quote.attribution}
              </span>
            </div>
          )}

          {/* Conclusion */}
          <div className="pt-6 border-t border-[#222722] space-y-4">
            <h3 className="text-xl font-bold text-white font-heading">Reflections & Architectural Application</h3>
            <p className="text-base text-[#B7B9AF] leading-relaxed font-body">
              {article.content.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-[#222722] flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#1C201D] text-[#9DB79A] border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Services Links */}
          {article.relatedServices.length > 0 && (
            <div className="p-6 rounded-3xl bg-[#1C201D] border border-white/5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block">
                RELATED RESIDENTIAL SERVICES
              </span>
              <div className="flex flex-wrap gap-3">
                {article.relatedServices.map((rel, ri) => (
                  <button
                    key={ri}
                    onClick={() => navigateTo(rel.href)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#222722] hover:bg-[#2C322C] text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    <span>{rel.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#9DB79A]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio Card */}
          <div className="p-8 rounded-3xl bg-[#141815] border border-[#222722] flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-[#9DB79A]">
              <img src={article.author.avatar} alt={article.author.name} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9DB79A] block">
                AUTHOR & PRINCIPAL ARCHITECT
              </span>
              <h4 className="text-lg font-bold text-white font-heading">{article.author.name}</h4>
              <p className="text-xs text-[#B7B9AF] font-body leading-relaxed">
                Directing European residential architectural commissions across London, Paris, and New York. Focused on classical proportions and noble geological materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#222722] bg-[#141815]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              More from the Cinecore Journal
            </h3>
            <button
              onClick={() => navigateTo('/blog/')}
              className="text-xs font-mono text-[#9DB79A] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>View All Essays</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => navigateTo(`/blog/${rel.slug}/`)}
                className="group p-6 rounded-3xl bg-[#171B18] border border-[#222722] hover:border-[#9DB79A]/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#9DB79A] uppercase block mb-1">
                    {rel.category} &middot; {rel.readTime}
                  </span>
                  <h4 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-[#9DB79A] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#B7B9AF] leading-relaxed line-clamp-2 font-body">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#222722] flex items-center justify-between text-xs text-[#9DB79A] font-semibold">
                  <span>Read Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Action Footer */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block">
            TRANSFORM YOUR RESIDENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Translate architectural theory into living calm.
          </h2>
          <p className="text-sm sm:text-base text-[#B7B9AF] font-body max-w-xl mx-auto">
            Discuss your property blueprint with Laurent Mercier and our senior interior architecture team.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-xl font-heading"
            >
              <span>Book Architectural Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};
