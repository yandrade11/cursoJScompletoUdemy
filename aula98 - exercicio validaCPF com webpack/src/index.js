import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

//função auto-executável (ninguém usa, só pra relembrar)
(function() {
    const gerador = new GeraCPF();
    const cpfGerador = document.querySelector('.cpf-gerado');

    const paragrafo = document.createElement('p');
    paragrafo.innerText = gerador.geraNovoCpf();
    cpfGerador.appendChild(paragrafo);
})();