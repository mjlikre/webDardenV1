import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  displayMarkers = () => {
    return (
      <Marker
        position={{
          lat: this.props.position.lat,
          lng: this.props.position.lng
        }}
        onClick={() => console.log('You clicked me!')}
      />
    );
  };
  render() {
    const mapStyles = {
      width: '70%',
      height: '70%',
      margin: '3% 3% 3% 3%',
      borderRadius: '2%'
    };
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={{ lat: 37.87211, lng: -122.27165230000001 }}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBAQv_VajKKxKQTr1tw-PpDaMhV30n_D-c'
})(MapContainer);
