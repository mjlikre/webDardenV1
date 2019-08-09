import React from "react";
import { geolocated } from "react-geolocated";
import Geoloc from "./../components/Geoloc"

class Demo extends React.Component {
    render() {
        return (
            <div>
                <Geoloc {...this.props} />
            </div>
        );
    }
}
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 0,
})(Demo);