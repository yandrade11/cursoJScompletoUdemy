//***ERA UNIX OU MARCO ZERO: 1 de Janeiro de 1970 00:00:00 UTC


//função construtora date

//para declarar uma função construtora SEMPRE precisará do new na frente e começa com letra maiúscula
const data = new Date();
// console.log(`${data.getHours}:${data.getMinutes}:${data.getSeconds}`);

//logica para trabalhar com hora

       //60s * 60s = 1h * 3 = 3h * 1000 (porque js trabalha com milissegundos)
const tresHoras = 60 * 60 * 3 * 1000;

const umaHora = 60 * 60;

//um dia inteiro em milésimos de segundos (como JS trabalha com data)
const umDia = 60 * 60 * 24 * 1000;

//setando data:         ano, mes, dia, hora, minuto, segundo, milissegundo
const data2 = new Date (2020, 10, 09,   21,    56,     05,       998);
console.log(data2.toString());

//setando data com string
const dataString = new Date ('2020-11-09 22:57:05.998');
console.log(dataString.toString());

console.log('Dia:', dataString.getDate());
console.log('Mês:', dataString.getMonth() + 1);                     //porque 0 - janeiro && 11 - dezembro
console.log('Ano:', dataString.getFullYear());
console.log('Hora:', dataString.getHours());
console.log('Minutos:', dataString.getMinutes());
console.log('Segundos:', dataString.getSeconds());
console.log('millissegundos:', dataString.getMilliseconds());
console.log('Nº dia da semana:', dataString.getDay());              //0 - Domingo && 6 - Sábado
console.log('Data atual em milésimos de segundos:', Date.now());    //quantos milissegundos existem desde o MARCO-ZERO*** até agora o momento capturado acima

const dataNow = new Date(1604970599134);
console.log('Caso comum:', dataNow.toString());                     //em alguns códigos você pode ver a data capturada assim, por milissegundos

