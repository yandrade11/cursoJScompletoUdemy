const hora = 50;

//forma de escrita tradicional (não é a mais recomendada)
if (hora >= 0 && hora <= 11) {
    console.log(`Bom dia`);
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde`);
} else if (hora >= 18 && hora <= 23) {
    console.log(`Boa noite`);
} else {                                        //obs o else sozinho, só pode ser o último e ter apenas um
    console.log(`Digite uma hora certa`);
}

/* ----------------------------------------------------------------------------------------------------------- */

const numero = 10;
