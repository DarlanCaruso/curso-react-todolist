import React from 'react';
import Button from '../template/Button';
import './Todo.css';

export default props => (
  <div className="todoBox">
    <div className="field has-addons">
      <div className="control is-expanded">
        <input 
          className="input is-info" 
          type="text" 
          placeholder="Adicionar uma tarefa" 
          value={props.descricao}
          onChange={props.atualizaDescricao}
        />
      </div>
      <Button onClick={props.adicionarTarefa}/>
    </div>
  </div>
);