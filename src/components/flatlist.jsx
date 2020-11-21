import React, { Component } from 'react';
import Flat from './flat';

class Flatlist extends Component {

  render() {
    return (
      this.props.flatlist.map((flat) => {
        return <Flat flat={flat} select={this.props.select} />
      })
    )
  }
}

export default Flatlist;
