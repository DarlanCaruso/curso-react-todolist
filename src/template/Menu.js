import React from 'react';
import logo from '../logo.svg';
import './menuBurger.js';

export default props => (
  <nav className="navbar is-light">
    <div className="navbar-brand">
      <a className="navbar-item" href="./">
        <img src={logo} alt="Exemplo de aplicativo funcional com React e Reduz" width="50" height="50" />
      </a>
      <div className="navbar-burger burger" data-target="navbarMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarMenu" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="/todo">
          Todo
        </a>
        <a className="navbar-item" href="/about">
          Sobre
        </a>
      </div>
    </div>
  </nav>
);