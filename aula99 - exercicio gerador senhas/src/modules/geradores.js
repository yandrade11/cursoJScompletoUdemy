//pegar tabela ASC da tecla
// console.log(String.fromCharCode(33));

//o maximo sempre tem que ser 1 a mais por causa do floor
function geraASCIIAleatorio(min, max) {
  return String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
}

const geraNum = () => geraASCIIAleatorio(48, 58);
const geraMaiuscula = () => geraASCIIAleatorio(65, 91);
const geraMinuscula = () => geraASCIIAleatorio(97, 123);
const simbolos = ",.;~^[]{}!@#$%¨&*()-*/+=";

//aqui foi criado um novo random sem fromCharCode já que a variável simbolos não foi feita por charCode (ASCII)
function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

//MELHOR ESCRITA:
// const geraSimbolo = () =>
//   simbolos[Math.floor(Math.random() * (0 - simbolos.length) + 0)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const senhaArray = [];
  qtd = Number(qtd);

  for (let index = 0; index < qtd; index++) {
    //uma forma estranha de fazer if: se maiusculas for verdadeiro, passa pra próxima verificação, que no caso, é um push (não é uma verificação)
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNum());
    simbolos && senhaArray.push(geraSimbolo());
  }

  //.join(''): transformando array em string sem separador
  //.slice(0, qtd): limitando a quantidade de caracter (para não duplicar pra cada tipo de caracter)
  return senhaArray.join("").slice(0, qtd);
}

// console.log(geraSenha(10, true));