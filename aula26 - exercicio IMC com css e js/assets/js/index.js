const form = document.querySelector('.formulario');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const caixaIMC = document.querySelector('#imc');
const campoInvisivel = document.querySelector('.campoInvisivelIMC');

let resultado = "";

function btn(eventoClick) {
    eventoClick.preventDefault();
    let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value));

    if (imc < 18.5) {
        resultado = `abaixo do peso.`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = `com peso normal.`;
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = `com sobrepeso.`;
    } else if (imc >= 30 && imc <= 34.9) {
        resultado = `com obesidade grau 1.`;
    } else if (imc >= 35 && imc <= 39.9) {
        resultado = `com obesidade grau 2.`;
    } else if (imc > 40) {
        resultado = `com obesidade grau 3.`;
    }

    //verificar pq não entra no else
    if (peso.value !== "" && altura.value !== "") {
        console.log(imc.toFixed(2));

        campoInvisivel.style.display = 'block';
        caixaIMC.value = `${imc.toFixed(2)} e você se encontra: ${resultado}`;
    } else {
        campoInvisivel.style.display = 'block';
        caixaIMC.value = `Verifique se esqueceu de digitar seu peso ou altura.`
    }
}

form.addEventListener('submit', btn);