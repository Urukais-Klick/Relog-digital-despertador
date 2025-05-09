document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.menu-items').classList.toggle('active');
});

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelector('.menu-items');
    
    if (!menu.contains(event.target) && menuItems.classList.contains('active')) {
        menuItems.classList.remove('active');
    }
});

function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('reloj').textContent = 
        `${horas}:${minutos}:${segundos}`;
}

async function obtenerFrase() {
    try {
        const respuesta = await fetch('https://spanish-quotes-api.onrender.com/quotes/random');
        const frase = await respuesta.json();
        
        const fraseElement = document.getElementById('frase');
        fraseElement.innerHTML = `
            <div>${frase.quote}</div>
            <div class="autor">- ${frase.author || 'Anónimo'}</div>
        `;
    } catch (error) {
        console.error('Error al obtener la frase:', error);
        document.getElementById('frase').textContent = 'La vida es bella';
    }
}

function actualizarProximasAlarmas() {
    const proximasAlarmasElement = document.getElementById('proximasAlarmas');
    const alarmas = JSON.parse(localStorage.getItem('alarmas')) || [];
    
    if (alarmas.length === 0) {
        proximasAlarmasElement.innerHTML = '<div class="sin-alarmas">No hay alarmas programadas</div>';
        return;
    }

    const ahora = new Date();
    const horaActual = ahora.getHours();
    const minutosActual = ahora.getMinutes();

    // Ordenar alarmas por proximidad
    const alarmasOrdenadas = alarmas.map(alarma => {
        let tiempoAlarma = new Date();
        tiempoAlarma.setHours(alarma.horas, alarma.minutos, 0);

        if (tiempoAlarma < ahora) {
            tiempoAlarma.setDate(tiempoAlarma.getDate() + 1);
        }

        return {
            ...alarma,
            tiempoRestante: tiempoAlarma - ahora
        };
    }).sort((a, b) => a.tiempoRestante - b.tiempoRestante);

    proximasAlarmasElement.innerHTML = alarmasOrdenadas.map(alarma => {
        const horas = Math.floor(alarma.tiempoRestante / (1000 * 60 * 60));
        const minutos = Math.floor((alarma.tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        
        return `
            <div class="alarma-proxima">
                <span class="alarma-hora">${alarma.horas.toString().padStart(2, '0')}:${alarma.minutos.toString().padStart(2, '0')}</span>
                <span class="alarma-tiempo-restante">
                    Suena en ${horas}h ${minutos}m
                </span>
            </div>
        `;
    }).join('');
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Actualizar la frase cada hora
setInterval(obtenerFrase, 3600000);

// Actualizar las alarmas cada minuto
setInterval(actualizarProximasAlarmas, 60000);

// Inicialización
actualizarReloj();
obtenerFrase();
actualizarProximasAlarmas(); 