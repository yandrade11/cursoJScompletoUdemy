const pegaContainer = document.querySelector('.container');
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
]

const criaDiv = document.createElement('div');
pegaContainer.appendChild(criaDiv);

for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];  //ou const tag = elementos[i].tag; + const texto = elementos[i].texto; (sem desestruturação)
    
    let criaTag = document.createElement(tag);
    criaTag.innerText = `${texto} --- `;          //apesar de ser mais óbvio usar innerHTML, é mais seguro usar innerText (para garantir que só vá texto)
    criaDiv.appendChild(criaTag);    

    let aprendendoTextNode = document.createTextNode(texto);
    console.log(`Nó de texto ${[i]}: ${texto}`);        //para estudo
    criaTag.appendChild(aprendendoTextNode);
    criaDiv.appendChild(criaTag)
}