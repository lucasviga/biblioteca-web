import React, { Component } from 'react';

export default class Author extends Component {
  render() {

    const {author} = this.props;

    return (
        <li>
          <spam>#{author.id}: </spam>
          <strong>Nome: {author.firstName}</strong>
          <p>Sobrenome: {author.lastName}</p>
        </li>
    );
  }
}
