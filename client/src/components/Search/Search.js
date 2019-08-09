import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Search extends Component {
    handleClick = (event) => {
        event.preventDefault();
        console.log('this is:', this);
      }
    render() {
        console.log(this.props)
        return (
            <div >
                <div class="input-group">
                    <input type="text" class="form-control" id="search-term" placeholder="Search term" aria-label="traveler search term" aria-describedby="button-addon4" />
                    <div class="input-group-append" id="button-addon4">
                        <button class="btn btn-outline-primary" type="button"  onClick={this.handleClick} >Filters</button>
                        <button class="btn btn-outline-success" type="button"  onClick={this.handleClick} >Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
