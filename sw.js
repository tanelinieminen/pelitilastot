/* Pelitilastot: verkko ensin, välimuisti varalla (toimii myös huonolla verkolla hallissa). Firestore-liikennettä ei kosketa. */
const V = 'pt-v1';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(V).then(c => c.addAll(['./', 'index.html', 'firebase-config.js', 'joukkueet.js', 'logo.png', 'manifest.webmanifest']).catch(() => {})));
});
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url), same = u.origin === location.origin;
  if (!same && u.hostname !== 'www.gstatic.com') return;
  e.respondWith(
    (same ? fetch(r.url, { cache: 'no-cache' }) : fetch(r))
      .then(res => { if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; })
      .catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || (r.mode === 'navigate' ? caches.match('index.html') : Response.error())))
  );
});
