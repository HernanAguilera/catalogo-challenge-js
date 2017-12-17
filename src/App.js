import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Login from './components/login'
import './App.css';

const Home = () => (
  <div className="container">
    <h1>Catalogos</h1>
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
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
            <LinkContainer to="/login">
              <NavItem eventKey={2}>Login</NavItem>
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
