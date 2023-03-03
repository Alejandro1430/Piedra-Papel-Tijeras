// let dataPc = Math.floor(Math.random() * 3);

// if (dataPc === 0) dataPc = "Piedra";
// if (dataPc === 1) dataPc = "Papel";
// if (dataPc === 2) dataPc = "Tijeras";


// const juego = (jugador, PC = dataPc) => {
//   if (
//     (jugador == "Piedra" && PC == "Piedra")|| 
//     (jugador == "Papel" && PC == "Papel")|| 
//     (jugador == "Tijeras" && PC == "Tijeras")
//   ) {
//     console.log(`Jugador: ${jugador} - PC: ${PC}`, "!!!ES UN EMPATE!!!");
//   } else if (
//     (jugador == "Piedra" && PC == "Tijeras")|| 
//     (jugador == "Papel" && PC == "Piedra")|| 
//     (jugador == "Tijeras" && PC == "Papel")
//   ) {
//     console.log(`Jugador: ${jugador} - PC: ${PC}`, "!!!GANASTE!!!");
//   } else {
//     console.log(`Jugador: ${jugador} - PC: ${PC}`, "!!!PERDISTE!!!");
//   }
// }

const PIEDRA = 'Piedra';
const PAPEL = 'Papel';
const TIJERAS = 'Tijeras';

const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;


const mostrarResultado = document.getElementById('Ganaste');

const divJugador = document.getElementById('jugador');
const divMaquina = document.getElementById("pc");

const PiedraBtn = document.getElementById('btn1');
const PapelBtn = document.getElementById('btn2');    
const TijerasBtn = document.getElementById('btn3');

const jugadorJugadas = document.createElement('img');
jugadorJugadas.src= 'piedra.jpg';
divJugador.appendChild(jugadorJugadas);

const maquinaJugadas = document.createElement('img');
maquinaJugadas.src= 'piedra.jpg';
divMaquina.appendChild(maquinaJugadas);



PiedraBtn.addEventListener('click', ()=>{
    juego(PIEDRA);
});

PapelBtn.addEventListener('click', ()=>{
    juego(PAPEL);
});

TijerasBtn.addEventListener('click', ()=>{
    juego(TIJERAS);
});



function juego(jugador){

    jugadorJugadas.src = ''+jugador+'.jpg';

    mostrarResultado.innerHTML = 'ELIGIENDO JUGADA';

    const interval = setInterval(() => {
        let maquina = Math.round(Math.random()*2);
        if (maquina === 0) maquina = 'Piedra';
        if (maquina === 1) maquina = 'Papel';
        if (maquina === 2) maquina = 'Tijeras';
        maquinaJugadas.src = ''+maquina+'.jpg';
    }, 100);
    
    setTimeout(function(){

        clearInterval(interval);
        let maquina = Math.round(Math.random()*2);
    
        if (maquina === 0) maquina = 'Piedra';
        if (maquina === 1) maquina = 'Papel';
        if (maquina === 2) maquina = 'Tijeras';

        const resultadoFinal = calcularResultado(maquina, jugador);

        maquinaJugadas.src = ''+maquina+'.jpg';

        switch(resultadoFinal){
            case EMPATE:
            mostrarResultado.innerHTML = 'ES UN EMPATE';
            break;
            case GANASTE:
            mostrarResultado.innerHTML = 'HAS PERDIDO';
            break;
            case PERDISTE:
            mostrarResultado.innerHTML = 'HAS GANADO';
            break; 
        };
   
    }, 3000);
    
    
};

function calcularResultado(maquina, jugador){
    if (maquina === jugador){
        return EMPATE;
    } else if (maquina === 'Piedra' && jugador === 'Papel' || maquina === 'Papel' && jugador === 'Tijeras' || maquina === 'Tijeras' && jugador === 'Piedra'){
        return PERDISTE;
    } else {
        return GANASTE;
    };
};