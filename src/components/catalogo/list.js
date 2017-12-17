import React, { Component } from 'react';
import Catalogo from '../../utils/resources/Catalogo'
import ElementCatalogo from './element'

class ListCatalogo extends Component {

  constructor (props) {
    super(props);
    this.resource = Catalogo;
    this.state = {
      elements: [],
      showChildren: false
    }
  }

  loadData () {
    let promise = this.resource.query();
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
          <div className="ListCatalogo">
            <ul>
                {
                  this.state.elements.map((ele) => {
                    return (
                        <span  key={ele.id}>
                          <ElementCatalogo catalogo={ele} 
                                           showChildren={false} 
                                           handleUpdated={this.handleUpdated.bind(this)}
                                           handleRemoved={this.handleRemoved.bind(this)}
                                           />
                        </span>
                    );
                  })
                }
            </ul>
          </div>
      );
  }
}

export default ListCatalogo;
