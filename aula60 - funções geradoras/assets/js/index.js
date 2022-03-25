//funções geradores servem para: pausar o código em determinado local
//exemplo: na primeira chamada entrega valor 1, na segunda chamada valor 2 e assim por diante
//utiliza LAZY EVALUATION (avaliação preguiçosa)
//bom para performance dependendo da utilização

//OBS: utilizado muito em streaming de dados, abrindo arquivo muito grande linha por linha, buscando dados de uma base de dados, ou seja, coisas demoradas que não há necessidade de carregar tudo na memória de uma vez

function* geradora1() {
  //código qualquer
  yield "valor 1"; //yield é parecido com return, pois finaliza a execução naquela vez em que foi chamado

  //código qualquer
  yield "valor 2"; //yield na próxima vez que for chamado imprime o segundo valor como pode ser visto lá embaixo

  //código qualquer
  yield "valor 3";
}

const g1 = geradora1();
console.log(g1.next()); //tem que utilizar o método next() para ver o valor do campo yield
console.log(g1.next().value); //quando aparece done: false significa que ainda tem mais coisa dentro da função gerador a ser imprimido
console.log(g1.next().value);
console.log(g1.next().done); //done aqui está true porque acabaram os valores da função geradora
console.log("----------");

//------------------------------------------------------------------------------------------------------------------------------------------//

function* geradora2() {
  //código qualquer
  yield "valor 1";

  //código qualquer
  yield "valor 2";

  //código qualquer
  yield "valor 3";
}

const g2 = geradora2();
for (let yield of g2) {
  //o for já sabe quantos valores tem na função construtora
  console.log(yield);
}
console.log("----------");

//------------------------------------------------------------------------------------------------------------------------------------------//

//nesse caso é um loop infinito, portanto vai gerar um novo numero a cada vez que eu chamar a função geradora
function* contador() {
  let i = 1;

  while (true) {
    yield i;
    i++;
  }
}

const cont = contador();
console.log(cont.next().value);
console.log(cont.next().value);
console.log(cont.next().value);
console.log("----------");

//------------------------------------------------------------------------------------------------------------------------------------------//

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); //chamando a geradora 3 dentro da geradora 4, deste modo quando eu chamar a geradora 4 eu não preciso mais chamar a geradora 3

    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}
console.log("----------");

//------------------------------------------------------------------------------------------------------------------------------------------//

//exemplo de sistema que executa cada etapa (função) em momentos diferentes
function* geradora5() {
    yield function() {
        console.log('Vim do Y1');
    };

    //return para continuação da mesma forma de sempre, não imprimindo o Y2 por exemplo
    return function() {
        console.log('Vim do return');
    };

    yield function() {
        console.log('Vim do Y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();