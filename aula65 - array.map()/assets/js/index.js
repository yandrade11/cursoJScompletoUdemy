//MAP = modificar o array
//array original permanece intacto
//MAP cria um NOVO ARRAY com valores modificados e/ou adicionados
//MAP tem o MESMO NUMERO de indices do array original ou maior

//               0   1   2  3  4
const numeros = [5, 50, 80, 1, 2];

//dobre os números:

//forma didática
const numerosDobro = numeros.map(function (valor, indice, array) {
  return `[DIDÁTICA] valor ${indice}: ${valor * 2}`;
});
console.log(numerosDobro);

console.log("\n------------------\n");

//-----------------------------------------------------------------//

//clean code
const numerosDobro2 = numeros.map(
  //aqui é preciso colocar () pois tem mais de 1 parâmetro
  (valor, indice) => `[CLEAN] valor ${indice}: ${valor * 2}`
);
console.log(numerosDobro2);
