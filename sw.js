/* ═══════════════════════════════════════════════════════════
   AutoSolution CRM — service worker
   Guarda la app en el teléfono para que abra sin señal y se
   pueda instalar como programa.
   Estrategia: red primero, caché de respaldo. Así el vendedor
   siempre recibe la última versión cuando hay internet, y
   cuando no hay, abre igual con lo último que guardó.
   Los datos NO pasan por aquí: viven en localStorage y en
   Supabase. Esto solo cachea la app en sí.
═══════════════════════════════════════════════════════════ */
const CACHE = 'asm-v1';
const SHELL = [
  './',
  './index.html',
  './desking.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
  './favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      /* uno a uno: si un archivo falla, no tumba la instalación entera */
      .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (err) { return; }

  /* Supabase, fuentes de Google y cualquier otro dominio: directo a la red,
     sin tocar. Los datos del vendedor nunca se cachean aquí. */
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok && res.type === 'basic') {
          const copia = res.clone();
          caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then(hit => {
          if (hit) return hit;
          /* navegación sin señal y sin copia exacta: damos la app */
          if (req.mode === 'navigate') return caches.match('./index.html');
          return new Response('', { status: 504, statusText: 'Sin conexión' });
        })
      )
  );
});
