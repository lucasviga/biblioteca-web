import React, {Component} from 'react';
import api from '../services/api';
import Author from '../component/Author';

export default class listaAuthor extends Component {

    state = {
        authors: [],
    }

    async componentDidMount (){
        const response = await api.get('/authors');

        this.setState({authors: response.data});
    }

    render(){
        return(
            <div>
                <h1>Inserir novo autor</h1>
                <form>
                    <input placeholder="nome" />
                    <input placeholder="sobrenome" />
                    <button>Inserir</button>
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