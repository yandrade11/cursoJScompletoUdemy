const nome = 'Yuri Gomes';
const sobrenome = 'de Andrade';
const idade = 29;
const peso = 86;
const altura = 1.79;
let imc;
let anoNasc;

imc = peso / (altura * altura); //calculo de Índice de Massa Corporal
anoNasc = 2020 - idade;

//modo normal
console.log('MÉTODO NORMAL: ', nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg\ntem', altura + 'm e seu IMC é de: ', imc, '\nlogo, você nasceu no ano de: ', anoNasc, '\n');

//template strings = a mais recomendada
console.log(`MÉTODO TEMPLATE STRINGS: ${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg\ntem ${altura}m e seu IMC é de: ${imc} \nlogo, você nasceu no ano de: ${anoNasc}`);
