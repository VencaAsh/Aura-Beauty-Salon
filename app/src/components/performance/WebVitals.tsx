'use client';

import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  rating?: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  id?: string;
}

export default function WebVitals() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;



    // Check if performance API is available
    if (!window.performance) {
      if (process.env.NODE_ENV !== 'production') console.warn('⚠️ Performance API not available');
      return;
    }

    // Function to send metrics to analytics
    const sendToAnalytics = (metric: WebVitalsMetric) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log(`✅ ${metric.name}:`, {
          value: `${metric.value.toFixed(2)}ms`,
          rating: metric.rating,
          id: metric.id
        });
      }

      // Send to Google Analytics if available
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: metric.name,
          value: Math.round(metric.value),
          event_category: 'Performance',
          custom_parameter_1: metric.rating,
          custom_parameter_2: metric.id,
        });
      }

      // Log warnings for poor performance (updated for web-vitals 5.x)
      const thresholds = {
        LCP: { good: 2500, poor: 4000 },
        INP: { good: 200, poor: 500 }, // Interaction to Next Paint (replaces FID)
        CLS: { good: 0.1, poor: 0.25 },
        FCP: { good: 1800, poor: 3000 },
        TTFB: { good: 600, poor: 1500 }
      };

      const threshold = thresholds[metric.name as keyof typeof thresholds];
      if (threshold) {
        if (metric.value > threshold.poor) {
          if (process.env.NODE_ENV !== 'production') console.warn(`⚠️ Poor ${metric.name}: ${metric.value.toFixed(2)}ms (target: <${threshold.good}ms)`);
        } else if (metric.value > threshold.good) {
          if (process.env.NODE_ENV !== 'production') console.warn(`⚡ ${metric.name} needs improvement: ${metric.value.toFixed(2)}ms (target: <${threshold.good}ms)`);
        } else {
          if (process.env.NODE_ENV !== 'production') console.log(`✅ Good ${metric.name}: ${metric.value.toFixed(2)}ms`);
        }
      }
    };

    // Measure Core Web Vitals with conditional loading
    const measureWebVitals = async () => {
      try {


        // Try to load web-vitals library conditionally
        if (typeof window !== 'undefined') {
          // Use a more compatible import approach
          const webVitals = await import('web-vitals').catch(() => null);

          if (webVitals) {


            // Use the correct function names for web-vitals 5.x
            const { onCLS, onINP, onFCP, onLCP, onTTFB } = webVitals;

            if (onLCP) {
              onLCP((metric: any) => {
                sendToAnalytics({
                  name: 'LCP',
                  value: metric.value,
                  rating: metric.rating,
                  delta: metric.delta,
                  id: metric.id
                });
              });
            }

            if (onINP) {
              onINP((metric: any) => {
                sendToAnalytics({
                  name: 'INP',
                  value: metric.value,
                  rating: metric.rating,
                  delta: metric.delta,
                  id: metric.id
                });
              });
            }

            if (onCLS) {
              onCLS((metric: any) => {
                sendToAnalytics({
                  name: 'CLS',
                  value: metric.value,
                  rating: metric.rating,
                  delta: metric.delta,
                  id: metric.id
                });
              });
            }

            if (onFCP) {
              onFCP((metric: any) => {
                sendToAnalytics({
                  name: 'FCP',
                  value: metric.value,
                  rating: metric.rating,
                  delta: metric.delta,
                  id: metric.id
                });
              });
            }

            if (onTTFB) {
              onTTFB((metric: any) => {
                sendToAnalytics({
                  name: 'TTFB',
                  value: metric.value,
                  rating: metric.rating,
                  delta: metric.delta,
                  id: metric.id
                });
              });
            }


          } else {
            throw new Error('Failed to load web-vitals library');
          }
        }

      } catch (error) {


        // Fallback to basic performance measurement if web-vitals fails

        measureBasicPerformance();
      }
    };

    // Fallback basic performance measurement
    const measureBasicPerformance = () => {
      // Basic TTFB measurement
      if (performance.getEntriesByType) {
        const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        if (navEntries.length > 0) {
          const navEntry = navEntries[0];
          const ttfb = navEntry.responseStart - navEntry.requestStart;



          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'TTFB',
              value: Math.round(ttfb),
              event_category: 'Performance',
            });
          }
        }
      }
    };

    // Initialize Web Vitals measurement with proper timing
    const initializeWebVitals = () => {
      // Wait a bit for the page to stabilize before measuring
      setTimeout(() => {
        measureWebVitals();
      }, 100);
    };

    // Initialize based on document ready state
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeWebVitals);
    } else {
      initializeWebVitals();
    }

    // Additional performance monitoring
    const measureAdditionalMetrics = () => {
      // Navigation timing
      if (performance.getEntriesByType) {
        const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        if (navEntries.length > 0) {
          const navEntry = navEntries[0];

          // DNS lookup time
          const dnsTime = navEntry.domainLookupEnd - navEntry.domainLookupStart;


          // TCP connection time
          const tcpTime = navEntry.connectEnd - navEntry.connectStart;


          // SSL negotiation time
          if (navEntry.secureConnectionStart > 0) {
            const sslTime = navEntry.connectEnd - navEntry.secureConnectionStart;

          }

          // Request time
          const requestTime = navEntry.responseStart - navEntry.requestStart;


          // Response time
          const responseTime = navEntry.responseEnd - navEntry.responseStart;


          // DOM processing time
          const domTime = navEntry.domContentLoadedEventEnd - navEntry.responseEnd;


          // Total page load time
          const totalTime = navEntry.loadEventEnd - navEntry.navigationStart;


          // Send additional metrics to analytics
          if (window.gtag) {
            window.gtag('event', 'navigation_timing', {
              dns_time: Math.round(dnsTime),
              tcp_time: Math.round(tcpTime),
              request_time: Math.round(requestTime),
              response_time: Math.round(responseTime),
              dom_time: Math.round(domTime),
              total_time: Math.round(totalTime),
              event_category: 'Performance',
            });
          }
        }
      }

      // Resource timing summary
      if (performance.getEntriesByType) {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

        const resourceSummary = {
          images: resources.filter(r => r.initiatorType === 'img' || /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(r.name)),
          scripts: resources.filter(r => r.initiatorType === 'script' || /\.js$/i.test(r.name)),
          stylesheets: resources.filter(r => r.initiatorType === 'link' && /\.css$/i.test(r.name)),
          fonts: resources.filter(r => /\.(woff|woff2|ttf|otf)$/i.test(r.name)),
        };

        Object.entries(resourceSummary).forEach(([type, items]) => {
          if (items.length > 0) {
            const avgDuration = items.reduce((sum, item) => sum + item.duration, 0) / items.length;
            const totalSize = items.reduce((sum, item) => sum + (item.transferSize || 0), 0);



            if (window.gtag) {
              window.gtag('event', 'resource_performance', {
                resource_type: type,
                count: items.length,
                avg_duration: Math.round(avgDuration),
                total_size: Math.round(totalSize / 1024),
                event_category: 'Performance',
              });
            }
          }
        });
      }
    };

    // Measure additional metrics after page load
    if (document.readyState === 'complete') {
      setTimeout(measureAdditionalMetrics, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(measureAdditionalMetrics, 1000);
      });
    }

    // Performance summary after 5 seconds
    setTimeout(() => {

    }, 5000);

  }, []);

  return null;
}
