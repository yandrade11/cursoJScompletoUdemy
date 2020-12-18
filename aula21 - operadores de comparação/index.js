/*

OPERADORES DE COMPARAÇÃO: retorna boolean

>   maior que;
>=  maior que OU igual a;                 tipo de comparação OU só retorna falso se os dois forem falsos
<   menor que;
<=  menor que OU igual a;                 tipo de comparação OU só retorna falso se os dois forem falsos   
=   atribuição;
==  igualdade;                            não recomendado utilizar
=== igualdade estrita (valor e tipo);   
!=  diferente;                            não recomendado utilizar
!== diferente estrito (valor e tipo);

*/

//porque não utilizar == ou !=
const num1 = 10;            //number
const num2 = '10';          //string
let comparacao = num1 == num2;  

console.log(comparacao);    //retorna verdadeiro mesmo tendo 2 tipos de dados diferentes, o JS faz a correção de tipo

comparacao = num1 === num2;
console.log(comparacao);    //agora ele retorna false pois são 2 tipos diferentes

//OBS: o mesmo vale para != e !==