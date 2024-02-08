//COMPONENTE PRINCIPAL DO APP

//importando react e classe "Component" que será herdado pela classe Main
import React, { Component } from 'react';

//classe Main herdando "Component" (se transforma em filha)
export default class Main extends Component {
  //constructor: só é chamado para criar STATE e passar PROPS
  constructor(props) {
    //quando a classe herda de outra classe (Component), temos que chamar super() para herdar constructor da classe herdada (pai)
    super(props);

    //this.state: Um objeto com atributos do STATE do componente MAIN e suas mudanças vão refletir no render() do mesmo componente
    this.state = {
      //inicializando um STATE
      novaTarefa: '',
    };

    //VINCULA o this do método inputChange() ao this do constructor (parecido com .bind do JS)
    this.inputChange = this.inputChange.bind(this);
  }

  //captura valor digitado no input e salva temporariamente no state
  inputChange(event) {
    //.setState: para modificar valores das chaves do objeto STATE
    // NÃO É POSSÍVEL FAZER: this.state.novaTarefa = 'novoValor'
    this.setState({
      novaTarefa: event.target.value,
    });
  }

  //funções STATEFULL são geralmente classes e precisam do render(para renderizar algo na tela)
  render() {
    // importando valor da propriedade (novaTarefa) do STATE
    // const novaTarefa = this.state.novaTarefa; OU
    const { novaTarefa } = this.state;

    return (
      //no JSX usamos className pq class é uma palavra reservada do JS
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#">
          {/* para usar JS no JSX usar "{}" */}
          {/* onChange: ao mudar algo no input, chama função inputChange */}
          <input
            onChange={this.inputChange}
            placeholder="meupaunatuacara"
            type="text"
          />
          <button type="submit">Enviar</button>

          {/* pegando o valor da propriedade do STATE para o h2 */}
          <h2>{novaTarefa}</h2>
        </form>
      </div>
    );
  }
}
