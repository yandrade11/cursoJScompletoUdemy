// OBJECT.ASSIGN

const produto = { nome: "Produto", preco: 1.8 };

// com assign você cria um objeto, podendo importar outro objeto e até criar novas propriedades
const caneca = Object.assign({}, produto, { material: "porcelana" }); // {} = criação do objeto

// caso você queira pegar somente UMA propriedade do objeto, essa é a melhor forma:
const caneca2 = { preco: produto.preco };

caneca.nome = "Outro Nome";
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
console.log(caneca2);

// OBS: usar spread operator é mais limpo, intuitivo e padrão atual do mercado
