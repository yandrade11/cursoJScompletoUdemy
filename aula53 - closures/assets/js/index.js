                            //escopo global
function retornaFuncao() {  //escopo da função
  const nome = "Yuri";

  return function () {
    return nome;            //Closure da função: escopo de encerramento da função
  };
}

const funcao = retornaFuncao();
console.dir(funcao);
