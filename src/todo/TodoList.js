import React from 'react';
import './Todo.css';
import * as moment from 'moment';
import "../../node_modules/moment/locale/pt-br.js";

export default props => {
  const renderTarefas = () => {
    const list = props.list || []
    return list.map(todo => (
      <article className={todo.done === 'false' ? 'is-light message' : 'is-dark message'} key={todo.id}>
        <div className="message-header">
          <p>{moment(todo.createdAt).locale('pt-br').fromNow()} - Status: <strong>{todo.done === 'false' ? 'Pendente' : 'Concluído'}</strong></p>
          <div className="buttons">
            <span 
              className="button is-outlined is-primary" 
              onClick={() => props.marcarComoPendente(todo)} 
              disabled={todo.done === 'false'}>
              <i class="fas fa-hourglass-end" alt="Marcar como pendente"></i> 
            </span>
            <span 
              className="button is-outlined is-info" 
              onClick={() => props.marcarComoConcluida(todo)} 
              disabled={todo.done === 'true'}>
              <i class="far fa-check-circle"></i>
            </span>
            <span 
              className="button is-outlined is-danger" 
              onClick={() => props.removerTarefa(todo)}
              disabled={todo.done === 'true'}>
              <i class="fas fa-times"></i>
            </span>
          </div>
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