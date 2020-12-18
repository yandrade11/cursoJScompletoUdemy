let varA = 'A';
let varB = 'B';
let varC = 'C';

//forma mais "atual" de se fazer sem usar classe auxiliar
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);

/*
const aux = varA;

varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);
*/