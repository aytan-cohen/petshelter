import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import List from './components/List';
import New from './components/New';
import Detail from './components/Detail';
import Edit from './components/Edit';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="jumbotron">
          <h1>Pet Shelter</h1>
        </div>
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/new">New</Link>
            <a href="#!">About</a>
            <a href="#!">Contact Us</a>
            <a href="#!">Blog</a>
        </div>
          <div className="container">
          <Route exact path="/" component={List} />
          <Route path="/new" component={New} />
          <Route path="/pets/:_id" component={Detail} />
          <Route path="/edit/:_id" component={Edit} /> 
          </div>
      </BrowserRouter>
    );
  }
}

export default App;