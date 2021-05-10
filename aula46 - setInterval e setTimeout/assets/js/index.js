function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

function funcaoDoInterval() {
  console.log(mostraHora());
}

//código obsoleto mas necessário saber
//setInterval(funcaoDoInterval, 1000);    //primeiro parâmetro função (sem parenteses de parametro), segundo parâmetro tempo em MILISSEGUNDOS

//------------------------- EXEMPLO 2 (melhor escrita) ---------------------------//

//FUNÇÃO ANÔNIMA: mesma coisa do código de cima, com declaração de variável timer (para usar em outro código)
//setInterval: configura intervalo de tempo para alguma função executar algo
const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000); 

//setTimeout: em 5 segundos faça UMA execução
setTimeout(function () {
  clearInterval(timer);     //acaba com o timer em 6 segundos (para no 5 pois leva 1 segundo para iniciar a variavel "timer")
}, 6000);

//------------------------- OUTRO EXEMPLO DE setTimeout ---------------------------//

setTimeout(function () {
  console.log('Olá mundo: fui programado para comprimentá-lo 7 segundos após execução do programa');
}, 7000); 