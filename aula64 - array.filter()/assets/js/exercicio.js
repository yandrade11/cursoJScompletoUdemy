//RETORNE AS PESSOAS QUE TEM NOME COM 5 LETRAS OU MAIS.
//RETORNE PESSOAS COM MAIS DE 50 ANOS.
//RETORNE PESSOAS CUJO NOME TERMINA COM A.

const pessoas = [
  { nome: "Yuri", idade: 30 },
  { nome: "Enzo", idade: 7 },
  { nome: "Yoman", idade: 83 },
  { nome: "Creuza", idade: 63 },
  { nome: "Aline", idade: 40 },
];

console.log("PESSOAS COM MAIS DE 5 LETRAS: ");

//cada posição do array é um objeto
pessoas.filter((obj) => {
  obj.nome.length >= 5 ? console.log(obj) : "";
});

console.log("------------------\n");
//-----------------------------------------------------------------//

console.log("PESSOAS COM MAIS DE 50 ANOS: ");

//apesar do prettier colocar de novo os "()" em "idoso" (ou seja, cada posição do meu array, ou cada objeto),
//como só tem um argumento utilizado, não é necessário. Se fosse utilizar o indice, já teria que colocar os "()" novamente.
pessoasIdosas = pessoas.filter(idoso => idoso.idade > 50);
console.log(pessoasIdosas);

console.log("------------------\n");
//-----------------------------------------------------------------//

console.log('PESSOAS CUJO NOME TERMINA COM "A": ');

let terminaComA = pessoas.filter((objeto) => {
//return objeto.nome.slice(-1) === "a";
  return objeto.nome.endsWith('a');     //método nativo endsWith faz o mesmo que o .slice(-1)
});
console.log(terminaComA);
