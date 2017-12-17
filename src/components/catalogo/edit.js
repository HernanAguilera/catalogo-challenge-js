import React, { Component } from 'react';
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Catalogo from '../../utils/resources/Catalogo'

class EditCatalogo extends Component {

    constructor (props) {
        super(props);
        this.resource = Catalogo;
        this.state = {
            showModal: false,
            descripcion: props.catalogo.descripcion
        }
    }

    close() {
        this.setState({ showModal: false });
    }
    
    open() {
        this.setState({ showModal: true });
    }

    handleSubmit() {
        let promise = this.resource.patch(this.props.catalogo.id ,{descripcion: this.descripcion.value});
        promise.then((response) => {
            console.log(response.data)
            this.close()
        }, (error) => {
            console.log(error)
        })
    }

    handleChange () {
        this.setState({
            descripcion: this.descripcion.value
        })
    }

    render () {
        return (
        <span>
            <Button
                bsStyle="warning"
                bsSize="xsmall"
                onClick={this.open.bind(this)}
            >
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </Button>
            <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                <Modal.Header>
                    <Modal.Title>{this.state.descripcion}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form >
                        <FormGroup>
                            <ControlLabel>Descripcion</ControlLabel>
                            <FormControl type="text" 
                                        inputRef={ref => { this.descripcion = ref; }} 
                                        value={this.state.descripcion}
                                        onChange={this.handleChange.bind(this)} />
                        </FormGroup>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.close.bind(this)}>Cancelar</Button>
                    <Button onClick={this.handleSubmit.bind(this)} bsStyle="warning">Guardar</Button>
                </Modal.Footer>
            </Modal>
        </span>
        );
    }

}

export default EditCatalogo;