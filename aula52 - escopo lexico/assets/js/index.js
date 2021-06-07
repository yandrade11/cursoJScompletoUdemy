// ESCOPO LÉXICO
// a função tem seu próprio escopo, caso não ache a declaração da variável dentro da função
// ela vai procurar no pai, no avô, etc... até que se chegue no escopo global
const nome = "Yuri";

function falaNome() {
  const nome = "Yuri Andrade";
  console.log(nome);
}

function usaFalaNome() {
  falaNome();
}
usaFalaNome();
