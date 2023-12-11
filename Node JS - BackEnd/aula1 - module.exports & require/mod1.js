console.log("-------------EXPORTS-------------\n");

const nome = "Yuri";
const sobrenome = "Andrade";

const falaNome = () => nome + " " + sobrenome;

//como exportar em NodeJS
//a chave do exports não precisa ter o nome da varíavel, só para receber o valor
module.exports.NOME = nome;

//como fazer com valor por refereência (melhor escrita)
exports.SOBRENOME = sobrenome;

//nesse caso, ou seja, em NodeJS e fora de função/classe, o this é tanto module.exports como exports (já exports que é referência da propriedade do objeto module)
console.log("this: ", this);

//portanto você também pode exportar assim:
this.falaNome = falaNome();
