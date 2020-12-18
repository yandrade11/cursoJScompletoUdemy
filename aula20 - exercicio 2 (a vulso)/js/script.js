function trataFormulario() {

    const form = document.querySelector('.formulario');
    const cliente = [];

    function botaoEnviar(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const imc = form.querySelector('.imc');

        //objeto
        cliente.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value,
            imc: (Number(peso.value) / (Number(altura.value) * Number(altura.value))).toFixed(2), //necessário colocar o .value
        });

        //teste
        console.log(cliente);

        imc.value = cliente[0].imc;
    }

    form.addEventListener('submit', botaoEnviar);
}

trataFormulario();