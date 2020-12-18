/* OPERADORES LÓGICOS:

&& -> false && true -> false            (avaliação de curto-circuito, ele para de avaliar o resto assim que encontra um false)
OBS: retorna o valor que foi falso

|| -> true && qualquer coisa -> true    (avaliação de curto-circuito, ele para de avaliar o resto assim que encontra um true)
OBS: retorna o PRIMEIRO valor que foi verdadeiro


VALORES QUE AVALIAM EM FALSO EM JS (FALSY):

false;
0;
"";     //
'';     //    string vazia
``;     //
null;
undefined;
NaN;

OBS: QUALQUER COISA diferente dos valores citados acima retorna TRUE em js.

*/

//exemplo:
function falaOi() {
    return 'Oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi());     //ele retorna false e nem verifica 'falaOi' ***importante para performance

//nesse caso ele vai retornar 'Yuri' e vai parar de verificar, por isso não retorna o 'true' também.
console.log(0 || false || 'Yuri' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);                   //retorna 'preto' porque corUsuario é false e como falamos ele retorna o PRIMEIRO verdadeiro


//exercicio pegadinha do malandro:
const a = 0;
const b = null;
const c = 'false';                      //esse é o valor considerado TRUE
const d = false;
const e = NaN;

console.log(a || b || c || d || e);     //aqui só retorna o PRIMEIRO verdadeiro, caso não tivesse nenhuma seria retornado o ÚLTIMO falso.