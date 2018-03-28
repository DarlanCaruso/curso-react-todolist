import React, { Component } from 'react';
import axios from 'axios';

import Header from '../template/Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:9000/tarefas/';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { descricao: '', lista: [] };
    this.atualizaDescricao = this.atualizaDescricao.bind(this);
    this.adicionarTarefa = this.adicionarTarefa.bind(this);
    this.removerTarefa = this.removerTarefa.bind(this);
    this.refresh();
  }

  atualizaDescricao(e) {
    this.setState({...this.state, descricao: e.target.value});
  }

  refresh() {
    axios.get(`${URL}?sort=createdAt`)
      .then(response => this.setState({...this.state, descricao: '', list: response.data}));
  }

  adicionarTarefa() {
    let descricao = this.state.descricao;
    axios.post(URL, {descricao})
      .then(response => this.refresh());
  }

  removerTarefa(todo) {
    axios.delete(`${URL}/${todo.id}`)
      .then(response => this.refresh());
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
            <TodoList 
              list={this.state.list}
              removerTarefa={this.removerTarefa} 
            />
        </div>
      </div>
    );
  }
}