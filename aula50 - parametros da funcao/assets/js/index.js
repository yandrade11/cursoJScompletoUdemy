// caso não exista parâmetro na declaração da função:
function funcao() {
  console.log("oi");

  // os argumentos passados na chamada, são guardados na variavel NATIVA 'arguments'
  console.log(arguments);

  // ou array NATIVO em caso de mais de 1 argumento
  console.log(arguments[0]);
}
funcao("Valor", 1, 2, 3);

// OBS: 'ARGUMENTS' ESTÁ OBSOLETO, UTILIZE REST OPERATOR (...args) NO LUGAR

//=======================================================================================//

// exemplo pratico
function soma() {
  let total = 0;

  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total);
}

soma(1, 2, 10);

//=======================================================================================//

// exemplo pratico 2: se eu declarar com parâmetro, eles também ficam reservados em arguments, ex:
function soma2(a, b, c) {
  let total = 0;

  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total, a, b, c);
}

soma2(10, 20, 20);

//=======================================================================================//
// caso você passe um parâmetro sem argumento ele é declarado como undefined, ex:
function soma3(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
soma3(1, 2, 3);

//=======================================================================================//
// declarando default pra B (caso b não tenha argumento, o resultado de 2 + undefined = NaN)

// forma antiga
function soma4(a, b) {
  b = b || 3;
  console.log("Soma 4:", a + b);
}
soma4(2);

// forma nova (se não tiver argumento = 1, se tiver argumento substitui o 1)
function soma5(a, b = 1) {
  console.log(a + b);
}
soma5("Soma 5: ", 2, 10);

// pulando parametros na soma: somente com undefined, nesse caso não posso usar a variável declarada no parâmetro da função
function soma6(a, b = 2, c = 4) {
  console.log(a + b + c);
}
soma6(2, undefined, 20);

//=======================================================================================//

// atribuição via desestruturação
function desestruturacao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
desestruturacao({ nome: "Yuri", sobrenome: "Andrade", idade: 30 });

//ou declarando o objeto sem desestruturar (também pode ser feito com array, caso o parâmetro da função seja um array)
let obj = { nome: "Yuri", sobrenome: "Andrade", idade: 30 };
desestruturacao(obj);

//=======================================================================================//

// Rest Operator (Operador de resto) = seria o mesmo que: conta("+", 0, [20, 30, 40, 50]);
// transforma o resto dos parâmetros num array (também funciona com 'arguments' mas não com arrow function)
// obs: o rest operator só pode ser utilizado no ultimo parâmetro da função (já que é o resto)
const conta = function (operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }

  console.log(acumulador);
};
conta("+", 0, 20, 30, 40, 50);

//=======================================================================================//

// rest operator substituiu o 'arguments' para usar em arrow function assim:
const count = (...args) => {
  console.log(args);
};
count("+", 0, 2, 3, 1);
