import React, { Component } from 'react';

export default class Author extends Component {
  render() {

    const {author} = this.props;

    return (
        <li>
            <strong>Nome: {author.firstName}</strong>
            <p>Sobrenome: {author.lastName}</p>
            <button>Excluir</button>
            <button>Editar</button>
        </li>
    );
  }
}
