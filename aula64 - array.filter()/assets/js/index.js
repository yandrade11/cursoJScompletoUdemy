//FILTER = filtrar o array
//MAP = modificar o array
//REDUCE = reduzir o array em um único valor

//array original permanece intacto
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//filter cria um NOVO ARRAY com valores filtrados
numeros.filter((num) => {
  num > 10 ? console.log(num) : "não tem";
});

console.log("\n------------------\n");

//-----------------------------------------------------------------//

//forma mais didática, porém, pior de se escrever
//repare que é uma função mas não coloquei o "()" no parâmetro, porque?
const numerosFiltrados = numeros.filter(callbackFilter);

//nesse caso eu não quero executar a função callbackFilter, eu quero que o FILTER execute a minha função (passagem por referência)
function callbackFilter(valor, indice, array) {
  if (valor > 10) return true;
  else return false;
}

console.log(numerosFiltrados);
console.log("\n------------------\n");

//-----------------------------------------------------------------//

//   MELHOR FORMA DE FAZER...
//quando você tem uma CONDIÇÃO que retorna TRUE OR FALSE, nunca faça isso, retorne A CONDIÇÃO.
//quando só tem uma linha não precisa de "{}", return e ;
let numFiltrados = numeros.filter((num) => num > 10);
console.log(numFiltrados);

/*
let numFiltrados = numeros.filter((num) => {
    return num > 10;
});
*/

//-----------------------------------------------------------------//
//o segundo argumento esperado no filter é o índice, caso haja necessidade de fazer alguma interação na posição X do array
let exemplo = numeros.filter((num, indice) => {
  num > 10;
  console.log(num, indice);
});

