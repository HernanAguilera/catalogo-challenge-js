import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Login from './components/login'
import ListCatalogo from './components/catalogo/list'
import CreateCatalogo from './components/catalogo/create'

import './App.css';

const Home = () => (
  <div className="container">
    <h1>
      Catalogos
      &nbsp;<CreateCatalogo />
    </h1>
    <ListCatalogo />
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <LinkContainer exact to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
            </Nav>
          </Navbar>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
