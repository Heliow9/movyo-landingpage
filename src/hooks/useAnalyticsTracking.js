import { useEffect } from 'react';
import { describeTrackedLink, trackEvent } from '../lib/analytics';

export function useAnalyticsTracking() {
  useEffect(() => {
    function handleClick(event) {
      const anchor = event.target.closest?.('a[href]');
      if (!anchor) return;

      const [name, params] = describeTrackedLink(anchor);
      trackEvent(name, {
        page_path: window.location.pathname,
        ...params,
      });
    }

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);
}
