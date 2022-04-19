//RETORNE A SOMA DO DOBRO DE TODOS OS PARES
// -> FILTRAR PARES
// -> DOBRAR OS VALORES
// -> REDUZIR (SOMAR TUDO)

//               0   1   2  3  4...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// -> FILTRAR PARES
const pares = numeros
  .filter((num) => num % 2 === 0)                 // [ 50, 80, 2, 8, 22 ]
  .map((num) => num * 2)                          // [ 100, 160, 4, 16, 44 ]
  .reduce((acumulador, num) => acumulador + num); // 324

console.log(pares);
