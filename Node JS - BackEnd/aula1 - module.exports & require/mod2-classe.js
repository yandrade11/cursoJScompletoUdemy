class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = "Yuri";
const sobrenome = "Andrade";

//Exportando com classe em NodeJS
// module.exports.Pessoa = Pessoa;

//ou (melhor escrita para exportar tudo)
exports.Pessoa = Pessoa;

//exportando propriedade específica e já criando valor
module.exports.nome = "Yuri";
exports.sobrenome = "Andrade";

//você pode adicionar chave/valor (propriedade e valor) mas não pode controlar igual a ultima forma (inclusive não funciona se fizer da ultima forma)
exports.idade = "32";

//melhor forma de exportar e ter controle do que vai ser exportado (mas necessita criação da variável)
module.exports = {
  nome,
  sobrenome,
  Pessoa,
};
