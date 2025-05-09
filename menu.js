document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuItems = document.querySelector('.menu-items');
    const submenus = document.querySelectorAll('.submenu');

    // Agregar índices para la animación escalonada
    menuItems.querySelectorAll('li').forEach((item, index) => {
        item.style.setProperty('--i', index + 1);
    });

    // Manejar clic en el icono del menú
    if (menuIcon) {
        menuIcon.addEventListener('click', function(event) {
            event.stopPropagation();
            menuItems.classList.toggle('active');
        });
    }

    // Manejar submenús
    submenus.forEach(submenu => {
        const submenuToggle = submenu.querySelector('a');
        if (submenuToggle) {
            submenuToggle.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                submenu.classList.toggle('active');
            });
        }
    });

    // Manejar temas
    const themeLinks = document.querySelectorAll('[data-theme]');
    themeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            const theme = this.dataset.theme;
            changeTheme(theme);
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        const menu = document.querySelector('.menu');
        if (menu && !menu.contains(event.target)) {
            menuItems.classList.remove('active');
            submenus.forEach(submenu => submenu.classList.remove('active'));
        }
    });
});

// Función para cambiar el tema
function changeTheme(theme) {
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
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    changeTheme(savedTheme);
} 


// Script para el menú desplegable en pantallas pequeñas
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menuItems = document.querySelector(".menu-items");

    menuIcon.addEventListener("click", function () {
        menuItems.classList.toggle("active");
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !menuItems.contains(event.target)) {
            menuItems.classList.remove("active");
        }
    });
});