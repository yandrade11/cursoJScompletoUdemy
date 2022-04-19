//REDUCE = reduzir o array em um único valor

//               0   1   2  3  4
const numeros = [5, 50, 80, 1, 2];

//SOME TODOS OS NUMEROS
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  //acumulador exige um retorno pra não retornar undefined
  console.log((acumulador += valor)); //acumulador = acumulador + valor

  return acumulador;
}, 10); //valor inicial pro acumulador
//valor opcional que por default é o primeiro do array

console.log("------------------");

//repare que aqui ele finalmente cumpre sua função:
//reduzir o array em um único elemento.
console.log("SOME TODOS OS NUMEROS DO ARRAY");
console.log(`total: ${total}`);
console.log("------------------\n");
//-----------------------------------------------------------------//

//RETORNE UM ARRAY COM OS NUMEROS PARES
const pares = numeros.reduce((acumulador, valor) => {
  //% = multiplos de, ou seja,
  //se é múltiplo de 2, é numero par
  if (valor % 2 === 0) {
    //agora que meu acumulador é um array vazio:
    //eu posso add valores no meu novo array
    acumulador.push(valor);
  }

  return acumulador;
}, []); //transforma meu acumulador num array vazio

console.log("------------------");
console.log("RETORNE UM ARRAY COM NUMs PARES");
console.log(pares);
console.log("------------------\n");
//-----------------------------------------------------------------//

//RETORNE UM ARRAY COM O DOBRO DOS VALORES
const dobro = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);

  return acumulador;
}, []);
console.log("------------------");
console.log("RETORNE UM ARRAY COM O DOBRO DOS VALORES DO ARRAY");
console.log(dobro);
console.log("------------------\n");
