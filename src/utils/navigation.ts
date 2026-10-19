export const ROUTE_NAVIGATE_EVENT = 'cinecore:navigate';

export function navigateTo(path: string) {
  // Normalize path
  const targetPath = path.startsWith('/') ? path : `/${path}`;

  if (window.location.pathname === targetPath && !window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.history.pushState({}, '', targetPath);
  window.dispatchEvent(new CustomEvent(ROUTE_NAVIGATE_EVENT, { detail: { path: targetPath } }));
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export function getCurrentPath(): string {
  if (typeof window === 'undefined') return '/';
  const path = window.location.pathname;
  // normalize trailing slashes except for root
  if (path.length > 1 && path.endsWith('/')) {
    return path;
  }
  return path;
}
