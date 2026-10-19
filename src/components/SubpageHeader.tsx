import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface SubpageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
  metrics?: { label: string; value: string }[];
}

export const SubpageHeader: React.FC<SubpageHeaderProps> = ({
  breadcrumbs,
  eyebrow,
  title,
  subtitle,
  actionButton,
  metrics,
}) => {
  return (
    <div className="pt-28 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722] bg-[#171B18]">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs text-[#B7B9AF] mb-6 font-mono">
          <button
            onClick={() => navigateTo('/')}
            className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-[#2C322C] font-bold" aria-hidden="true">/</span>
              {item.path ? (
                <button
                  onClick={() => navigateTo(item.path!)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-[#9DB79A] font-semibold">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Title & Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            {eyebrow && (
              <span className="text-xs uppercase tracking-widest text-[#9DB79A] font-semibold block mb-3 font-mono">
                {eyebrow}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 font-heading">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-[#B7B9AF] max-w-3xl font-body leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {(actionButton || metrics) && (
            <div className="lg:col-span-4 flex flex-col gap-3 w-full">
              {metrics?.map((metric, i) => (
                <div
                  key={i}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#222722] border border-white/5 flex justify-between items-center text-xs"
                >
                  <span className="text-[#B7B9AF]">{metric.label}</span>
                  <strong className="text-white font-mono text-sm">{metric.value}</strong>
                </div>
              ))}
              {actionButton && (
                <button
                  onClick={actionButton.onClick}
                  className="w-full py-4 px-6 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg font-heading"
                >
                  <span>{actionButton.label}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
