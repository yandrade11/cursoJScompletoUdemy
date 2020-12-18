const getContainer = document.querySelector('.container');
const data = new Date();
const diaSemana = data.getDay() + 1;
const diaMes = data.getDate();
const mesAtual = data.getMonth() + 1;
const anoAtual = data.getFullYear();
const horaAtual = data.getMinutes() < 10 ? `${data.getHours()}:0${data.getMinutes()}` : `${data.getHours()}:${data.getMinutes()}`;
let diaSemanaTexto;
let mesAno;

switch (diaSemana) {
    case 1:
        diaSemanaTexto = 'domingo';
        break;

    case 2:
        diaSemanaTexto = 'segunda-feira';
        break;

    case 3:
        diaSemanaTexto = 'terça-feira';
        break;

    case 4:
        diaSemanaTexto = 'quarta-feira';
        break;

    case 5:
        diaSemanaTexto = 'quinta-feira';
        break;

    case 6:
        diaSemanaTexto = 'sexta-feira';
        break;

    case 7:
        diaSemanaTexto = 'sábado';
        break;

    default:
        diaSemanaTexto = 'Valor errado';        //não há necessidade de colocar break no default (que ja é ultimo caso)
}

switch (mesAtual) {
    case 1:
        mesAno = 'janeiro';
        break;

    case 2:
        mesAno = 'fevereiro';
        break;

    case 3:
        mesAno = 'março';
        break;

    case 4:
        mesAno = 'abril';
        break;

    case 5:
        mesAno = 'maio';
        break;

    case 6:
        mesAno = 'junho';
        break;

    case 7:
        mesAno = 'julho';
        break;

    case 8:
        mesAno = 'agosto';
        break;

    case 9:
        mesAno = 'setembro';
        break;

    case 10:
        mesAno = 'outubro';
        break;

    case 11:
        mesAno = 'novembro';
        break;

    case 12:
        mesAno = 'dezembro';
        break;

    default:
        break;
}


getContainer.innerHTML = `${diaSemanaTexto}, ${diaMes} de ${mesAno} de ${anoAtual} - ${horaAtual}`;