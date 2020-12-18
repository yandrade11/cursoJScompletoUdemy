function trataFormulario() {

    const form = document.querySelector('.formulario');
    const imprimeCadastroNaTela = document.querySelector('.imprimeCadastro');

    const pessoas = [];

    function botaoEnviar(eventoClick) {
        eventoClick.preventDefault(); //previne comportamento padrão (refresh após click) 

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const alturaEmCm = form.querySelector('.alturaEmCm');

        //salvando objeto (grupo de dados) dentro do array
        pessoas.push({
            //nomeDoCampoDoObjeto: nome da variavel acima.VALOR dentro da variavel
            nome: nome.value,   
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: alturaEmCm.value,
        });
       
        console.log(pessoas);

        //ESSA PORRA DE INNERHTML QUE IMPRIME NO DOC LEMBRA DESSA PORRA!!!
        imprimeCadastroNaTela.innerHTML += `<p>Pessoa ${pessoas.length}:</p>`;
        imprimeCadastroNaTela.innerHTML += `<p>Nome: ${nome.value}</p>`;
        imprimeCadastroNaTela.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`;
        imprimeCadastroNaTela.innerHTML += `<p>Peso: ${peso.value}kg</p>`;
        imprimeCadastroNaTela.innerHTML += `<p>Altura: ${alturaEmCm.value}cm</p>`;   
    }
  
    form.addEventListener('submit', botaoEnviar) //chamada da função botaoEnviar() no click(submit) do botão
}

trataFormulario();