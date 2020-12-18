//declarando array / array são indexados (assim como strings)
//                0        1        2     3    4    5
const alunos = ['Yuri', 'Maria', 'João', 15, true, null];       //obs: o JS não restringe tipagem em array, porém não é recomendado
console.log(alunos);    

//para acessar valor específico do array:
console.log(alunos[3]); 

//como editar elemento do array:
alunos[1] = 'Maria Joana';
console.log(alunos);

//como adicionar elemento ao array:
alunos[6] = 'Luíza';                //dessa forma você precisa saber o tamanho do array (quantos índices existem)
console.log(alunos);

//para saber o tamanho do meu array de forma automatica:
console.log(alunos.length);         //ele retorna o numero de elementos e não a posição, por tanto sempre contará a partir do 1
                                    //nesse caso ele retorna 7 pois se contarmos quantos elementos existem, serão 7, 
                                    //mas o máximo de posição (índice) é 6 (conta a partir do zero)

//para adicionar elemento ao array de forma automatica:
alunos[alunos.length] = 'Do Val';
console.log(alunos);

//forma recomendada de adicionar elemento ao array:
alunos.push('Mais 1 elemento');
console.log(alunos);

//para adicionar elemento no COMEÇO DO ARRAY e não no final:
alunos.unshift('Andrade');
console.log(alunos);

/*----------------------------------------------------------*/

//para remover elemento do array do FINAL:
alunos.pop();
console.log(alunos);

//você pode por exemplo salvar o elemento que está sendo tirado do array em uma variável:
const removido = alunos.pop();      //esta salvando o 'Do Val' nessa variavel removido
console.log(removido);

//para remover elemento do array do COMEÇO:
alunos.shift();                     //está removendo 'Andrade' do array
console.log(alunos);

//para remover elemento do array MANTENDO AQUELA POSIÇÃO VAZIA (sem alterar as outras posições)
delete alunos[4];                   //aqui estou deixando a posição 4 (true) vazia
console.log(alunos);                //aqui você vê o array completo com a posição vazia
console.log(alunos[4]);             //aqui a posição 4 retorna undefined (assim como apontar para um índice que não existe)

//para fatiar o array (pegar uma parte do array)
//você pode pegar positivo (esquerda para direita) quanto negativo (direita para esquerda)
console.log(alunos.slice(0, 3));        //positivo (esquerda para direita) a posição 3 não está inclusa
console.log(alunos.slice(-2));          //negativo (direita para esquerda) pega as duas últimas posições

//obs: se você perguntar o tipo (typeof) de um array ele retorna que é um OBJETO
//para saber se é mesmo um array:
console.log(alunos instanceof Array);   //retorna true se for e false se não for

//OBS importantíssima: const não permite alterar valor de tipo primário, mas array não é um tipo primário, por tanto é mutável. Mas eu não posso trocar o TIPO do array declarado por uma const.