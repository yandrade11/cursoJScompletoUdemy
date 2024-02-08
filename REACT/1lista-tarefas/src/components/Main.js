//COMPONENTE PRINCIPAL DO APP

//importando react e classe "Component" que será herdado pela classe Main
import React, { Component } from 'react';
import './Main.css';

// Form
//importando react-icons para utilizar no browser
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

//classe Main herdando "Component" (e se transformando em "filha")
export default class Main extends Component {
  //class fields
  state = {
    //inicializando um STATE
    novaTarefa: '',
    tarefas: ['Fazer café', 'Beber água', 'Estudar'],
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

  //componente STATEFULL são geralmente classes e precisam do render(para renderizar algo na tela)
  render() {
    // importando valor da propriedade (novaTarefa) do STATE
    // const novaTarefa = this.state.novaTarefa; OU
    const { novaTarefa, tarefas } = this.state;

    return (
      //no JSX usamos className pq class é uma palavra reservada do JS
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          {/* para usar JS no JSX usar "{}" */}
          {/* onChange: ao mudar algo no input, chama função handleChange */}
          <input
            onChange={this.handleChange}
            placeholder="Digite aqui sua tarefa"
            type="text"
            // repare que no value estou chamando o STATE sem aspas
            value={novaTarefa}
          />
          <button type="submit">
            {/* chamando FaPlus que foi importado do react-icons*/}
            <FaPlus />
          </button>
        </form>

        {/* pegando o valor da propriedade do STATE para o h2 */}
        {/* <h2>{tarefas}</h2> */}

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            //KEY: serve como uma INDEX para o REACT, nesse caso ele usa a própria tarefa (e depois vai tratar pra não ter tarefa igual)
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className='edit' />
                <FaWindowClose className='delete' />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
