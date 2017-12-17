import React, { Component } from 'react';
import ListArea from '../area/list'
import CreateArea from '../area/create'
import EditCatalogo from './edit'
import DeleteCatalogo from './delete'

class ElementCatalogo extends Component {

    constructor (props) {
        super(props);
        this.state = {
          showChildren: props.showChildren
        }
    }

    // componentWillMount () {
    //     console.log(this.props)
    // }

    toggle (e) {
        e.preventDefault();
        this.setState({showChildren: !this.state.showChildren})
    }

    render () {
        var toggle = this.toggle.bind(this);
        if (this.state.showChildren){
            return (
                <li>
                    <a href="#" onClick={toggle}>(-)</a>
                    {this.props.catalogo.descripcion}
                    &nbsp;<EditCatalogo catalogo={this.props.catalogo} />
                    &nbsp;<DeleteCatalogo catalogo={this.props.catalogo} />
                    &nbsp;<CreateArea catalogo={this.props.catalogo.id} />
                    <ListArea catalogo={this.props.catalogo.id} />
                </li>
            );
        }

        return (
            <li>
                <a href="#" onClick={toggle}>(+)</a>
                {this.props.catalogo.descripcion}
                &nbsp;<EditCatalogo catalogo={this.props.catalogo} />
                &nbsp;<DeleteCatalogo catalogo={this.props.catalogo} />
                &nbsp;<CreateArea catalogo={this.props.catalogo.id} />
            </li>
        );
    }
}

export default ElementCatalogo;