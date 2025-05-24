// Service Worker for Aura Beauty Salon
// Version 1.0.0

const CACHE_NAME = 'aura-beauty-salon-v1';
const STATIC_CACHE_NAME = 'aura-beauty-static-v1';
const DYNAMIC_CACHE_NAME = 'aura-beauty-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/sluzby',
  '/galerie',
  '/salon',
  '/cenik',
  '/blog',
  '/kontakt',
  '/favicon.ico',
  '/favicon/favicon-32x32.png',
  '/favicon/apple-touch-icon.png',
  // Add critical CSS and JS files here when available
];

// Assets to cache on first request
const DYNAMIC_ASSETS = [
  '/images/',
  '/assets/',
  '/_next/static/',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets...');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Serving from cache:', request.url);
          return cachedResponse;
        }

        // Fetch from network
        return fetch(request)
          .then((networkResponse) => {
            // Don't cache if not successful
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // Clone the response
            const responseToCache = networkResponse.clone();

            // Determine which cache to use
            const shouldCacheDynamically = DYNAMIC_ASSETS.some(pattern => 
              request.url.includes(pattern)
            );

            if (shouldCacheDynamically) {
              caches.open(DYNAMIC_CACHE_NAME)
                .then((cache) => {
                  console.log('Caching dynamic asset:', request.url);
                  cache.put(request, responseToCache);
                });
            }

            return networkResponse;
          })
          .catch((error) => {
            console.error('Fetch failed:', error);
            
            // Return offline fallback for HTML pages
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html') || new Response(
                '<h1>Offline</h1><p>Zkontrolujte připojení k internetu.</p>',
                { headers: { 'Content-Type': 'text/html' } }
              );
            }
            
            throw error;
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions
      handleOfflineFormSubmissions()
    );
  }
});

// Handle offline form submissions
async function handleOfflineFormSubmissions() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE_NAME);
    const requests = await cache.keys();
    
    for (const request of requests) {
      if (request.url.includes('/contact') && request.method === 'POST') {
        try {
          await fetch(request);
          await cache.delete(request);
          console.log('Offline form submission sent successfully');
        } catch (error) {
          console.error('Failed to send offline form submission:', error);
        }
      }
    }
  } catch (error) {
    console.error('Error handling offline form submissions:', error);
  }
}

// Push notification handling (for future use)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/favicon/android-chrome-192x192.png',
      badge: '/favicon/favicon-32x32.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey || 1
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});

console.log('Service Worker loaded successfully');
