import React, { Component } from 'react';

export default class Book extends Component {
  render() {

    const {book} = this.props;

    return (
        <li>
            <strong>
                <p>#: {book.id}</p> Titulo: {book.title}
            </strong>           
        </li>
    );
  }
}
