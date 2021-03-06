import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Catalogo from '../../utils/resources/Catalogo'

class DeleteCatalogo extends Component {

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
        let promise = this.resource.delete(this.props.catalogo.id);
        promise.then((response) => {
            console.log(response.data)
            this.props.handleRemoved(this.props.catalogo.id)
        }, (error) => {
            console.log(error)
        })
    }

    render () {
        return (
        <span>
            <Button
                bsStyle="danger"
                bsSize="xsmall"
                onClick={this.open.bind(this)}
            >
                <i class="fa fa-trash" aria-hidden="true"></i>
            </Button>
            <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                <Modal.Header>
                    <Modal.Title>CONFIRMACIÓN</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>¿Confirma que desea eleminar el catalogo: <strong>{this.props.catalogo.descripcion}</strong>?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.close.bind(this)}>Cancelar</Button>
                    <Button onClick={this.handleSubmit.bind(this)} bsStyle="danger">Eliminar</Button>
                </Modal.Footer>
            </Modal>
        </span>
        );
    }

}

export default DeleteCatalogo;