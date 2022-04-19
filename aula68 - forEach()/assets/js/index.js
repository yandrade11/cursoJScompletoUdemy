const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

a1.forEach(function(valor, indice, array) {
  console.log(valor);
  console.log('---------------\n');
  console.log(array[indice]); //imprimem o mesmo valor mas a outra forma é melhor de escrever
});

//melhor escrita
a1.forEach(valor => console.log(valor));


//forma de fazer um reduce, embora seja menos performático que o próprio .reduce()
let total = 0
a1.forEach(valor => {
  total += valor;
});
console.log(total);