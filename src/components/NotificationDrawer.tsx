import React, { useEffect } from 'react';
import { X, Bell, ExternalLink, CheckCheck } from 'lucide-react';
import { StudioNotification } from '../data/projectsData';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: StudioNotification[];
  onMarkAllAsRead: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllAsRead,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-md h-full bg-[#171B18] text-[#F5F4EE] border-l border-[#222722] shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#222722] flex items-center justify-between sticky top-0 bg-[#171B18]/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-[#9DB79A]" />
            <h3 className="text-lg font-bold text-white font-heading">Studio Dispatches</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close notifications"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action bar */}
        <div className="px-6 py-3 bg-[#222722]/50 border-b border-[#222722] flex items-center justify-between text-xs text-[#B7B9AF] font-body">
          <span>{notifications.filter((n) => !n.read).length} unread updates</span>
          <button
            onClick={onMarkAllAsRead}
            className="text-[#9DB79A] hover:text-[#8ca889] flex items-center gap-1 cursor-pointer font-medium"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            Mark all read
          </button>
        </div>

        {/* Notifications list */}
        <div className="p-6 space-y-4 flex-1 overflow-y-auto">
          {notifications.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border transition-all ${
                item.read
                  ? 'bg-[#222722]/40 border-white/5 opacity-80'
                  : 'bg-[#222722] border-white/15 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1.5 font-body">
                <span className="text-[#9DB79A] font-semibold tracking-wider uppercase font-mono">
                  {item.date}
                </span>
                {!item.read && (
                  <span className="w-2 h-2 rounded-full bg-[#9DB79A]" title="Unread" />
                )}
              </div>
              <h4 className="text-sm font-semibold text-white mb-1.5 font-heading">{item.title}</h4>
              <p className="text-xs text-[#B7B9AF] leading-relaxed mb-3 font-body">{item.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-xs text-white/90 hover:text-[#9DB79A] font-medium cursor-pointer transition-colors font-body">
                <span>{item.linkText}</span>
                <ExternalLink className="w-3 h-3 text-[#9DB79A]" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
