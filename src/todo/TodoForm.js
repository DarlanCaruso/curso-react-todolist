import React from 'react';
import Button from '../template/Button';
import './Todo.css';

export default props => {
  const eventoTeclado = (e) => {
    if(e.key === 'Enter') {
      e.shiftKey ? props.pesquisarTarefa() : props.adicionarTarefa();
    } else if (e.key === 'Escape') {
      props.limparPesquisa();
    }
  }

  return (
    <div className="todoBox">
      <div className="field has-addons has-addons-centered">
        <Button onClick={props.pesquisarTarefa} fa={'search'} color={'light'} />
        <Button onClick={props.limparPesquisa} fa={'trash-alt'} color={'light'} />
        <div className="control is-expanded">
          <input
            className="input is-light"
            type="text"
            placeholder="Adicionar uma tarefa"
            value={props.descricao}
            onChange={props.atualizaDescricao}
            onKeyUp={eventoTeclado}
          />
        </div>
        <Button onClick={props.adicionarTarefa} fa={'plus'} color={'light'} />
      </div>
    </div>
  )
}