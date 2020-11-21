import React, { Component } from 'react';
import flats from './data/flats.js';
import Flatlist from './flatlist';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class App extends Component {

  static defaultProps = {
    center: {
      lat: flats[0].lat,
      lng: flats[0].lng
    },
    zoom: 11
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flatlist: flats
    };
  }

  select = (selected) => {
    this.setState({
      selectedFlat: selected
    });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
        <Flatlist flatlist={ this.state.flatlist } select={this.select} />
        </div>
        <div className="map-container">
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng}/>
        </GoogleMapReact>
        </div>
      </div>
      )
  }
}

export default App;
