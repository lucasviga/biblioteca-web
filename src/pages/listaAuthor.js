import React, {Component} from 'react';
import api from '../services/api';
import Author from '../component/Author';

export default class listaAuthor extends Component {

    state = {
        authors: [],
        newFirstName: '',
        newLastName: '',
    }

    async componentDidMount (){
        const response = await api.get('/authors');

        this.setState({authors: response.data});
    }

    handleNewAuthor = async () => {
        const firstName = this.state.newFirstName;
        const lastName = this.state.newLastName;

        await api.post('authors', {firstName, lastName});
    }

    handleInputChange = e => {
        this.setState({newFirstName: e.target.value});
    }

    handleInputChangeLastName = e => {
        this.setState({newLastName: e.target.value});
    }

    render(){
        return(
            <div>
                <h1>Inserir novo autor</h1>
                <form onSubmit={this.handleNewAuthor}>
                    <input onChange={this.handleInputChange} placeholder="nome" />
                    <input onChange={this.handleInputChangeLastName} placeholder="sobrenome" />
                    <button type="submit">Inserir</button>
                </form>
                <h1>Lista de Autores</h1>
                <ul>
                    {this.state.authors.map( author => (
                        <Author key={author.id} author={author} />
                    ))}
                </ul>
            </div>
        );
    }
}