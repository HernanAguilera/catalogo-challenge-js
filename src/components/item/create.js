import React, { Component } from 'react';
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Item from '../../utils/resources/Item'

class CreateItem extends Component {

    constructor () {
        super();
        this.resource = Item;
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
            area: this.props.area
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
                Item
            </Button>
            <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                <Modal.Header>
                    <Modal.Title>Nuevo Item</Modal.Title>
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

export default CreateItem;