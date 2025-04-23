// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
function calculo() {
let grav = gravidadeEl.value;
let massa1 = massa1El.value;
let massa2 = massa2El.value;
let distancia = distanciaEl.value;

let resultado = (grav * massa1 * massa2)/ distancia;
resultadoEl.value = resultado;

}

let botaoEl = document.querySelector('#calcular');
botaoEl.addEventListener('click', calculo);
let gravidadeEl = document.querySelector('#constante');
let massa1El = document.querySelector('#massa1');
let massa2El = document.querySelector('#massa2');
let distanciaEl = document.querySelector('#distancia');
let resultadoEl = document.querySelector('#resultado');