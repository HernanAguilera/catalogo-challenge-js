import React, { Component } from 'react';
import ListItem from '../item/list'
import CreateItem from '../item/create'
import DeleteArea from './delete'

class ElementArea extends Component {

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
                    {this.props.area.descripcion}
                    &nbsp;<DeleteArea area={this.props.area} />
                    &nbsp;<CreateItem area={this.props.area.id} />
                    <ListItem area={this.props.area.id} />
                </li>
            );
        }

        return (
            <li>
                <a href="#" onClick={toggle}>(+)</a>
                {this.props.area.descripcion}
                &nbsp;<DeleteArea area={this.props.area} />
                &nbsp;<CreateItem area={this.props.area.id} />
            </li>
        );
    }
}

export default ElementArea;