// RETURN serve para:
// retornar um valor na função
// parar execução da função

function criaPessoa(nome, sobrenome) {
  return {
    nome: nome,

    //como CHAVE sobrenome tem o mesmo nome que VALOR sobrenome, o js entende como a mesma coisa
    sobrenome,
  };
}

const p1 = criaPessoa("Yuri", "Andrade");
console.log(p1);

//=======================================================================================//
// CLOSURE
// quando eu retorno a FUNÇÃO sem chamar ela, eu retorno a função inteira
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo);
console.log(olaMundo("Mundo!"));

// ou

const fala = falaFrase("Olá");
const resto = fala("Mundinho!");
console.log(resto);

//=======================================================================================//
// exemplo pratico de CLOSURE com função que duplica o valor:
function duplica(n) {
  return n * 2;
}

function triplica(n) {
  return n * 3;
}

console.log(duplica(3));
console.log(triplica(3));

// ou

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };

  return multiplicacao();
}

const duplica2 = criaMultiplicador(2);
const triplica2 = criaMultiplicador(3);
console.log(duplica2(5));
console.log(triplica2(5));
