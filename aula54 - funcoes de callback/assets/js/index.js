function randomTime(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min; //numero randomico entre 1000 e 3000

  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function () {
    console.log(`f1 levou ${randomTime()} segundos`);
    if (callback) callback();
  }, randomTime()); //milésimos de segundos, ou seja 0,5 segundos
}

function f2(callback) {
  setTimeout(function () {
    console.log(`f2 levou ${randomTime()} segundos`);
    if (callback) callback();
  }, randomTime());
}

function f3(callback) {
  setTimeout(function () {
    console.log(`f3 levou ${randomTime()} segundos`);
    if (callback) callback();
  }, randomTime());
}

//chamada das funções com callback embutido, ou seja: f2 só vai rodar depois de f1
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("Olá Mundo!");
//     });
//   });
// });

//======================================================================================//

//MELHOR ESCRITA
f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log("Olá Mundo!");
}
