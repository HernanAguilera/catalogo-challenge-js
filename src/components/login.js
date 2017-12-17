import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import HttpClient from '../utils/http';
import StorageManager from '../utils/storage';
import './login.css';

class Login extends Component {

    handleSubmit (e) {
        e.preventDefault();
        let data = [];
        
        HttpClient.post('/auth/login/', data)
            .then(function(response){
                    StorageManager.set('token', response.data.key);
                }, function(error){
                        alert('Login invalido');
                        console.log(error)
                    })
    }

  render() {
    return (
      <div className="Login">
        <div className="container">
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="email" name="email" id="exampleEmail" placeholder="correo@ejemplo.com" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" name="password" id="examplePassword" placeholder="********" />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
      </div>
    );
  }
}

export default Login;
