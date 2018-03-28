import React from 'react';
import './Todo.css';
import * as moment from 'moment';
import "../../node_modules/moment/locale/pt-br.js";

export default props => {
  const renderTarefas = () => {
    const list = props.list || []
    return list.map(todo => (
      <article className={todo.done === false ? 'is-dark message is-small' : 'is-light message is-small'} key={todo.id}>
        <div className="message-header">
          <p>{moment(todo.createdAt).locale('pt-br').fromNow()} - Status: <strong>{todo.done === false ? 'Pendente' : 'Concluído'}</strong></p>
          <div className="buttons">
            <span 
              className="button is-outlined is-primary is-small" 
              onClick={() => props.marcarComoPendente(todo)}
              disabled={todo.done === false}>
              <i className="fas fa-hourglass-end"></i> 
            </span>
            <span 
              className="button is-outlined is-info is-small" 
              onClick={() => props.marcarComoConcluida(todo)} 
              disabled={todo.done === true}>
              <i className="far fa-check-circle"></i>
            </span>
            <span 
              className="button is-outlined is-danger is-small" 
              onClick={() => props.removerTarefa(todo)}
              disabled={todo.done === false}>
              <i className="fas fa-times"></i>
            </span>
          </div>
        </div>
        <div className="message-body has-text-left">
          {todo.done === false ? todo.descricao : <s>{todo.descricao}</s>}
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