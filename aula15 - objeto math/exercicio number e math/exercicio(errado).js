let num = prompt("Digite um número qualquer: ");
let raiz = (num ** 0.5).toFixed(2);
let inteiro = Number.isInteger(num); //retorna sempre false
let nan = Number.isNaN(num);         //retorna sempre false
let arredondaCima = Math.ceil(num);
let arredondaBaixo = Math.floor(num);
let arredonda = Math.round(num);
let casasDecimais = num.toFixed(2);  //retorna num.toFixed(2) is not a function e nem imprime na tela o resto

document.body.innerHTML = `<h1><b>Seu número é: ${num}</b></h1><br /><br />`;
document.body.innerHTML += `Raiz quadrada do número digitado é: ${raiz}<br /><br />`;
document.body.innerHTML += `O número digitado é inteiro? ${inteiro}<br /><br />`;
document.body.innerHTML += `O número digitado é NaN? ${nan}<br /><br />`;
document.body.innerHTML += `O número digitado arredondado para cima? ${arredondaCima}<br /><br />`;
document.body.innerHTML += `O número digitado arredondado para baixo? ${arredondaBaixo}<br /><br />`;
document.body.innerHTML += `O número digitado arredondado para o mais próximo? ${arredonda}<br /><br />`;
document.body.innerHTML += `O número digitado com duas casas decimais? ${num.toFixed(2)}<br /><br />`; //retorna 55 inteiro, ainda dá is not a function mas imprime o resto