'use client';

import { useState, useEffect } from 'react';

interface PerformanceData {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  timestamp: number;
}

export default function PerformanceDashboard() {
  const [metrics, setMetrics] = useState<PerformanceData[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentMetrics, setCurrentMetrics] = useState<PerformanceData | null>(null);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    // Listen for performance metrics
    const handlePerformanceMetric = (event: CustomEvent) => {
      const metric = event.detail;
      setCurrentMetrics(prev => ({
        ...prev,
        [metric.name.toLowerCase()]: metric.value,
        timestamp: Date.now()
      }));
    };

    // Add event listeners for custom performance events
    window.addEventListener('performance-metric' as any, handlePerformanceMetric);

    // Keyboard shortcut to toggle dashboard (Ctrl+Shift+P)
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('performance-metric' as any, handlePerformanceMetric);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV !== 'development') return null;

  const getMetricColor = (metric: string, value: number) => {
    const thresholds = {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      fcp: { good: 1800, poor: 3000 },
      ttfb: { good: 600, poor: 1500 }
    };

    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return 'text-gray-600';

    if (value <= threshold.good) return 'text-green-600';
    if (value <= threshold.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatValue = (metric: string, value: number) => {
    if (metric === 'cls') {
      return value.toFixed(4);
    }
    return `${value.toFixed(0)}ms`;
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          title="Show Performance Dashboard (Ctrl+Shift+P)"
        >
          📊 Perf
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">Performance Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 text-xl leading-none"
          title="Close Dashboard"
        >
          ×
        </button>
      </div>

      {currentMetrics ? (
        <div className="space-y-2">
          <div className="text-xs text-gray-500 mb-2">
            Last updated: {new Date(currentMetrics.timestamp).toLocaleTimeString()}
          </div>
          
          {/* Core Web Vitals */}
          <div className="border-b border-gray-100 pb-2 mb-2">
            <h4 className="text-sm font-medium text-gray-700 mb-1">Core Web Vitals</h4>
            
            {currentMetrics.lcp && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">LCP:</span>
                <span className={`text-sm font-medium ${getMetricColor('lcp', currentMetrics.lcp)}`}>
                  {formatValue('lcp', currentMetrics.lcp)}
                </span>
              </div>
            )}
            
            {currentMetrics.fid && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">FID:</span>
                <span className={`text-sm font-medium ${getMetricColor('fid', currentMetrics.fid)}`}>
                  {formatValue('fid', currentMetrics.fid)}
                </span>
              </div>
            )}
            
            {currentMetrics.cls && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">CLS:</span>
                <span className={`text-sm font-medium ${getMetricColor('cls', currentMetrics.cls)}`}>
                  {formatValue('cls', currentMetrics.cls)}
                </span>
              </div>
            )}
          </div>

          {/* Other Metrics */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">Other Metrics</h4>
            
            {currentMetrics.fcp && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">FCP:</span>
                <span className={`text-sm font-medium ${getMetricColor('fcp', currentMetrics.fcp)}`}>
                  {formatValue('fcp', currentMetrics.fcp)}
                </span>
              </div>
            )}
            
            {currentMetrics.ttfb && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">TTFB:</span>
                <span className={`text-sm font-medium ${getMetricColor('ttfb', currentMetrics.ttfb)}`}>
                  {formatValue('ttfb', currentMetrics.ttfb)}
                </span>
              </div>
            )}
          </div>

          {/* Performance Score */}
          <div className="border-t border-gray-100 pt-2 mt-2">
            <div className="text-xs text-gray-500">
              Performance Score: {calculatePerformanceScore(currentMetrics)}/100
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  calculatePerformanceScore(currentMetrics) >= 90
                    ? 'bg-green-500'
                    : calculatePerformanceScore(currentMetrics) >= 70
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${calculatePerformanceScore(currentMetrics)}%` }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-sm text-gray-500 text-center py-4">
          Waiting for performance metrics...
          <br />
          <span className="text-xs">Interact with the page to measure FID</span>
        </div>
      )}

      <div className="mt-3 pt-2 border-t border-gray-100">
        <div className="text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    </div>
  );
}

function calculatePerformanceScore(metrics: PerformanceData): number {
  let score = 100;
  let count = 0;

  // LCP scoring
  if (metrics.lcp) {
    count++;
    if (metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp > 2500) score -= 15;
  }

  // FID scoring
  if (metrics.fid) {
    count++;
    if (metrics.fid > 300) score -= 25;
    else if (metrics.fid > 100) score -= 10;
  }

  // CLS scoring
  if (metrics.cls) {
    count++;
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 10;
  }

  // FCP scoring
  if (metrics.fcp) {
    count++;
    if (metrics.fcp > 3000) score -= 15;
    else if (metrics.fcp > 1800) score -= 7;
  }

  // TTFB scoring
  if (metrics.ttfb) {
    count++;
    if (metrics.ttfb > 1500) score -= 20;
    else if (metrics.ttfb > 600) score -= 10;
  }

  return Math.max(0, Math.min(100, score));
}
