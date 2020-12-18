let num1 = 9.54578;

//para ARREDONDAR valor PARA BAIXO
let num2 = Math.floor(num1);
console.log(num2);

//para  ARREDONDAR valor PARA CIMA
let num3 = Math.ceil(num1);
console.log(num3);

//para ARREDONDAR para valor MAIS PRÓXIMO
let num4 = Math.round(num1);
console.log(num4);  //arredondou 9.54 para 10
                    //OBS: 9.50 (metade) também arredonda pra cima
                    //se fosse 9.49 ou menos ele arredondaria para 9


//para encontrar o MAIOR número de uma lista:
console.log(Math.max(1, 3, 5, 14));
                    
//para encontrar o MENOR número de uma lista:
console.log(Math.min(1, 3, 5, 14));

//para GERAR um número ALEATÓRIO com várias casas decimais entre 0 e 1 (1 nunca incluido)
console.log(Math. random());

//para GERAR um número ALEATÓRIO entre 10 e 5 (por exemplo)
const aleatorio = Math.random() * (10-5) + 5;
console.log(aleatorio);

//para ARREDONDAR esse número com várias casas decimais
console.log(Math.round(aleatorio));

//para DIMINUIR casas decimais para 2
console.log(aleatorio.toFixed(2));

//para retornar valor de PI
console.log(Math.PI);

//duas formas de se fazer POTÊNCIAÇÃO (x elevado a y)
console.log(Math.pow(2, 10));
console.log(2 ** 10);           //melhor e mais simples

//duas formas de se fazer RAIZ QUADRADA
let num5 = 9;
console.log(num5 ** (1/2));
console.log(num5 ** 0.5);






