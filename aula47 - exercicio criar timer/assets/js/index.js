function botaoIniciar(evento) {
  // evento.preventDefault();

  let horaRelogio = document.querySelector('.relogio');
    
  getData(horaRelogio);
}

function getData(relogio) {
  let data = new Date();
  
  // let segundo = data.getSeconds();
  // let minuto = data.getMinutes();
  // let hora = data.getHours();

  let segundo = relogio.innerText.slice(6);
  let minuto = relogio.innerText.slice(3, 5);
  let hora = relogio.innerText.slice(0, 2);

  let stringHoraCompleta = `${hora}:${minuto}:${segundo}`;

  atualizaRelogio(relogio, segundo, minuto, hora);
}


function atualizaRelogio(relogio, segundo, minuto, hora) {
  const timer = setInterval(function () {
    if (segundo < 60) {
      segundo === `0${segundo++}`;
    } else if (minuto < 60) {
      segundo.innerText = '00';
      minuto++;
    } else {
      minuto.innerText = '00';
      hora++;
    }

    relogio.innerText = `${hora}:${minuto}:${segundo}`;
    
  }, 1000);
}

botaoIniciar();