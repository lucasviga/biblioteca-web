import React, { Component } from 'react';
import listaAuthor from './pages/listaAuthor';
import listaBook from './pages/listaBook';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/autores">Autor</Link>
            <Link to="/livros">Book</Link>
          </nav>
          
          <Switch>
            <Route path="/autores" component={listaAuthor} />
            <Route path="/livros" component={listaBook} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
