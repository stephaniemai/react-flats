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
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
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
            <div className="marker">
              <Marker
                lat={89.955413}
                lng={20.337844}
                text="My Marker"
              />
            </div>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
