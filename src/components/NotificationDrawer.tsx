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
        className="relative w-full max-w-md h-full bg-neutral-900 border-l border-white/10 shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-neutral-900/90 backdrop-blur-md z-10">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Studio Dispatches</h3>
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
        <div className="px-6 py-3 bg-white/[0.02] border-b border-white/5 flex items-center justify-between text-xs text-neutral-400">
          <span>{notifications.filter((n) => !n.read).length} unread updates</span>
          <button
            onClick={onMarkAllAsRead}
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer font-medium"
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
                  ? 'bg-neutral-950/40 border-white/5 opacity-80'
                  : 'bg-white/[0.04] border-white/15 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1.5">
                <span className="text-emerald-400 font-semibold tracking-wider uppercase">
                  {item.date}
                </span>
                {!item.read && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400" title="Unread" />
                )}
              </div>
              <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
              <p className="text-xs text-neutral-300 leading-relaxed mb-3">{item.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-xs text-white/90 hover:text-white font-medium cursor-pointer">
                <span>{item.linkText}</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
