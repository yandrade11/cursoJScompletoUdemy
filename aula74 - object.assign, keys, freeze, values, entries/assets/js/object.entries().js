// OBJECT ENTRIES

const produto = { nome: "Caneca", preco: 1.8 };

//Object.entries() é usado para pegar chaves E valores das propriedades do objeto
console.log(Object.entries(produto));

//OBS: muita atenção o entries retorna um array onde cada posição desse array, é um outro array com chave/valor, ou seja, um array de arrays

/*

resultado: 
produto = [
    0: [nome, 'Caneca'],
    1: [preco, 1.8]
]

*/

console.log('----------');

//--------------------------------------------------------

// para você pegar cada array de chave/valor separado ou até mesmo um embaixo do outro:
for (let entry of Object.entries(produto)) {
  console.log(entry);
}
