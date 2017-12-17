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

  render() {
    return (
      <div className="ListArea">
        <ul>
            {
              this.state.elements.map(function(ele){
                return (
                    <ElementoArea area={ele} showChildren={false} key={ele.id} />
                );
              })
            }
        </ul>
      </div>
    );
  }
}

export default ListArea;
