//COMPONENTE PRINCIPAL DO APP

//importando react e classe "Component" que será herdado pela classe Main
import React, { Component } from 'react';
import './Main.css';

//classe Main herdando "Component" (se transforma em "filha")
export default class Main extends Component {
  //class fields
  state = {
    //inicializando um STATE
    novaTarefa: '',
  };

  //captura valor digitado no input e salva temporariamente no state
  //OBS: como não temos constructor, consequentemente nem this, fazemos o método com arrow function para conservar a referência do this dentro do escopo da classe (da um .bind(Main))
  handleChange = (event) => {
    //.setState: para modificar valores das chaves do objeto STATE
    // NÃO É POSSÍVEL FAZER: this.state.novaTarefa = 'novoValor'
    this.setState({
      novaTarefa: event.target.value,
    });
  };

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
          {/* onChange: ao mudar algo no input, chama função handleChange */}
          <input
            onChange={this.handleChange}
            placeholder="Digite aqui sua tarefa"
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
