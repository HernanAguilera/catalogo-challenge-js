import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import HttpClient from '../utils/http';
import StorageManager from '../utils/storage';
import Notifications from '../utils/notifications'
import './login.css';

class Login extends Component {

    constructor (props) {
        super(props);
        this.state = {
            authenticated: StorageManager.get('token') ? true : false
        };
    }

    handleSubmit (e) {
        e.preventDefault();
        let data = {
            email: this.email.value,
            password: this.password.value
        };
        
        HttpClient.post('/auth/login/', data)
            .then((response) => {
                    StorageManager.set('token', response.data.key);
                    this.setState({ authenticated: true });
                    Notifications.success('Iniciando sesión');
                }, (error) => {
                        Notifications.error('Credenciales invalidas');
                        console.log(error);
                    })
    }

    render() {
        if (this.state.authenticated){
            return (
                <Redirect to={{
                    pathname: '/',
                    state: { from: '/login' }
                }}/>
            );
        } 

        return (
            <div className="Login">
                <div className="container">
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="email" inputRef={ref => { this.email = ref; }} placeholder="correo@ejemplo.com" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type="password" inputRef={ref => { this.password = ref; }} placeholder="********" />
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
