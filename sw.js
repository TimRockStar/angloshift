// Service worker d'AngloShift : permet l'installation et un démarrage rapide.
// La page est toujours demandée au réseau d'abord, pour que les mises à jour arrivent tout de suite.
const VERSION = "angloshift-v1";
const FICHIERS = ["./", "logo-96.png", "logo-192.png", "logo-512.png", "manifest.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((noms) => Promise.all(noms.filter((n) => n !== VERSION).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);
  // On ne touche ni aux demandes vers le relais (IA, voix, micro) ni aux autres sites.
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then((rep) => {
        if (rep && rep.ok) { const copie = rep.clone(); caches.open(VERSION).then((c) => c.put(req, copie)); }
        return rep;
      })
      .catch(() => caches.match(req).then((rep) => rep || caches.match("./")))
  );
});
