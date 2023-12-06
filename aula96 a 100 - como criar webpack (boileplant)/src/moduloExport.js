const nome = "Yuri";
const sobrenome = "Andrade";
const idade = 32;

function soma(x, y) {
  return x + y;
}

// export em ES6
export { nome, sobrenome, idade, soma };

//-----------------------------------------------------------//

// OUTRA FORMA DE EXPORTAR COM ES6 (mais utilizada)
export const nome2 = "Leo";
export const sobrenome2 = "Braga";
export const idade2 = 34;

export function soma2(x, y) {
  return x + y;
}

//default: transforma a variável, função, classe, etc... como padrão. Para importar: import as qualquerNome from "./moduloExport.js"

//você só pode colocar como DEFAULT 1 coisa
//mas você pode colocar o default na saída
export default function funcaoDefault(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

export class Pessoa {
  constructor(nome2, sobrenome2, idade2, soma2) {
    this.nome = nome2;
    this.sobrenome = sobrenome2;
    this.idade = idade2;
    this.soma = soma2;
  }
}

// *OBS: também posso colocar "apelido" na variável utilizando 'as' e chamar no import pelo apelido em todos os casos