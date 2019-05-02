import React, { Component } from 'react';

class Flat extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const bckImg = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.imageURL})`
    };

    return (
      <div className="card" style={bckImg}>
        <div className="card-category"> {this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}{console.log(this.props)}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
};

export default Flat;
