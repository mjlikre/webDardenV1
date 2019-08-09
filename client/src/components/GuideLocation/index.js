import React, {Component} from 'react';
import Search from "../Search"

import DisplayCity from '../DisplayCity2/index'



class Index extends Component {
    render() {
        return (
            <div>
                <Search/>
                <DisplayCity/>
            </div>
        );
    }
}
export default Index;