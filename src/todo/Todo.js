import React, { Component } from 'react';

import Header from '../template/Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { descricao: '', lista: [] };
    this.atualizaDescricao = this.atualizaDescricao.bind(this);
    this.adicionarTarefa = this.adicionarTarefa.bind(this);
  }

  atualizaDescricao(e) {
    this.setState({...this.state, descricao: e.target.value});
  }

  adicionarTarefa() {
    console.log(this.state.descricao);
  }

  render() {
    return (
      <div className="todo">
        <Header titulo="Todo" subtitulo="Lista de tarefas" />
        <div className="container is-fluid">
            <TodoForm 
              adicionarTarefa={this.adicionarTarefa}
              atualizaDescricao={this.atualizaDescricao}
              descricao={this.state.descricao}
            />
            <TodoList />
        </div>
      </div>
    );
  }
}