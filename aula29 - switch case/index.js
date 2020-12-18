const data = new Date();
const diaSemana = data.getDay() + 1;  //porque 0 - domingo && 6 - sábado     
let diaSemanaTexto;

if (diaSemana === 1) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 7) {
    diaSemanaTexto = 'Sábado';
}

console.log('1: ', diaSemanaTexto);

//quando você vai fazer várias checagens na mesma variável
switch (diaSemana) {
    case 1:
        diaSemanaTexto = 'Domingo';
        break;

    case 2:
        diaSemanaTexto = 'Segunda';
        break;

    case 3:
        diaSemanaTexto = 'Terça';
        break;

    case 4:
        diaSemanaTexto = 'Quarta';
        break;

    case 5:
        diaSemanaTexto = 'Quinta';
        break;

    case 6:
        diaSemanaTexto = 'Sexta';
        break;

    case 7:
        diaSemanaTexto = 'Sábado';
        break;

    default:
        diaSemanaTexto = 'Valor errado';        //não há necessidade de colocar break no default (que ja é ultimo caso)
}

console.log('2: ', diaSemanaTexto);

//caso esse switch estivesse dentro de uma function você pode trocar o break por return, exemplo:
function exemplo(classeParametro) {

    switch (classeParametro) {
        case 1:
            diaSemanaTexto01 = 'Domingo';
            return diaSemanaTexto01;
    }
}