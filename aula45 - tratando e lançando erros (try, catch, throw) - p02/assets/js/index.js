function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.')
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {   //pegando horaAtual
    hour: '2-digit',      //código OBSOLETO: antes precisava colocar em 2 dígitos
    minute: '2-digit',    //código OBSOLETO: antes precisava colocar em 2 dígitos
    second: '2-digit',    //código OBSOLETO: antes precisava colocar em 2 dígitos
    hour12: false         //código OBSOLETO: antes precisava dele para tirar o AM/PM da hora
  });
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const horaAtual = retornaHora(11);
  console.log(horaAtual);
} catch (error) {
  console.log('Tratamento de erro');
} finally {
  console.log('Tenha uma boa noite');
}

