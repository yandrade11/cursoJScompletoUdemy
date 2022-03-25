//                0        1        2
const nomes = ['Yuri', 'Ursula', 'Enzo'];               //criação de array literal
nomes[2] = 'Enzinho';                                   //modificando valor da indice 0
delete nomes[0];                                        //deletando valor do indice 0 sem alterar os indices

console.log(nomes);
console.log('---------');
//-------------------------------------------------------------------------------------------------//

//outra forma de declarar array, funciona para: string, objetos, funções, números, etc...
const nomes2 = new Array('Yoman', 'Creuza', 'Aline');   //criação de array por construtor
console.log(nomes2);

//-------------------------------------------------------------------------------------------------//

//array é um "valor por referencia" ou seja:
const nomes3 = ['fulano', 'ciclano', 'beltrano'];
const novo = nomes3;                                    //tudo que eu modificar em novo, modifica em nomes e vasco-versa

novo.pop();                                             //o método .pop() remove o ultimo indice do array e retorna o mesmo, você pode guardar numa variável caso haja necessidade
console.log(nomes3);

//-------------------------------------------------------------------------------------------------//
//obs: spreand operator e rest operator são os mesmos ... a diferença é o contexto onde é utilizado, o rest é para pegar o resto do array
const nomes4 = ['a', 'b', 'c'];
const spread = [...nomes4]                              //spread operator: copia os valores de nomes4
spread.shift();                                         //o método .shift() remove o primeiro indice do array e o retorna, tbm pode guardar em variável 
spread.push('d');                                       //add valor no final do array
spread.unshift('A');                                    //add valor no inicio do array (não utilizar em array grande pq altera todos os indices e isso causa problema em performance)

console.log(spread);                                    //nesse caso as alterações em 'spread' não alteram 'nomes4'                                              
console.log(spread.length);                             //o atributo length pega o tamanho do array, ou seja, quantos indices tem no array 

const fatiado = spread.slice(1,3);                      //slice fatia o array (da posicao inicial, até a posicao final sem incluir o 3)
console.log(fatiado);

//-------------------------------------------------------------------------------------------------//
//convertendo string no array
const string = 'Yuri Andrade';
const strings = string.split(' ');                      //split cria um array fatiando uma STRING, nesse caso por espaço vazio
console.log(strings);

//convertendo array em string
const nomeCompleto = strings.join(', ');                 //join transforma um array em uma string, nesse caso unindo os valores de cada indice por virgula e espaço vazio
console.log(nomeCompleto);

