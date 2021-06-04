// declaração de função

// Function Hoisting = posso chamar a função ANTES ou DEPOIS da declaração
falaOi();
function falaOi() {
  console.log('oi, funcao normal...');
}

//-----------------------------------------------------------------------------------------------------//

// First-class objects = posso chamar a função como um resultado (dado/valor) de uma variável, ex:
// Function expression
const souUmDado = function /*possoNomearAFuncao*/ () {
  console.log('Sou uma funcao como resultado de uma variavel.');
}
//chamada
souUmDado();

//-----------------------------------------------------------------------------------------------------//

// Para que serve fazer uma function expression? ex:
function executaFuncao(funcao) {
  console.log('vou executar sua função (abaixo) dentro de outra funcao ');
  funcao();
}

executaFuncao(souUmDado);

//-----------------------------------------------------------------------------------------------------//

// Arrow function (pode utilizar this)
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};
funcaoArrow();

//-----------------------------------------------------------------------------------------------------//

// Funcao dentro de um objeto
const obj = {
  falar: function () {
    console.log('1 - Função dentro de objeto: Estou falando...');
  }
}
obj.falar();

//ou (forma mais atualizada)

const obj2 = {
  falar() {
    console.log('2 - Função dentro de objeto: Estou falando...');
  }
}
obj2.falar();

