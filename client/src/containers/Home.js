import React, { Component } from 'react';
import Demo from './../components/Demo';
import Search from '../components/Search';
import Dropdown from '../components/DisplayCity2';
import {connect} from "react-redux"
import './style.css';

class index extends Component  {

    render(){
        if (!this.props.cities){
            return(
                <div>
                    <Search />
                    <Demo />
                </div>
            )
        }else{
            return (
                <div>

                    <Search />
                    <Dropdown />
                </div>

            );
        }

    }

};

const mapStateToProps = state => ({
    cities: state.searchReducer.city
})

export default connect(mapStateToProps, null)(index)
