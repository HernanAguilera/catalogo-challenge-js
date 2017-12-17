import React, { Component } from 'react';
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Catalogo from '../../utils/resources/Catalogo'

class CreateCatalogo extends Component {

    constructor () {
        super();
        this.resource = Catalogo;
        this.state = {
            showModal: false
        }
    }

    close() {
        this.setState({ showModal: false });
      }
    
      open() {
        this.setState({ showModal: true });
      }

    handleSubmit() {
        this.close()
        let promise = this.resource.post({descripcion: this.descripcion.value});
        promise.then((response) => {
            console.log(response.data)
            this.props.handleStored(response.data)
        }, (error) => {
            console.log(error)
        })
    }

    render () {
        return (
        <span>
            <Button
                bsStyle="primary"
                bsSize="small"
                onClick={this.open.bind(this)}
            >
                <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;
                Catalogo
            </Button>
            <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                <Modal.Header>
                    <Modal.Title>Nuevo catalogo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form >
                        <FormGroup>
                            <ControlLabel>Descripcion</ControlLabel>
                            <FormControl type="text" inputRef={ref => { this.descripcion = ref; }}  />
                        </FormGroup>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.close.bind(this)}>Cancelar</Button>
                    <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Guardar</Button>
                </Modal.Footer>
            </Modal>
        </span>
        );
    }

}

export default CreateCatalogo;