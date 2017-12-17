import React, { Component } from 'react';
import Area from '../../utils/resources/Area'
import ElementoArea from './element'

class ListArea extends Component {

  constructor (props) {
    super(props);
    this.resource = Area;
    this.state = {
      elements: []
    }
  }

  loadData () {
    let promise = this.resource.query({catalogo: this.props.catalogo});
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
      <div className="ListArea">
        <ul>
            {
              this.state.elements.map((ele) => {
                return (
                    <ElementoArea area={ele} 
                                  showChildren={false} 
                                  handleUpdated={this.handleUpdated.bind(this)}
                                  handleRemoved={this.handleRemoved.bind(this)}
                                  key={ele.id} />
                );
              })
            }
        </ul>
      </div>
    );
  }
}

export default ListArea;
