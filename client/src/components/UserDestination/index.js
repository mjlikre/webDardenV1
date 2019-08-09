import React, {Component} from 'react';
import DisplayCity from "../DisplayCity2/user"
import Search from "../Search/index"
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";



class Index extends Component {


    currentState = false;




    render() {
        const cardStyles = {
            width: '18rem',

        };
        if(this.props.match.matched) {
            this.currentState = true
        }
        if(!this.currentState){


            return (
                <div>
                    <Search/>
                    <DisplayCity/>


                </div>

            );

        }
        else{
            return this.props.match.matched.map(match => {
                console.log(match)

                return(
                    <div className="card" style={cardStyles}>
                        <img className="card-img-top" src={match.__v} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Name: {match.userName}</h5>
                            <h5 className="card-title">City: {match.city}</h5>
                            <p className="card-text">{match.userName} is a {match.age} years old guide in {match.city} with {match.yearsOfExperience} in the business. In his own words, he claims himself to be "{match.aboutMe}", and he will be happy to be your tour guide in your trip to {match.city}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                )

            })

        }


    }
}
const mapStateTpProps = state =>({
    match: state.matchReducer.match,

    matchError: state.matchReducer.matchError,


})

export default connect(mapStateTpProps, null)(Index);