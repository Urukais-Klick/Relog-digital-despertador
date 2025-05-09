require('dotenv').config();
const express = require('express');
const webpush = require('web-push');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Configurar las claves VAPID
const vapidKeys = {
    publicKey: process.env.VAPID_PUBLIC_KEY,
    privateKey: process.env.VAPID_PRIVATE_KEY
};

webpush.setVapidDetails(
    'mailto:tu@email.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

// Almacenar suscripciones (en producción usar una base de datos)
const subscriptions = new Set();

// Almacenar notificaciones programadas
let scheduledNotifications = [];

// Cargar notificaciones guardadas al iniciar
async function loadScheduledNotifications() {
    try {
        const data = await fs.readFile('notifications.json', 'utf8');
        scheduledNotifications = JSON.parse(data);
    } catch (error) {
        console.log('No hay notificaciones guardadas');
    }
}

// Guardar notificaciones en archivo
async function saveScheduledNotifications() {
    await fs.writeFile(
        'notifications.json',
        JSON.stringify(scheduledNotifications),
        'utf8'
    );
}

// Endpoint para guardar suscripciones
app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    subscriptions.add(subscription);
    res.status(201).json({});
});

// Endpoint para programar notificaciones
app.post('/schedule-notification', async (req, res) => {
    const { title, body, priority, timestamp, sound, repeat } = req.body;
    
    const notification = {
        id: Date.now().toString(),
        title,
        body,
        priority,
        timestamp,
        sound,
        repeat,
        sent: false
    };

    scheduledNotifications.push(notification);
    await saveScheduledNotifications();
    
    res.status(201).json(notification);
});

// Endpoint para obtener notificaciones programadas
app.get('/scheduled-notifications', (req, res) => {
    res.json(scheduledNotifications);
});

// Endpoint para eliminar una notificación programada
app.delete('/scheduled-notifications/:id', async (req, res) => {
    const { id } = req.params;
    scheduledNotifications = scheduledNotifications.filter(n => n.id !== id);
    await saveScheduledNotifications();
    res.status(204).send();
});

// Verificar y enviar notificaciones programadas
setInterval(async () => {
    const now = Date.now();
    const notificationsToSend = scheduledNotifications.filter(
        n => !n.sent && new Date(n.timestamp).getTime() <= now
    );

    for (const notification of notificationsToSend) {
        try {
            await sendNotificationToAll({
                title: notification.title,
                body: notification.body,
                priority: notification.priority,
                sound: notification.sound
            });

            if (notification.repeat) {
                // Programar próxima notificación según el patrón de repetición
                notification.timestamp = calculateNextOccurrence(
                    notification.timestamp,
                    notification.repeat
                );
                notification.sent = false;
            } else {
                notification.sent = true;
            }
        } catch (error) {
            console.error('Error al enviar notificación:', error);
        }
    }

    await saveScheduledNotifications();
}, 1000);

function calculateNextOccurrence(timestamp, repeat) {
    const date = new Date(timestamp);
    switch (repeat) {
        case 'daily':
            date.setDate(date.getDate() + 1);
            break;
        case 'weekly':
            date.setDate(date.getDate() + 7);
            break;
        case 'monthly':
            date.setMonth(date.getMonth() + 1);
            break;
    }
    return date.toISOString();
}

async function sendNotificationToAll(notificationData) {
    const failures = [];
    
    for (const subscription of subscriptions) {
        try {
            await webpush.sendNotification(
                subscription,
                JSON.stringify(notificationData)
            );
        } catch (error) {
            failures.push({ subscription, error: error.message });
            subscriptions.delete(subscription);
        }
    }

    return failures;
}

// Inicializar servidor
loadScheduledNotifications().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en puerto ${PORT}`);
    });
}); 