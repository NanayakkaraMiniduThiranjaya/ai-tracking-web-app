"use client";

import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor page load performance
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            'Page Load Time': Math.round(navigation.loadEventEnd - navigation.fetchStart),
            'DOM Content Loaded': Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
            'First Paint': 0,
          };

          // Get First Paint if available
          const paint = performance.getEntriesByType('paint');
          const firstPaint = paint.find(entry => entry.name === 'first-paint');
          if (firstPaint) {
            metrics['First Paint'] = Math.round(firstPaint.startTime);
          }

          console.group('🚀 Performance Metrics');
          Object.entries(metrics).forEach(([key, value]) => {
            const color = value < 1000 ? '🟢' : value < 3000 ? '🟡' : '🔴';
            console.log(`${color} ${key}: ${value}ms`);
          });
          console.groupEnd();
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return null;
}
