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
    tarefas: [],
    indexEdicao: -1, // "-1" = não to editando nada
  };

  //SALVANDO NO LOCALSTORAGE

  //executado uma vez para montar o tarefas através do localStorage
  componentDidMount() {
    //analisa uma JSON de string e retorna o valor ou objeto
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  //método que atualiza a cada mudança de estado
  //prevState.novaTarefa: estado anterior à novaTarefa
  componentDidUpdate(prevProps, prevState) {
    //descomenta para ver funcionando
    // console.log(this.state.novaTarefa);
    // console.log(prevState.novaTarefa);

    const { tarefas } = this.state;

    //ainda não teve mudança
    if (tarefas === prevState.tarefas) return;

    //após update, convertendo em JSON de string e salvando no localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  //captura valor digitado no input e salva temporariamente no state
  //OBS: como não temos constructor, consequentemente nem this, fazemos o método com arrow function para conservar a referência do this dentro do escopo da classe (da um .bind(Main))
  handleChange = (event) => {
    //.setState: para modificar valores das chaves do objeto STATE
    // NÃO É POSSÍVEL FAZER: this.state.novaTarefa = 'novoValor'
    this.setState({
      novaTarefa: event.target.value,
    });
  };

  handleSubmit = (event) => {
    //previne envio do form (atualizar a página)
    event.preventDefault();

    const { tarefas, indexEdicao } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    // não permitir tasks iguais
    // if (tarefas.indexOf(novaTarefa) !== -1) return;

    //como eu não posso editar o estado tarefas diretamente: clono ela para uma nova variável
    const clonaTarefas = [...tarefas];

    if (indexEdicao === -1) {
      //depois de clonar tarefas, eu jogo
      this.setState({
        //SPREAD OPERATOR: desestrutura array e copia exatamente igual
        tarefas: [...clonaTarefas, novaTarefa],
        novaTarefa: '', //limpar input.value após o clique
      });
    } else {
      clonaTarefas[indexEdicao] = novaTarefa;

      this.setState({
        tarefas: [...clonaTarefas],
        indexEdicao: -1, //ja editei, volta pra estado 'não editando'
        novaTarefa: '', //limpar input.value após o clique
      });
    }
  };

  handleEdit = (event, index) => {
    const { tarefas } = this.state;

    this.setState({
      indexEdicao: index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (event, index) => {
    const { tarefas } = this.state;
    const clonaTarefas = [...tarefas];
    clonaTarefas.splice(index, 1);

    this.setState({
      tarefas: [...clonaTarefas],
    });
  };

  //componente STATEFULL são geralmente classes e precisam do render(para renderizar algo na tela)
  render() {
    // importando valor da propriedade (novaTarefa) do STATE
    // const novaTarefa = this.state.novaTarefa; (se tiver só 1) OU
    const { novaTarefa, tarefas } = this.state;

    return (
      //no JSX usamos className pq class é uma palavra reservada do JS
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          {/* para usar JS no JSX usar "{}" */}
          {/* onChange: ao mudar algo no input, chama função handleChange */}
          <input
            onChange={this.handleChange}
            placeholder="Digite aqui sua tarefa"
            type="text"
            // repare que no value estou chamando o STATE sem aspas
            value={novaTarefa}
          />
          <button type="submit" tabIndex={0}>
            {/* chamando FaPlus que foi importado do react-icons*/}
            <FaPlus />
          </button>
        </form>

        {/* pegando o valor da propriedade do STATE para o h2 */}
        {/* <h2>{tarefas}</h2> */}

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            //KEY: serve como uma INDEX para o REACT, nesse caso ele usa a própria tarefa (e depois vai tratar pra não ter tarefa igual)
            <li key={index}>
              {`${index + 1} - ${tarefa}`}
              <span>
                <FaEdit
                  //como os métodos tem 2 params, tem que escrever assim o invés de onClick={this.handleEdit}
                  onClick={(event) => this.handleEdit(event, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(event) => this.handleDelete(event, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
