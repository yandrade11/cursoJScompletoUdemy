//Operador internário = "? :"
//ou seja
//if em uma linha de código (só pode ser usado quando existe apenas verificação de sim e não)

const pontuacaoUsuario = 999;

                        //condição ternária          if              se não             **se for passar somente string passar dentro de ' '
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);


//o que é um fallback?
const corUsuario = null;
const corPadrao = corUsuario || 'preta';    //se usuario escolheu cor, fica essa cor, se não fica a cor padrão 'preta'

