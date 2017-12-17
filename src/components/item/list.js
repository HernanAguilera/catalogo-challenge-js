import React, { Component } from 'react';
import Item from '../../utils/resources/Item'

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

  render() {
    return (
      <div className="ListItem">
        <ul>
            {
            this.state.elements.map(function(ele){
                return (
                    <li key={ele.id}>
                        {ele.descripcion}
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