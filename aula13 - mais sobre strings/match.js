// IMPORTANTE: cada caracter de uma string é indexado, exemplo:

//               01234567
let umaString = "Um texto";

//                 0123456789
let outraString = "O rato roeu a roupa do rei de roma."

console.log(umaString.match(/[a-z]/g));         //expressão regular para retornar todas as letras minúsculas da string

console.log(umaString.search(/x/));             //retorna o índice da letra x, igual indexOf só que permite expressão regular

console.log(umaString.replace('Um', 'Outro'));  //troca a palavra "Um" para "Outro" **permite regex

console.log(outraString.replace(/r/), 'X');     //troca o primeiro R por X, para trocar todos os R coloque g no regex, assim: (/r/g)

console.log(umaString.length);                  //para contar o tamanho da string (numero de caracteres)

console.log(outraString.slice(2, 11));          //para pegar um trecho da string (indicando pela posição do indice, o último não está incluso)
console.log(outraString.slice(-5));             //pega um trecho contando de trás pra frente
                                                //caso coloque um numero apenas, ele pega daquela posição em diante

                                                //.substring serve para o mesmo que slice mas escreve muito mais código

console.log(outraString.split(" "));            //separa sua frase por " " e coloca cada palavra dentro de um índice de um array
console.log(outraString.split('r'));            //obs se você usar uma letra, ela não está incluída nesse array


//.toUpperCase() para colocar tudo maiúsculo
//.toLowerCase() para colocar tudo minúsculo