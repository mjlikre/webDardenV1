import React, {Component} from 'react';
import { fetchLocation } from "./../actions/locationAction"
import { connect } from 'react-redux';
import GoogleMap from './GoogleMap'

class Geoloc extends Component {
    render() {
        const position = {
            lat: this.props.coords && this.props.coords.latitude,
            lng: this.props.coords && this.props.coords.longitude
        }
        if (position.lat && position.lng){
            this.props.fetchLocation(position);
        }
        return (
            <div>
                <GoogleMap position = {position}/>
            </div>
        )
    }
}
export default connect(null, { fetchLocation })(Geoloc);

