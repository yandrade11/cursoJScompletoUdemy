const num = Number(prompt("Digite um número:"));

const numeroTitulo = document.getElementById("numero-digitado");
const texto = document.getElementById("texto-retornado");

numeroTitulo.innerHTML = num;

texto.innerHTML = '';   //para zerar o valor pré-setado (como placeholder) no html
texto.innerHTML = `<p>Raiz quadrada do número digitado é: ${num ** .5}</p>`;
texto.innerHTML += `<p>O número digitado é inteiro? ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>O número digitado é NaN? ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>O número digitado arredondado para cima? ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>O número digitado arredondado para baixo? ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>O número digitado arredondado para o mais próximo? ${Math.round(num)}</p>`;
texto.innerHTML += `<p>O número digitado com duas casas decimais? ${num.toFixed(2)}</p>`;