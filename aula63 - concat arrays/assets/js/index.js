//OBS: tudo que funciona aqui também funciona como objeto.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//isso junta os valores, mas não concatena
const arr3 = arr1 + arr2; //resultado: [1, 2, 34, 5, 6]
console.log(typeof arr3, arr3); //resulado: string

//para concatenar...
const arr4 = arr1.concat(arr2);
console.log(typeof arr4, arr4);

//também da para continuar editando o array final... (resultado saiu quebrado mas ta tudo na mesma linha)
const arr5 = arr1.concat(arr2, [7, 8, 9], "Yuri"); //resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Yuri']
console.log(arr5);

console.log("\n-------------\n");
//----------------------------------------------------------------------------------------------------------//

//OUTRA FORMA DE CONCATENAR UTILIZANDO ... (SPREAD OPERATOR)
const arr6 = [...arr1, ...arr2];
console.log(arr6);

//também da para continuar editando o array final...
const arr7 = [...arr1, "Yuri", ...arr2, "Enzo"];
console.log(arr7);

//também da pra criar novos valores, como se tivesse declarando um array literal
const arr8 = [...arr1, [10, 11, 12], ...arr2]; //se você não colocar o spread (...) no array "declarado", a saída é literal:
console.log(arr8);      //resultado: [1, 2, 3, [ 10, 11, 12 ], 4, 5, 6]

//para corrigir isso...
const arr9 = [...arr1, ...[10, 11, 12], ...arr2];
console.log(arr9);      //resultado: [1, 2, 3, 10, 11, 12, 4, 5, 6]
