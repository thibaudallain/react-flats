import React, { Component } from 'react';

class Flat extends Component {

  handleClick = (event) => {
    this.props.select(this.props.flat);
  }

  render() {
    const flatStyle = {
      backgroundImage:  `url(${ this.props.flat.imageUrl }`
    }
    return (
      <div className="card" style={ flatStyle } onClick = { this.handleClick }>
        <div className="card-category">{this.props.flat.price}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
      )
  }
}

export default Flat;
