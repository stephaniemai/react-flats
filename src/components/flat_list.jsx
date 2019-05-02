import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.flatList)}
      </div>
    );
  }
}


export default FlatList;
