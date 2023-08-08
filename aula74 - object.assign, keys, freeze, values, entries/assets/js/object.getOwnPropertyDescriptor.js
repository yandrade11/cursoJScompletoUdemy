// OBJECT GET OWN PROPERTY DESCRIPTOR

const produto = { nome: "Caneca", preco: 1.8 };

//aqui você busca a definição de cada propriedade do objeto
//definidas pelo defineProperty, defineProperties ou resultado nativo
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

/*

resultado: {
  value: 'Caneca',
  writable: true,       //pode ser alterado
  enumerable: true,     //vai ser exibido no forIn ou object.keys()
  configurable: true    //posso deletar a propriedade
}

*/

//OBS: isso não é muito usado, talvez num caso onde você não sabe de onde ta vindo a definição da propriedade e/ou não consegue alterar alguma propriedade
