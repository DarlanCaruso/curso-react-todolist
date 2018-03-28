import React from 'react';
import Header from '../template/Header';
import Message from '../template/Message';

export default props => (
  <div class="sobre">
    <Header titulo="Sobre" subtitulo="Sobre este app" />
    <Message 
      mensagem={['Projeto desenvolvido para o início de estudos sobre paradigma de programação funcional reativa com ', <strong>Redux.</strong>, ' Este projeto está na versão anterior a implementação do framework. As requisições são feitas com a biblioteca ', <strong>axios.</strong>, ' e enviadas para um banco de dados MongoDB local. Desenvolvido por ', <strong>Darlan Caruso </strong>, <a href="http://github.com/DarlanCaruso/">(github.com/darlancaruso)</a>, '. Março 2018.']}
      color="light"
      tamanho="small"  
    />
  </div>
);