import React, { Component } from 'react';
import ListItem from '../item/list'
import CreateItem from '../item/create'
import EditArea from './edit'
import DeleteArea from './delete'

class ElementoArea extends Component {

    constructor (props) {
        super(props);
        this.state = {
          showChildren: props.showChildren,
          newItem: null
        }
    }

    componentWillMount () {
        // console.log('ElementoArea',this.props)
    }

    handleStored (newItem) {
        this.setState({
            newItem: newItem
        })
    }

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
                    {this.props.area.descripcion}
                    &nbsp;<EditArea area={this.props.area} handleUpdated={this.props.handleUpdated} />
                    &nbsp;<DeleteArea area={this.props.area} handleRemoved={this.props.handleRemoved} />
                    <ul>
                        <li>
                            <CreateItem area={this.props.area.id} handleStored={this.handleStored.bind(this)} />
                        </li>
                    </ul>
                    <ListItem area={this.props.area.id} newItem={this.state.newItem} />
                </li>
            );
        }

        return (
            <li>
                <a href="#" onClick={toggle}>(+)</a>
                {this.props.area.descripcion}
                &nbsp;<EditArea area={this.props.area} handleUpdated={this.props.handleUpdated} />
                &nbsp;<DeleteArea area={this.props.area} handleRemoved={this.props.handleRemoved} />
            </li>
        );
    }
}

export default ElementoArea;