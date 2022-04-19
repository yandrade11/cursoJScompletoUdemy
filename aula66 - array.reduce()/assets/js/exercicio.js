//RETORNE A PESSOA MAIS VELHA COM REDUCE

const pessoas = [
  { nome: "Yuri", idade: 30 },
  { nome: "Enzo", idade: 7 },
  { nome: "Yoman", idade: 83 },
  { nome: "Creuza", idade: 63 },
  { nome: "Aline", idade: 40 },
];

const maisVelhA = pessoas.reduce((acumulador, valor) => {
  if (valor.idade > acumulador.idade) acumulador = valor;
  
  return acumulador;
}); //se não tem valor, o acumulador sempre será o primeiro valor
console.log(maisVelhA);
