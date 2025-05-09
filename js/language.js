const translations = {
    es: {
        home: "Inicio",
        stopwatch: "Cronómetro",
        alarm: "Alarma",
        themes: "Temas",
        settings: "Configuración",
        sounds: "Sonidos",
        notifications: "Notificaciones",
        language: "Idioma",
        about: "Acerca de",
        green: "Verde",
        blue: "Azul",
        purple: "Púrpura",
        selectSound: "Seleccionar Sonido podras ver videos de Urukais Klick",
        noAlarms: "No hay alarmas programadas",
        sweetDreams: "Felices sueños",
        scheduledAlarms: "Alarmas Programadas",
        start: "Iniciar",
        pause: "Pausar",
        reset: "Reiniciar",
        lap: "Vuelta",
        setAlarm: "Establecer Alarma 🐸",
        stopAlarm: "Detener Alarma",
        preview: "Ver Video",
        select: "Seleccionar",
        enableNotifications: "Activar notificaciones",
        notificationTypes: "Tipos de Notificaciones",
        alarmNotifications: "Notificaciones de alarma",
        timerNotifications: "Notificaciones de temporizador",
        reminderNotifications: "Recordatorios",
        previewNotification: "Vista previa de notificación",
        testNotification: "Probar notificación"
    },
    en: {
        home: "Home",
        stopwatch: "Stopwatch",
        alarm: "Alarm",
        themes: "Themes",
        settings: "Settings",
        sounds: "Sounds",
        notifications: "Notifications",
        language: "Language",
        about: "About",
        green: "Green",
        blue: "Blue",
        purple: "Purple",
        selectSound: "Select Sound",
        noAlarms: "No alarms scheduled",
        sweetDreams: "Sweet dreams",
        scheduledAlarms: "Scheduled Alarms",
        start: "Start",
        pause: "Pause",
        reset: "Reset",
        lap: "Lap",
        setAlarm: "Set Alarm",
        stopAlarm: "Stop Alarm",
        preview: "Preview",
        select: "Select",
        enableNotifications: "Enable notifications",
        notificationTypes: "Notification Types",
        alarmNotifications: "Alarm notifications",
        timerNotifications: "Timer notifications",
        reminderNotifications: "Reminders",
        previewNotification: "Notification preview",
        testNotification: "Test notification"
    },
    fr: {
        home: "Accueil",
        stopwatch: "Chronomètre",
        alarm: "Alarme",
        themes: "Thèmes",
        settings: "Paramètres",
        sounds: "Sons",
        notifications: "Notifications",
        language: "Langue",
        about: "À propos",
        green: "Vert",
        blue: "Bleu",
        purple: "Violet",
        selectSound: "Sélectionner le son",
        noAlarms: "Aucune alarme programmée",
        sweetDreams: "Beaux rêves",
        scheduledAlarms: "Alarmes programmées",
        start: "Démarrer",
        pause: "Pause",
        reset: "Réinitialiser",
        lap: "Tour",
        setAlarm: "Régler l'alarme",
        stopAlarm: "Arrêter l'alarme",
        preview: "Aperçu",
        select: "Sélectionner",
        enableNotifications: "Activer les notifications",
        notificationTypes: "Types de notifications",
        alarmNotifications: "Notifications d'alarme",
        timerNotifications: "Notifications de minuterie",
        reminderNotifications: "Rappels",
        previewNotification: "Aperçu de notification",
        testNotification: "Tester la notification"
    }
};

function setLanguage(lang) {
    if (!translations[lang]) return;
    
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Cargar idioma guardado o usar español por defecto
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    setLanguage(savedLanguage);
}); 