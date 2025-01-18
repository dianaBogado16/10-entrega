import './style.css';

var boton1 = document.getElementById('boton1'); 
var boton2 = document.getElementById('boton2'); 
var boton3 = document.getElementById('boton3');
var contenedorGatitos = document.getElementById('contenedor'); 

var gatosConsecutivos = 0;
var ultimoGato = '';
var gatosActuales = [];

function añadirGato(emoji) {
    if (emoji === ultimoGato) {
        gatosConsecutivos++;
    } else { 
        gatosConsecutivos = 1;
        ultimoGato = emoji;
    }
    gatosActuales.push(emoji);

    
    if (gatosConsecutivos >= 5) {

        var caja = document.createElement('div');
        caja.textContent = '⬛'; 
        contenedorGatitos.insertBefore(caja, contenedorGatitos.firstChild);
        var elementosGatos = contenedorGatitos.querySelectorAll('.gato');
        elementosGatos.forEach(gato => contenedorGatitos.removeChild(gato));

        gatosConsecutivos = 1;
        gatosActuales = [];
        ultimoGato = emoji;

    } else { 
        var caraGato = document.createElement('div');
        caraGato.textContent = emoji;
        caraGato.classList.add('gato');
        contenedorGatitos.appendChild(caraGato);
    }
}

boton1.addEventListener('click', () => añadirGato('😺')); 
boton2.addEventListener('click', () => añadirGato('😸')); 
boton3.addEventListener('click', () => añadirGato('😹'));
