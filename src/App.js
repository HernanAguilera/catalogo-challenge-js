import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import HttpClient from './utils/http';
import Login from './components/login'
import ListCatalogo from './components/catalogo/list'
import CreateCatalogo from './components/catalogo/create'
import StorageManager from './utils/storage';

import './App.css';

class Home extends Component {

  constructor (props) {
    super(props);
    this.state = {
      newCategoria: null
    }
  }

  handleStored (newCategoria) {
    this.setState({
      newCategoria: newCategoria
    })
  }

  render () {
    if (!StorageManager.get('token')) {
      return (<Redirect to={{
            pathname: '/login',
            state: { from: '/' }
          }}/>
        );
    }
    return (
      <div className="container">
        <h1>
          Catalogos
          &nbsp;<CreateCatalogo handleStored={this.handleStored.bind(this)} />
        </h1>
        <ListCatalogo newCategoria={this.state.newCategoria} />
      </div>
    )
  }
}

const Logout = () => {
  StorageManager.delete('token');
  HttpClient.unsetToken();
  return (<Redirect to={{
              pathname: '/login',
              state: { from: '/logout' }
          }}/>
      )
}

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
            {
              StorageManager.get('token') ?
              (<LinkContainer to="/logout">
                <NavItem>Logout</NavItem>
              </LinkContainer>) :
              (<LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>)
            }
            </Nav>
          </Navbar>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/logout" component={Logout}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
