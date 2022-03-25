//recursividade: função que chama ela mesma (grava essa porra crl!!!)

function recursiva(max) {
  console.log(max);

  //preciso dar um limite pois muita recursividade é travada pelo browser
  //o famoso "maximum call stack size exceeeded"
  if (max >= 10) return;

  //assim como preciso de um contador para ela não ficar se chamando pra sempre
  max++;

  //se chama de novo, na próx vai contar +1 de novo
  recursiva(max);
}

//começa no 0
recursiva(0);
