let num1 = prompt('Digite o numero 1: ');
let num2 = prompt('Digite o numero 2: ');

// num1 = Number(num1);
// num2 = Number(num2);

//let resultado = Number(num1) + Number(num2);    //melhor escrita

//outra forma de enxugar código (curto) com teplate strings
alert(`O resultado foi: ${Number(num1) + Number(num2)}`);         



//antes não conseguia imprimir, no alert sem template strings, pois estava usando "," ao invés de "+" (concatenação)
