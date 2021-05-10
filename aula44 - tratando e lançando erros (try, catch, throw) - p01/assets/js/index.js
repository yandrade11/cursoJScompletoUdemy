try {   //TENTE executar quando não há erros
  console.log(naoExiste);
} catch (erro) {            //e ou err são as mais usadas no mercado
  console.log(`Essa variável não existe.`);
  // console.log(erro);   //não é uma boa prática colocar o erro no log para o usuário ver
} finally {
  //SEMPRE é executado independente se tem erro ou não
}

function soma(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    //throw: lança o erro para a variável do catch 
    throw new TypeError('num1 ou num2 precisam ser números inteiros.');     //também poderia usar new ReferenceError, new TypeError, etc...
  }

  console.log('------------------------------------');
  console.log('typeof num1: ', typeof num1);
  console.log('typeof num2: ', typeof num2);
  return num1 + num2;
  console.log('------------------------------------');
}

try {
  console.log(soma(3, 5));    //passou do erro pois os dois são numeros
  console.log(soma(3, 'a'));  //pasosu do erro pois um dos dois não são numeros e retorna a mensagem do throw
} catch (err) {
  // console.log(err);        //aqui você imprime o erro igual o JS só que com a mensagem do throw new Error
  console.log('Algum numero nao é inteiro');
}

//exemplo utlizando finally
try {
  console.log('------------------------------------');

  console.log(a);   //erro proposital para mostrar catch com finally
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou o erro');
  console.log('Fechei o arquivo');
} catch (error) {
  console.log('Tratando o erro');
} finally {
  console.log('Finally: forçando fechar o arquivo');
}