// COMO FAZER GETTER AND SETTER COM FACTORY FUNCTION
function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace(", isso é pra apagar no setter", "");
      nome = valor;
    },
  };
}

//não preciso da new (instancia) pois é uma factory function
const prod = criaProduto("Camiseta");
console.log("prod: ", prod);
prod.nome =
  "Interceptando valor do getter (inicial) com setter, isso é pra apagar no setter";
console.log("prod.nome: ", prod.nome);
