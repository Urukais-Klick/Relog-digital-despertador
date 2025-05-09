const themes = {
    green: {
        primary: '#00ff00',
        secondary: '#008000',
        background: '#000000',
        surface: '#1a1a1a',
        hover: '#333333',
        shadow: 'rgba(0, 255, 0, 0.3)',
        text: '#ffffff'
    },
    blue: {
        primary: '#00ffff',
        secondary: '#0080ff',
        background: '#000033',
        surface: '#001a2c',
        hover: '#002b47',
        shadow: 'rgba(0, 255, 255, 0.3)',
        text: '#ffffff'
    },
    purple: {
        primary: '#ff00ff',
        secondary: '#8000ff',
        background: '#1a001a',
        surface: '#2c002c',
        hover: '#470047',
        shadow: 'rgba(255, 0, 255, 0.3)',
        text: '#ffffff'
    }
};

function changeTheme(theme) {
    if (themes[theme]) {
        const root = document.documentElement;
        const colors = themes[theme];

        // Colores principales
        root.style.setProperty('--primary-color', colors.primary);
        root.style.setProperty('--secondary-color', colors.secondary);
        root.style.setProperty('--background-color', colors.background);
        root.style.setProperty('--surface-color', colors.surface);
        root.style.setProperty('--hover-color', colors.hover);
        root.style.setProperty('--shadow-color', colors.shadow);
        root.style.setProperty('--text-color', colors.text);

        // Actualizar estilos específicos
        document.body.style.backgroundColor = colors.background;
        document.body.style.color = colors.text;

        // Guardar tema
        localStorage.setItem('theme', theme);
    }
}

// Cargar tema guardado al iniciar
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'green';
    changeTheme(savedTheme);

    // Agregar event listeners a los botones de tema
    document.querySelectorAll('[data-theme]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            changeTheme(e.currentTarget.dataset.theme);
        });
    });
}); 