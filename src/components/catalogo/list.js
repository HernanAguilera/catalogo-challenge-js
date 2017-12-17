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

    render() {
        return (
            <div className="ListCatalogo">
              <ul>
                  {
                    this.state.elements.map(function(ele){
                      return (
                          <span  key={ele.id}>
                            <ElementCatalogo catalogo={ele} showChildren={false} />
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
