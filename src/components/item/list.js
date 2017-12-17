import React, { Component } from 'react';
import Item from '../../utils/resources/Item'
import EditItem from './edit'
import DeleteItem from './delete'

class ListItem extends Component {

  constructor (props) {
    super(props);
    this.resource = Item;
    this.state = {
      elements: []
    }
  }

  loadData () {
    let promise = this.resource.query({area: this.props.area});
    promise.then((response) => {
      this.setState({ elements: response.data });
      console.log(this.state.elements);
    }, (error) => {
      console.log(error);
    })
  }

  componentWillMount () {
    this.loadData();
  }

  componentWillReceiveProps(nextProps) {
    this.loadData();
  }

  handleUpdated (data) {
    let index = this.getIndex(data.id);
    let elements = this.state.elements;
    elements[index].descripcion = data.descripcion
    this.setState({
      elements:elements
    })
  }

  handleRemoved (id) {
    let index = this.getIndex(id);
    let elements = this.state.elements;
    elements.splice(index,1);
    this.setState({
      elements:elements
    })
  }

  getIndex (id) {
    for (let i = 0; i<this.state.elements.length;i++){
      if (this.state.elements[i].id === id)
        return i;
    }
    return -1;
  }

  render() {
    return (
      <div className="ListItem">
        <ul>
            {
            this.state.elements.map((ele) => {
                return (
                    <li key={ele.id}>
                        {ele.descripcion}
                        &nbsp;<EditItem item={ele} handleUpdated={this.handleUpdated.bind(this)} />
                        &nbsp;<DeleteItem item={ele} handleRemoved={this.handleRemoved.bind(this)} />
                    </li>
                );
            })
            }
        </ul>
      </div>
    );
  }
}

export default ListItem;
