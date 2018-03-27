import React, { Component } from 'react';

import Header from '../template/Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.adicionarTarefa = this.adicionarTarefa.bind(this);
  }
  adicionarTarefa() {
    console.log(this);
  }

  render() {
    return (
      <div className="todo">
        <Header titulo="Todo" subtitulo="Lista de tarefas" />
        <div className="container is-fluid">
            <TodoForm adicionarTarefa={this.adicionarTarefa}/>
            <TodoList />
        </div>
      </div>
    );
  }
}