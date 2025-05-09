self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: '../assets/placeholder.svg',
        badge: '../assets/priority-medium.svg',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Ver ahora',
                icon: '../assets/priority-high.svg'
            },
            {
                action: 'close',
                title: 'Cerrar',
                icon: '../assets/priority-low.svg'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Urukais Klick', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();

    if (event.action === 'explore') {
        clients.openWindow("/");
    }
}); 