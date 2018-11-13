import React, { Component } from 'react';
import api from '../services/api';
import Book from '../component/Book';

export default class listBook extends Component {
    
    state = {
        books: [],
    }

    async componentDidMount(){
        const response = await api.get('/books');

        this.setState({books:response.data});
    }

    render() {
        return (
            <div>
                <h1>Lista Book</h1>

                <ul>
                    {this.state.books.map(book => (
                        <Book key={book.id} book={book} />
                    ))}
                </ul>
            </div>
        );
    }
}
