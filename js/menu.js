document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuItems = document.querySelector('.menu-items');
    const menuOverlay = document.querySelector('.menu-overlay');
    const submenus = document.querySelectorAll('.submenu');
    const body = document.body;

    // Crear overlay para el menú móvil
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    body.appendChild(overlay);

    // Agregar índices para la animación escalonada
    menuItems.querySelectorAll('li').forEach((item, index) => {
        item.style.setProperty('--i', index + 1);
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Función para abrir/cerrar el menú
    function toggleMenu() {
        menuItems.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = menuItems.classList.contains('active') ? 'hidden' : '';
    }

    // Evento para el icono del menú
    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Evento para el overlay
    menuOverlay.addEventListener('click', toggleMenu);

    // Manejar submenús
    submenus.forEach(submenu => {
        const link = submenu.querySelector('a');
        const submenuItems = submenu.querySelector('.submenu-items');
        const chevron = link.querySelector('.fa-chevron-down');

        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Cerrar otros submenús del mismo nivel
            submenus.forEach(otherSubmenu => {
                if (otherSubmenu !== submenu) {
                    otherSubmenu.classList.remove('active');
                    const otherChevron = otherSubmenu.querySelector('.fa-chevron-down');
                    if (otherChevron) {
                        otherChevron.style.transform = 'rotate(0deg)';
                    }
                }
            });

            // Toggle del submenú actual
            submenu.classList.toggle('active');
            if (chevron) {
                chevron.style.transform = submenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!menuItems.contains(e.target) && !menuIcon.contains(e.target)) {
            menuItems.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Cerrar todos los submenús
            submenus.forEach(submenu => {
                submenu.classList.remove('active');
                const chevron = submenu.querySelector('.fa-chevron-down');
                if (chevron) {
                    chevron.style.transform = 'rotate(0deg)';
                }
            });
        }
    });

    // Marcar la página actual como activa
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('.menu-items a');
    
    menuLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.parentElement.classList.add('active');
        }
    });

    // Manejar la navegación en dispositivos móviles
    menuItems.querySelectorAll('a:not([href="#"])').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menuItems.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Prevenir el cierre del menú al hacer clic dentro
    menuItems.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Cerrar el menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuItems.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Cerrar todos los submenús
            submenus.forEach(submenu => {
                submenu.classList.remove('active');
                const chevron = submenu.querySelector('.fa-chevron-down');
                if (chevron) {
                    chevron.style.transform = 'rotate(0deg)';
                }
            });
        }
    });
}); 