import React from 'react';
import logo from '../logo.svg';

export default props => (
  <section className="hero is-small is-dark is-bold">
    <div className="hero-body">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">{props.titulo}</h1>
        <h2 className="subtitle">{props.subtitulo}</h2>
      </div>
    </div>
  </section>
);