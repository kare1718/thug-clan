/* THUG 클랜 옛 주소 — 새 주소로 옮김(2026-11-25). 이 기기에 남은 옛 화면 저장(thug-…)을 지우고 스스로 물러난다.
   fetch를 가로채지 않으므로 옛 주소의 쪽은 늘 서버의 '옮겨 가는 쪽'으로 열린다. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    try { for (const k of await caches.keys()) if (k.startsWith('thug-')) await caches.delete(k); } catch { /* 지울 것 없음 */ }
    try { await self.registration.unregister(); } catch { /* 이미 물러남 */ }
  })());
});
