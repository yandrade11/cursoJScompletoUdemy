const getContainer = document.querySelector('.container');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    const dia = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

    return dia[diaSemana];
}

function getNomeMes(numMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return meses[numMes];
}

function zeroAEsquerda (num) { 
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
        ` de ${data.getFullYear()} ` +
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    )
}

getContainer.innerHTML = criaData(data);