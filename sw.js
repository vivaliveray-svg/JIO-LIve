self.addEventListener('push', function(e) {
  const data = e.data ? e.data.json() : {};
  self.registration.showNotification(data.title || 'JIO Live', {
    body: data.body || 'New notification!',
    icon: 'https://via.placeholder.com/192x192/8b5cf6/ffffff?text=JL',
    badge: 'https://via.placeholder.com/72x72/8b5cf6/ffffff?text=JL',
    vibrate: [200, 100, 200],
    data: data
  });
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});