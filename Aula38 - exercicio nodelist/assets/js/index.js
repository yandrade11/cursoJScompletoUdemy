const paragrafos = document.querySelector('.paragrafos');

//retorna um NODELIST de 4 paragrafos (similar ao array)
//por ser similar ao array também tem índice e também funciona com length
const ps = document.querySelectorAll('p');    

//getComputedStyle = pega todos os estilos "computados" no body
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
// console.log(backgroundColorBody);

//.style = para modificar css do body via js
for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white'; // ou #fff
}