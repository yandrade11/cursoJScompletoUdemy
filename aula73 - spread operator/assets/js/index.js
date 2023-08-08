// atrelando o valor do endereço de memória produto, a outra variável outroProduto
const produto = { nome: "Caneca", preco: 1.8 };
const outroProduto = produto;

// como uma variável tem o mesmo endereço de memória da outra, se você mudar uma, muda a outra...
produto.nome = "Yuri Andrade";
outroProduto.preco = 2.5;

// console.log('original: ', produto);
// console.log('outra variável: ', outroProduto);

//------------------------------------ SPREAD OPERATOR -------------------------------------------

const produto2 = { nome: "Caneca", preco: 1.8 };

//... a não ser que você use spread operator para copiar valor do endereço de memoria de produto 2 para outro endereço
const outroProduto2 = {
  ...produto2, //spread operator
  material: "latão", //você também pode adicionar novas chaves ao objeto, depois de copiar
};

// aqui eu também poderia mexer na original, a não ser que eu usasse object.freeze(produto2)
outroProduto2.nome = "Balde";
outroProduto2.preco = 2.5;

console.log("original: ", produto2);
console.log("outra variável: ", outroProduto2);