//                        0          1          2
//                     0  1  2    0  1  2    0  1  2
    const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];    

    //para acessar o valor 6
    console.log(numeros[1][0]);

    //OU (atribuição via desestruturação)
    const [,[,cinco]] = numeros;    //cada virgula significa um array (contando a partir do 0) ou um valor se dentro de duas chaves
    console.log(cinco);

    //ainda em atribuição via desestruturação (forma mais fácil)
    const [lista1, lista2, lista3] = numeros;
    console.log(lista2[2]);