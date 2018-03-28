import React from 'react';

export default props => (
    <article class={'message is-'+props.color+ ' is-'+props.tamanho+ ' todoBox'}>
      <div class="message-body">
        {props.mensagem}
      </div>
    </article>
  )
