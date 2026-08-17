declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function initDataLayer() {
  if (typeof window !== 'undefined') window.dataLayer = window.dataLayer || [];
}

export function track(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer?.push({ event, ...params });
}
