// escreva uma função chamada ePaisagem 
// que recebe dois arumentos, largura e altura de uma imagem (number)
// retorne true se a imagem estiver no modo paisagem

//função simples
function ePaisagem(largura, altura) {
    if (largura > altura) {
        return true;
    } else {
        return false;
    }
}

//ternário
function ePaisagem2(largura, altura) {
    return largura > altura ? true : false;
}

//arrow function simples
const ePaisagem3 = (largura, altura) => {
    //return largura > altura ? true : false;
    return largura > altura;    //basta digitar a condição e ja vai retornar true ou false
}

//arrow function melhor escrita
//const ePaisagem4 = (largura, altura) => largura > altura ? true : false;
const ePaisagem4 = (largura, altura) => largura > altura;

console.log(ePaisagem(4096, 2048));
console.log(ePaisagem2(1080, 1350));
console.log(ePaisagem3(1080, 608));
console.log(ePaisagem4(1080, 1350));