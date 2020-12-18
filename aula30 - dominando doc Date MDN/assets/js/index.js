const getContainer = document.querySelector('.container');
const data = new Date();

//este código não funciona por causa do timeStyle, obsoleto?
getContainer.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'}); 