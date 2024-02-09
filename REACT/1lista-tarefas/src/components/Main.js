//COMPONENTE PRINCIPAL DO APP

//importando react e classe "Component" que será herdado pela classe Main
import React, { Component } from 'react';
import './Main.css';

//importando index.js e Form.css da pasta Form
import Form from './Form';
import Tarefas from './Tarefas';

//classe Main herdando "Component" (e se transformando em "filha")
//obsoleto (hoje em dia é mais utilizado function component - HOOKS)
export default class Main extends Component {
  //class fields
  state = {
    //inicializando um STATE
    novaTarefa: '',
    tarefas: [],
    indexEdicao: -1, // "-1" = não to editando nada
  };

  //SALVANDO NO LOCALSTORAGE

  //executado apenas uma vez (inicio do app) para montar o tarefas através do localStorage
  //roda depois do render
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

        <Form
          //PROPS = argumento em JSX
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tarefas={tarefas}
        />
      </div>
    );
  }
}
