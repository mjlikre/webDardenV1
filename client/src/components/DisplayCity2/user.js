import React, {Component} from 'react';
import {connect} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css'
import GoogleMap from '../GoogleMap2'
import { fetchMatch} from "../../actions/matchingAction";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLoc : false,
            current: {}

        }

    }



    changeCurrentLoc = (e) => {

        const r = window.confirm(`Are you sure you're location is ${e.name}, ${e.country}?`)
        if (r === true){
            console.log(e.lat, e.lng)
            // this.setState({current: {...e} })

            this.props.fetchMatch({lat: e.lat, lng: e.lng})
            console.log(this.match)
            // this.setState({currentLoc: true})


        }


    }
    eachCity() {
        if (this.props.cities && this.state.currentLoc === false) {
            return this.props.cities.Results.map(city => {
                return(
                    <div key = {city.name}>
                        <button onClick = {()=>{this.changeCurrentLoc({lat: city.lat, lng: city.lon, name: city.name, country: city.c})}} key = {city.zmw} className="btn btn-primary">{city.name}, {city.c}</button>
                    </div>
                )
            })

        }

    }
    eachCoords () {
        if (this.props.cities && this.state.currentLoc === false) {
            const allCoords = this.props.cities.Results.map(city => {
                const coords = []
                coords.push({lat: city.lat, lng: city.lon})

                return coords
            })
            return(
                <GoogleMap coordinates = {allCoords}/>
            )

        }

    }

    renderCityList = () => {

        if (this.props.cities){

            return (
                <div>
                    <h4>Maybe you mean...</h4>
                    {this.eachCity()}
                    {this.eachCoords()}

                </div>
            )
        }

    }



    render() {
        if(this.state.currentLoc===false){
            return (
                <div>
                    {this.renderCityList()}
                </div>

            );
        }
        else{
            return(
                <div>this is it!!!</div>
            )
        }



    }
}

const mapStateToProps = state => ({
    cities: state.searchReducer.city,
    matched: state.matchReducer.matched,
    matchedError: state.matchReducer.matchError

})

export default connect(mapStateToProps, {fetchMatch})(Index);