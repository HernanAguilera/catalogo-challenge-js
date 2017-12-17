import React, { Component } from 'react';
import ListArea from '../area/list'
import CreateArea from '../area/create'
import EditCatalogo from './edit'
import DeleteCatalogo from './delete'

class ElementCatalogo extends Component {

    constructor (props) {
        super(props);
        this.state = {
          showChildren: props.showChildren,
          newArea: null
        }
    }

    toggle (e) {
        e.preventDefault();
        this.setState({showChildren: !this.state.showChildren})
    }

    handleStored (newArea) {
        this.setState({
            newArea:newArea
        })
    }

    render () {
        var toggle = this.toggle.bind(this);
        if (this.state.showChildren){
            return (
                <li>
                    <a href="#" onClick={toggle}>(-)</a>
                    {this.props.catalogo.descripcion}
                    &nbsp;<EditCatalogo catalogo={this.props.catalogo} handleUpdated={this.props.handleUpdated} />
                    &nbsp;<DeleteCatalogo catalogo={this.props.catalogo} handleRemoved={this.props.handleRemoved} />
                    <ul>
                        <li>
                            <CreateArea catalogo={this.props.catalogo.id} handleStored={this.handleStored.bind(this)} />
                        </li>
                    </ul>
                    <ListArea catalogo={this.props.catalogo.id} newArea={this.state.newArea} />
                </li>
            );
        }

        return (
            <li>
                <a href="#" onClick={toggle}>(+)</a>
                {this.props.catalogo.descripcion}
                &nbsp;<EditCatalogo catalogo={this.props.catalogo} handleUpdated={this.props.handleUpdated} />
                &nbsp;<DeleteCatalogo catalogo={this.props.catalogo} handleRemoved={this.props.handleRemoved} />
            </li>
        );
    }
}

export default ElementCatalogo;