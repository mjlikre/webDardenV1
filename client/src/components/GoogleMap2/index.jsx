import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  displayMarkers = () => {
      return this.props.coordinates.map(coord =>{
          return(
                  <Marker position={{
                      lat: coord[0].lat,
                      lng: coord[0].lng
                  }}/>
              )
      })
    //onClick={() => console.log("You clicked me!")} />
  }
  render() {
    const mapStyles = {
      width: '70%',
      height: '70%',
    };
    return (
        <div>
          <Map
              google={this.props.google}
              zoom={4}
              style={mapStyles}
              initialCenter={{ lat: 37.87211, lng: -122.27165230000001}}
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
