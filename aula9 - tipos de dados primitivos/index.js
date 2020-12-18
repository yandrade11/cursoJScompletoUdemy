//strings
const nome = 'Yuri';    
const nome2 = "Yuri";
const nome3 = `Yuri`; //template strings

//number
const num = 10;     //inteiro
const num2 = 10.52; //real

//undefined = não aponta para local nenhum na memória
let nomeAluno;

//null
let nomeAluno2 = null; //usado para desconfigurar uma variável (zerar o tipo/valor)

//boolean
const aprovado = true;
const aprovado2 = false;

//array (lista de dados)
const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3)
console.log(a, b);

//console.log(typeof aprovado); - typeof serve para ver o tipo do dado incluído na variável

