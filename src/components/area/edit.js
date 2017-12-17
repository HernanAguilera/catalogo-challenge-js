import React, { Component } from 'react';
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Area from '../../utils/resources/Area'

class EditArea extends Component {

    constructor (props) {
        super(props);
        this.resource = Area;
        this.state = {
            showModal: false,
            descripcion: props.area.descripcion
        }
    }

    componentWillMount () {
        // console.log('EditArea', this.props)
    }

    close() {
        this.setState({ showModal: false });
    }
    
    open() {
        this.setState({ showModal: true });
    }

    handleSubmit() {
        this.close()
        let promise = this.resource.patch(this.props.area.id ,{descripcion: this.descripcion.value});
        promise.then((response) => {
            console.log(response.data)
            this.props.handleUpdated(response.data)
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
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;
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

export default EditArea;