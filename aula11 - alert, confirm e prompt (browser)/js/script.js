alert('Com a nossa mensagem.');             //pop-up com a mensagem e botão ok
                                            //retorna undefined

confirm('Tem certeza que deseja fechar?');  //pop-up com a mensagem e botões ok ou cancelar
                                            //retorna true (ok) ou false (cancelar)

/* prompt('Qual seu nome?'); */             //pop-up com a mensagem e textbox para digitar/responder
                                            //retorna string (mesmo que digite numero)


let nome = prompt('Qual seu nome?');      //retorna e salva string à variável nome;
console.log(nome);
nome = nome + ' ' + prompt("Sobrenome?");
console.log(nome);

