// Faça o exercício dos PARÁGRAFOS aqui

function retrairEexpandi(evt) {
let alvo = evt.currentTarget;
p = alvo.parentNode;
p.classList.toggle('expandido');
if(alvo.innerHTML == '+') {
    alvo.innerHTML = '-';
    return;
}
if(alvo.innerHTML == '-') {
    alvo.innerHTML = '+';
    return;
}
}


let todosBotoes = document.querySelectorAll('.botao-expandir-retrair');
todosBotoes.addEventListener('click', retrairEexpandi);