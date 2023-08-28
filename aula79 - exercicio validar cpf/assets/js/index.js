// COMO VALIDAR CPF

// 705.484.450-52 - 070.987.720-03

/*

valor inicial do acumulador =       0
valor =                             7x  0x  5x  4x  8x  4x  4x  5x  0x
index =                             10  9   8   7   6   5   4   3   2
acumulador = valor * index =        70  0   40  28  48  20  16  15  0       = 237

fórmula de validação de cpf, sendo 11 = número de dígitos
11 - (237 % 11) = 5 (primeiro dígito)   //se o resultado > 9 = 0

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x (primeiro dígito encontrado em cima)
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10  = 284

11 - (284 % 11) = 2 (segundo dígito)    //se o resultado > 9 = 0


se 705.484.450-52 === 705.484.450-52 
    válido

*/

//reduce, expressão regular

let cpf = "705.484.450-52";

//regex para tirar o que não for número
let cpfLimpo = cpf.replace(/\D+/g, "");
let cpfArray = Array.from(cpfLimpo);

// FORMA PEDIDA
let digitos = cpfArray.splice(9, 2);
let somaDigitoUm = somaCPF(cpfArray, 10);

// pega primeiro dígito e adiciona no cpfArray
let primeiroDigito = getDigito(somaDigitoUm);
cpfArray.push(primeiroDigito.toString());

let somaDigitoDois = somaCPF(cpfArray, 11);

let segundoDigito = getDigito(somaDigitoDois);
cpfArray.push(segundoDigito.toString());

validaCPF(cpfLimpo, cpfArray);

function somaCPF(cpfArray, indexInicial) {
  return cpfArray.reduce((acumulador, valor, index) => {
    return (acumulador = acumulador + Number(valor) * (indexInicial - index));
  }, 0);
}

function getDigito(soma) {
  return 11 - (soma % 11);
}

function validaCPF(cpfLimpo, cpfArray) {
  let cpfString = cpfArray.reduce((acc, valor) => {
    return (acc = acc + valor);
  }, "");

  cpfLimpo === cpfString
    ? console.log("CPF Válido")
    : console.log("CPF Inválido");
}

// OUTRA FORMA
// let somaAcumulador = 0;
// for (let index = 0; index < 9; index++) {
//   somaAcumulador = somaAcumulador + Number(cpfArray[index]) * (10 - index);
// }
