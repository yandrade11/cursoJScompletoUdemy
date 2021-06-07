// FUNÇÕES IMEDIATAS ~ FUNÇÕES AUTO-INVOCADA ~ IIFE (Immediatly invoked function expression)
(function (idade, peso, altura) {
  const nome = "Yuri";  //função declarada e instanciada imediatamente: onde o escopo de nome é somente dentro da função (proteção do escopo global)
  console.log(nome);
  console.log(`Idade: ${idade}\nPeso: ${peso}\nAltura: ${altura}`);
})(30, 75, "1,79cm");   //passagem de parâmetro/argumento funciona normalmente

const nome = "Andrade";
