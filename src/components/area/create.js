import React, { Component } from 'react';
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Area from '../../utils/resources/Area'

class CreateArea extends Component {

    constructor () {
        super();
        this.resource = Area;
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
        let promise = this.resource.post({
            descripcion: this.descripcion.value,
            catalogo: this.props.catalogo
        });
        promise.then((response) => {
            console.log(response.data)
            this.close()
        }, (error) => {
            console.log(error)
        })
    }

    render () {
        return (
        <span>
            <Button
                bsStyle="default"
                bsSize="xsmall"
                onClick={this.open.bind(this)}
            >
                <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;
                Área
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

export default CreateArea;