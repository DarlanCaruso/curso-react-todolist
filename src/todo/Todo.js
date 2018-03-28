import React, { Component } from 'react';
import axios from 'axios';

import Header from '../template/Header';
import Message from '../template/Message';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:9000/tarefas/';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { descricao: '', lista: [] };
    this.atualizaDescricao = this.atualizaDescricao.bind(this);
    this.pesquisarTarefa = this.pesquisarTarefa.bind(this);
    this.adicionarTarefa = this.adicionarTarefa.bind(this);
    this.removerTarefa = this.removerTarefa.bind(this);
    this.marcarComoConcluida = this.marcarComoConcluida.bind(this);
    this.marcarComoPendente = this.marcarComoPendente.bind(this);
    this.limparPesquisa = this.limparPesquisa.bind(this);
    this.refresh();
  }

  atualizaDescricao(e) {
    this.setState({...this.state, descricao: e.target.value});
  }

  refresh(descricao = '') {
    const search = descricao ? `/descricao/${descricao}` : '';
    axios.get(`${URL}${search}?sort=-createdAt`)
      .then(response => this.setState({...this.state, descricao, list: response.data}));
  }

  adicionarTarefa() {
    const descricao = this.state.descricao;
    axios.post(URL, {descricao, done: false})
      .then(response => this.refresh());
  }

  removerTarefa(todo) {
    axios.delete(`${URL}/${todo.id}`)
      .then(response => this.refresh(this.state.descricao));
  }

  marcarComoConcluida(todo) {
    axios.put(`${URL}/${todo.id}`, {...todo, done: true })
      .then(response => this.refresh(this.state.descricao))
  }

  marcarComoPendente(todo) {
    axios.put(`${URL}/${todo.id}`, {...todo, done: false })
      .then(response => this.refresh(this.state.descricao))
  }

  pesquisarTarefa() {
    this.refresh(this.state.descricao);
  }

  limparPesquisa() {
    this.refresh();
  }

  render() {
    return (
      <div className="todo">
        <Header titulo="Todo" subtitulo="Lista de tarefas" />
        <div className="container is-fluid">
          <Message 
            mensagem={['Você pode adiconar e pequisar suas lista de tarefas abaixo. Também é possível pesquisar usando atalhos do teclado. ', <strong>Enter</strong>, ' insere uma nova tarefa, ', <strong>Shift+Enter</strong>, ' pesquisa por uma tarefa e a tecla ', <strong>Esc</strong>, ' limpa sua pesquisa.']}
            color="primary"
            tamanho="small"
          />
          <TodoForm 
            adicionarTarefa={this.adicionarTarefa}
            atualizaDescricao={this.atualizaDescricao}
            descricao={this.state.descricao}
            pesquisarTarefa={this.pesquisarTarefa}
            limparPesquisa={this.limparPesquisa}
          />
          <TodoList 
            list={this.state.list}
            removerTarefa={this.removerTarefa}
            marcarComoConcluida={this.marcarComoConcluida} 
            marcarComoPendente={this.marcarComoPendente}
          />
        </div>
      </div>
    );
  }
}