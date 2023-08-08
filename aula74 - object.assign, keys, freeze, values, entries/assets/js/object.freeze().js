//OBJECT FREEZE

const produto = { nome: "Caneca", preco: 1.8 };
const outroProduto = { ...produto };

// quando você usa object.freeze no objeto, você não permite que ele seja alterado ou deletado
Object.freeze(produto);

produto.nome = "Outro Nome";
produto.material = "latão";
delete produto;

outroProduto.nome = "Outro Nome";
outroProduto.material = "porcelana";

console.log(produto);
console.log(outroProduto);
