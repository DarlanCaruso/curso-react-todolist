import React from 'react';
import Button from '../template/Button';
import './Todo.css';

export default props => (
  <div className="todoBox">
    <div className="field has-addons has-addons-centered">
      <Button onClick={props.pesquisarTarefa} fa={'fas fa-search'} color={'button is-light'} />
      <div className="control is-expanded">
        <input
          className="input is-light"
          type="text"
          placeholder="Adicionar uma tarefa"
          value={props.descricao}
          onChange={props.atualizaDescricao}
        />
      </div>
      <Button onClick={props.adicionarTarefa} fa={'fas fa-plus'} color={'button is-light'} />
    </div>
  </div>
);