import React from 'react';
import logo from '../logo.svg';
import bg from '../bg.jpg';
import './Header.css';

export default props => (
  <section className="hero is-medium is-dark is-bold">
    <div className="hero-body">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title is-1">{props.titulo}</h1>
        <h2 className="subtitle is-6">{props.subtitulo}</h2>
      </div>
    </div>
  </section>
)