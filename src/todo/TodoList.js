import React from 'react';
import './Todo.css';
import * as moment from 'moment';
import "../../node_modules/moment/locale/pt-br.js";

export default props => {
  const renderTarefas = () => {
    const list = props.list || []
    return list.map(todo => (
      <article className="message is-dark" key={todo.id}>
        <div className="message-header">
          <p>{moment(todo.createdAt).locale('pt-br').fromNow()}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body has-text-left">
          {todo.descricao}
        </div>
      </article>
    ))
  }

  return (
    <div className="todoBox">
      {renderTarefas()}
    </div>
  )
};