import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats,
      selectedFlat: { lat: 48.884211, lng: 2.349175 },
      center: {
        lat: 48.853372,
        lng: 2.349175
      },
      zoom: 12
    };
  }

  render() {
    return (
      <div className="container">
        <FlatList flatList={this.state.flats} />
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
          <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
