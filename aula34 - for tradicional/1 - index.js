/* PARA FAZER UM FOR VOCÊ PRECISA DE 3 SITUAÇÕES:
1. criar uma variável que será o meu ÍNDICE
2. definir o tamanho do meu for, com uma condição ternária
3. incrementar o ÍNDICE para da próxima vez rodar o ÍNDICE 1 (e assim por diante)
*/

// (variavel;  condição;  incremental)
for (let i = 0; i <= 5; i++) {
console.log(`INDICE: ${i} - LINHA: ${i+1}`);
}

console.log('------------');

//obs: lembrando que você pode iniciar o seu i (indice) a partir do numero que quiser 
//obs2: lembrando tambem que você pode fazer um FOR incremental de x (qualquer numero), exemplos:
for (let i = 10; i <= 100; i += 10) {
    console.log(`LINHA: ${i}`);
}

console.log('------------');

//supondo que você queira fazer um FOR decremental de 10
for (let i = 500; i >= 400; i -= 10) {
    console.log(`LINHA: ${i}`);
}

console.log('------------');

//EXERCÍCIO BÁSICO DE ENTREVISTA DE EMPREGO
//crie um FOR de 1 a 10 e imprima os valores que são pares:
for (let i = 2; i <= 10; i+=2) {
    console.log(i);
}